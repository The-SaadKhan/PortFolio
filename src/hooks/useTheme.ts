'use client'

import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [theme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return { theme }
}
