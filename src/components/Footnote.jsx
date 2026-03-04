import React, { useState, useRef, useEffect } from 'react'
import './Footnote.css'

const Footnote = ({ number, text }) => {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState('above')
  const ref = useRef(null)
  const tooltipRef = useRef(null)

  useEffect(() => {
    if (!visible || !ref.current || !tooltipRef.current) return
    const rect = ref.current.getBoundingClientRect()
    const tooltipHeight = tooltipRef.current.offsetHeight
    const spaceAbove = rect.top
    if (spaceAbove > tooltipHeight + 16) {
      setPosition('above')
    } else {
      setPosition('below')
    }
  }, [visible])

  return (
    <span
      className="footnote"
      ref={ref}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
      aria-label={'Footnote ' + number + ': ' + text}
    >
      <span className="footnote-marker">[{number}]</span>

      <span
        ref={tooltipRef}
        className={'footnote-tooltip footnote-tooltip--' + position + (visible ? ' footnote-tooltip--visible' : '')}
        role="tooltip"
        aria-hidden={!visible}
      >
        <span className="footnote-tooltip-number">fn. {number}</span>
        <span className="footnote-tooltip-text">{text}</span>
      </span>
    </span>
  )
}

export default Footnote
