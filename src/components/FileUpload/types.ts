export interface ProcessingResult {
  detections: {
    bbox: number[];
    confidence: number;
    class: number;
  }[];
  projected_points: {
    point: number[];
    size: number;
  }[];
  status: string;
}

export interface FileState {
  pcd: File | null;
  image: File | null;
  calibration: File | null;
}

export interface FileUploadProps {
  onUploadComplete: (data: ProcessingResult) => void;
  onFileChange: (type: 'pcd' | 'image' | 'calibration', file: File) => void;
  files: FileState;
} 