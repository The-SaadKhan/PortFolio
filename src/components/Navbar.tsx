'use client'

import { Home, User, Code, GraduationCap, Briefcase, Mail } from 'lucide-react'
import { NavBar } from './ui/tubelight-navbar'

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Skills', url: '#skills', icon: Code },
  { name: 'Education', url: '#education', icon: GraduationCap },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Contact', url: '#contact', icon: Mail },
]

export default function Navbar() {
  return <NavBar items={navItems} />
}
