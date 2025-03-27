"use client"

import { Home, Laptop, FileText } from 'lucide-react'
import { NavBar } from "./nav-bar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Sensors', url: '#sensors', icon: Laptop },
    { name: 'Details', url: '#sensor-details', icon: FileText }
  ]

  return <NavBar items={navItems} />
} 