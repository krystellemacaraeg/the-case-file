import React from 'react'
import './ReliefSought.css'
import Footnote from './Footnote'

const em = '\u2014'

const ReliefSought = () => {
  return (
    <div className="relief-sought">
      <p className="relief-intro">
        The Petitioner respectfully requests:
      </p>

      <ol className="relief-list">
        <li className="relief-item">
          <span className="relief-marker">(a)</span>
          <span className="relief-text">
            some acknowledgment that this website took effort and she did not have to do all this {em} and yet;
          </span>
        </li>
        <li className="relief-item">
          <span className="relief-marker">(b)</span>
          <span className="relief-text">
            continued proceedings, at whatever pace feels right, no pressure, the Court is chill about it;
            <Footnote number={3} text="The Court is not chill about it. The Court is extremely normal about it. Please disregard this footnote." />
          </span>
        </li>
        <li className="relief-item">
          <span className="relief-marker">(c)</span>
          <span className="relief-text">
            the in-person hearing, June, Philippines, logistics TBD {em} the Court is looking forward to having jurisdiction in the same room for once;
          </span>
        </li>
        <li className="relief-item">
          <span className="relief-marker">(d)</span>
          <span className="relief-text">
            his continued general existence in her life.<span className="relief-hidden-message">I will love you for a billion light years, baby. And long after forever.</span>
          </span>
        </li>
      </ol>

      <div className="relief-closing">
        <p>The Petitioner does not request an immediate ruling. <br />She is not filing this to get something.<br /> She is filing this because it is true, and she wanted him to know, <br />and she made a whole document about it, <br />which is, arguably, the most <em>her</em> thing she has ever done.</p>
      </div>
    </div>
  )
}

export default ReliefSought




