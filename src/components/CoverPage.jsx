import React, { useEffect, useRef, useState } from 'react'
import './CoverPage.css'

const CoverPage = () => {
  const stampRef = useRef(null)
  const [stamped, setStamped] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStamped(false)
          setTimeout(() => setStamped(true), 50)
        } else {
          setStamped(false)
        }
      },
      { threshold: 0.3 }
    )
    if (stampRef.current) observer.observe(stampRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="cover-page page-container" ref={stampRef}>

      <div className={'cover-stamp' + (stamped ? ' cover-stamp--visible' : '')}>FILED</div>

      <div className="cover-title-block">
        <h1 className="cover-title">THE CASE FILE</h1>
        <p className="cover-subtitle">
          Re: Accumulated Evidence That Something Meaningful Has Occurred
        </p>
        <p className="cover-subtitle-note">
          (and the Court's Reluctant Obligation to Address It)
        </p>
      </div>

      <div className="cover-court-label">
        BEFORE THE COURT OF REASONABLE ADULT FEELINGS
      </div>
      <div className="cover-division">
        Cross-Pacific Division, GMT+8 vs. GMT-5 Jurisdiction
      </div>

      <hr className="hr-docket" />

      <div className="cover-matter">
        <p className="cover-in-the-matter">IN THE MATTER OF:</p>
        <p className="cover-party">
          <strong>Krystelle Anne Macaraeg</strong>, Petitioner
        </p>
        <p className="cover-party-note">(Amateur Overthinker, GMT +8)</p>
        <p className="cover-versus">v.</p>
        <p className="cover-party">
          <strong>Kane Castle</strong>, Respondent
        </p>
        <p className="cover-party-note">(Professional Ragebaiter, GMT-5)</p>
      </div>

      <hr className="hr-docket" />

      <div className="cover-meta">
        <p><span className="cover-meta-label">Docket No.</span> <span className="cover-docket-number">2026-0104<span className="cover-docket-tooltip">January 4, 2026. Filed under the date of official designation. The Respondent is invited to take note.</span></span></p>
        <p><span className="cover-meta-label">Filed:</span> March 2026</p>
        <p><span className="cover-meta-label">Status:</span> Overdue, honestly</p>
        <p><span className="cover-meta-label">Nature of Proceedings:</span> DECLARATORY ACTION</p>
      </div>

      <div className="cover-re">
        <p>Re: The Thing the Petitioner Has Been Meaning to Say</p>
        <p className="cover-re-indent">and Has Finally Organized Into a Legal Document</p>
        <p className="cover-re-indent">Because She Is, Unfortunately, Like This</p>
      </div>

      <hr className="hr-docket" />

      <div className="cover-footer-block">
        <div className="cover-footer-col">
          <p className="cover-footer-label">SUBMITTED BY:</p>
          <p>The Office of Her Ongoing Affection</p>
          <p className="cover-footer-note">(Est. December, Operational Immediately)</p>
        </div>
        <div className="cover-footer-col">
          <p className="cover-footer-label">PRESIDING:</p>
          <p>Her Own Increasingly Certain, Slightly Embarrassed,</p>
          <p>But Ultimately Unbothered Judgment</p>
        </div>
      </div>

    </section>
  )
}

export default CoverPage


