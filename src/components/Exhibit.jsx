import React from 'react'
import './Exhibit.css'

const Exhibit = ({ letter, title, category, children, notation, sealed }) => {
  if (sealed) {
    return (
      <div className="exhibit exhibit--sealed">
        <div className="exhibit-top">
          <span className="exhibit-letter">EXHIBIT {letter}</span>
        </div>
        <h3 className="exhibit-title exhibit-title--sealed">[SEALED]</h3>
        <hr className="hr-gold" />
        <div className="exhibit-notation">
          <span className="exhibit-notation-label">Notation:</span> The Petitioner knows what this is. The Respondent probably knows what this is. The Court is not getting involved.
        </div>
      </div>
    )
  }

  return (
    <div className="exhibit">
      <div className="exhibit-top">
        <span className="exhibit-letter">EXHIBIT {letter}</span>
        <span className="exhibit-category">{category}</span>
      </div>
      <h3 className="exhibit-title">{title}</h3>
      <hr className="hr-gold" />
      <div className="exhibit-body legal-text">
        {children}
      </div>
      {notation && (
        <div className="exhibit-notation">
          <span className="exhibit-notation-label">Notation:</span> {notation}
        </div>
      )}
    </div>
  )
}

export default Exhibit
