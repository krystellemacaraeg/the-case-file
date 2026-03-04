import React from 'react'
import './SectionBlock.css'

const SectionBlock = ({ numeral, label, children }) => {
  return (
    <section className="section-block page-container">
      <div className="section-header">
        <span className="section-numeral">{numeral}</span>
        <div className="section-heading-group">
          <span className="section-label">SECTION</span>
          <h2 className="section-title">{label}</h2>
        </div>
      </div>
      <hr className="hr-gold" />
      <div className="section-body legal-text">
        {children}
      </div>
    </section>
  )
}

export default SectionBlock



