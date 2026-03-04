import React, { useEffect, useRef, useState } from 'react'
import './FindingsOfFact.css'

const findings = [
  'The Respondent has been consistent. Not in a performative way. Just quietly, repeatedly, without making a production of it, which the Petitioner has found, somewhat against her will, more convincing than any grand gesture.',
  'The Respondent does not escalate. The Petitioner, who came into these proceedings pre-loaded with anxiety about exactly that, has had to substantially revise her expectations. This has been inconvenient and also very good.',
  'The Respondent told the Petitioner she was not too much. The Petitioner has, against her better judgment, chosen to believe him.',
  'The Petitioner is, by her own admission, a lot. She overthinks. She triple-texts. She is chaotic in the specific way of someone who is also trying very hard. She has been, across the duration of these proceedings, received without complaint.',
  'The Petitioner is, by measurable account, steadier than she was in December. The Court attributes this partly to her own work and partly to the fact that nothing in the record has given her a real reason to be otherwise.',
  'The Petitioner did not expect this.',
  'Months of ordinary, unremarkable, undramatic moments have added up to something the Petitioner cannot explain away, has tried to, and has officially given up attempting.',
  'She has reviewed the evidence. She has stress-tested her own conclusions. She has, in a pattern consistent with her documented tendencies, definitely overthought this.',
  'She is at the same conclusion she was at before she started overthinking it.',
  'The Court finds this conclusive.'
]

const cls = (base, condition) => {
  if (condition) { return base + ' ' + base + '--visible' }
  return base
}

const FindingItem = ({ index, text }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const delay = Math.min(index * 60, 300)
  const pilcrow = '\u00b6' + (index + 1) + '.'

  return (
    <div
      ref={ref}
      className={cls('finding-item', visible)}
      style={{ transitionDelay: delay + 'ms' }}
    >
      <span className="finding-pilcrow">{pilcrow}</span>
      <p className="finding-text">{text}</p>
    </div>
  )
}

const FindingsOfFact = () => {
  return (
    <div className="findings-of-fact">
      {findings.map((text, i) => (
        <FindingItem key={i} index={i} text={text} />
      ))}
    </div>
  )
}

export default FindingsOfFact
