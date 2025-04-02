'use client';

import { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import type { FileUploadProps, ProcessingResult } from './types';

const FileUpload = ({ onUploadComplete, onFileChange, files }: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!files.pcd || !files.image || !files.calibration) {
      message.error('Please upload all required files (PCD, Image, and Matrix)');
      return;
    }

    const formData = new FormData();
    formData.append('pcd', files.pcd);
    formData.append('image', files.image);
    formData.append('matrix', files.calibration);

    setUploading(true);

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      message.success('Upload successful');
      onUploadComplete(data as ProcessingResult);
    } catch (error) {
      message.error('Upload failed');
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  // Convert files to UploadFile format for Antd
  const fileList: UploadFile[] = [
    files.pcd && {
      uid: 'pcd',
      name: files.pcd.name,
      status: 'done',
      size: files.pcd.size,
      type: files.pcd.type,
    },
    files.image && {
      uid: 'image',
      name: files.image.name,
      status: 'done',
      size: files.image.size,
      type: files.image.type,
    },
    files.calibration && {
      uid: 'calibration',
      name: files.calibration.name,
      status: 'done',
      size: files.calibration.size,
      type: files.calibration.type,
    },
  ].filter(Boolean) as UploadFile[];

  const uploadProps = {
    beforeUpload: (file: File) => {
      // Determine file type
      let type: 'pcd' | 'image' | 'calibration';
      if (file.name.endsWith('.pcd')) {
        type = 'pcd';
      } else if (file.type.startsWith('image/')) {
        type = 'image';
      } else {
        type = 'calibration';
      }
      onFileChange(type, file);
      return false; // Prevent automatic upload
    },
    fileList,
    multiple: false,
  };

  return (
    <div className="p-4 border rounded-lg bg-neutral-900/40 backdrop-blur-xl border-white/10">
      <h2 className="text-lg font-semibold mb-4 text-white">Upload Files</h2>
      <Upload {...uploadProps} className="upload-list-inline">
        <Button icon={<UploadOutlined />} className="text-white border-white/20 hover:border-white/40">
          Select Files
        </Button>
      </Upload>
      <div className="mt-4">
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={!files.pcd || !files.image || !files.calibration}
          loading={uploading}
          className="bg-blue-500 hover:bg-blue-600 text-white border-none"
        >
          {uploading ? 'Processing...' : 'Process Files'}
        </Button>
      </div>
      <div className="mt-4 text-sm text-white/60">
        <p>Required files:</p>
        <ul className="list-disc list-inside">
          <li>Point Cloud (.pcd)</li>
          <li>Image (.jpg, .png)</li>
          <li>Calibration Matrix (.txt)</li>
        </ul>
      </div>
    </div>
  );
};

export default FileUpload; 