import React, { useEffect, useState } from 'react'
import './ScrollProgress.css'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      let pct = 0
      if (docHeight > 0) {
        pct = (scrollTop / docHeight) * 100
      }
      setProgress(Math.min(pct, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div
        className="scroll-progress-bar"
        style={{ width: progress + '%' }}
      />
      <div
        className="scroll-progress-glow"
        style={{ left: progress + '%' }}
      />
    </div>
  )
}

export default ScrollProgress
