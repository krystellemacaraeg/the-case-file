import React, { useEffect, useRef, useState } from 'react'
import './Ruling.css'

const Ruling = () => {
  const ref = useRef(null)
  const [preamble, setPreamble] = useState(false)
  const [dots, setDots] = useState(false)
  const [declaration, setDeclaration] = useState(false)
  const timers = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPreamble(false)
          setDots(false)
          setDeclaration(false)
          timers.current.push(setTimeout(() => setPreamble(true), 100))
          timers.current.push(setTimeout(() => setDots(true), 500))
          timers.current.push(setTimeout(() => setDeclaration(true), 2800))
        } else {
          timers.current.forEach(t => clearTimeout(t))
          timers.current = []
          setPreamble(false)
          setDots(false)
          setDeclaration(false)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const cls = (base, condition) => {
    if (condition) { return base + ' ' + base + '--visible' }
    return base
  }

  return (
    <div className="ruling" ref={ref}>
      <p className={cls('ruling-preamble', preamble)}>
        Having reviewed the totality of the evidence, cross-referenced it with the
        Petitioner's documented internal deliberations, and waited what felt like
        a responsible amount of time, the Court issues the following:
      </p>
      <div className={cls('ruling-pause', dots)}>
        <span className="ruling-pause-dot" />
        <span className="ruling-pause-dot" />
        <span className="ruling-pause-dot" />
      </div>
      <div className={cls('ruling-declaration', declaration)}>
        <p className="ruling-main">
          The Petitioner is in love with the Respondent.
        </p>
        <p className="ruling-body">
          The Court notes this was not a difficult conclusion to reach.
          It was only difficult to say.
        </p>
        <p className="ruling-body">
          The Court further notes that this declaration does not require an immediate
          response, a matching declaration, or anything at all, really. The Respondent
          is not on trial. He is not being asked to rule.
        </p>
        <p className="ruling-body">
          The Petitioner is simply placing this on the record
          because it is true
          and because she has never been good at leaving true things unsaid.
        </p>
      </div>
    </div>
  )
}

export default Ruling
