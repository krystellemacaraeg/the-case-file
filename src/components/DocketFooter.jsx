import React from 'react'
import './DocketFooter.css'

const DocketFooter = () => {
  return (
    <footer className="docket-footer page-container">

      <div className="docket-footer-rule" />

      <div className="docket-footer-submitted">
        <p className="docket-footer-label">Respectfully submitted,</p>
        <div className="docket-footer-signature">
          <span className="docket-footer-sig-line" />
          <p className="docket-footer-name">Krystelle Anne Macaraeg</p>
          <p className="docket-footer-title">Pro Se Petitioner</p>
          <p className="docket-footer-title">Office of Her Ongoing Affection</p>
          <p className="docket-footer-title">Philippines {"\u2014"} GMT+8</p>
          <p className="docket-footer-title">Dated: March 2026</p>
        </div>
      </div>

      <div className="docket-footer-rule" />

      <div className="docket-footer-certificate">
        <p className="docket-footer-cert-label">CERTIFICATE OF SERVICE:</p>
        <p className="docket-footer-cert-body">
          This document was delivered electronically, with full awareness
          that the Respondent may be at work, half asleep, or in the
          middle of something when he opens it.
        </p>
        <p className="docket-footer-cert-body">
          The Court recommends he read it anyway.
        </p>
        <p className="docket-footer-cert-aside">It's not that long.</p>
        <p className="docket-footer-cert-aside">(It is a little long.)</p>
        <p className="docket-footer-cert-aside">(She regrets nothing.)</p>
      </div>

      <div className="docket-footer-rule" />

      <div className="docket-footer-end">
        <span className="docket-footer-end-mark">end of filing</span>
      </div>

    </footer>
  )
}

export default DocketFooter

