import React from 'react'
import ScrollProgress from './components/ScrollProgress'
import CoverPage from './components/CoverPage'
import SectionBlock from './components/SectionBlock'
import Exhibit from './components/Exhibit'
import FindingsOfFact from './components/FindingsOfFact'
import Ruling from './components/Ruling'
import ReliefSought from './components/ReliefSought'
import Footnote from './components/Footnote'
import DocketFooter from './components/DocketFooter'

const em = '\u2014'

const App = () => {
  return (
    <>
      <ScrollProgress />

      <CoverPage />

      <SectionBlock numeral="I" label="Jurisdiction">
        <p>
          This Court asserts jurisdiction on the grounds that the Petitioner has spent a frankly
          embarrassing amount of time thinking about the Respondent and has determined that
          formal proceedings are preferable to simply continuing to think about it indefinitely.
        </p>
        <p className="legal-lead">Jurisdiction is further supported by:</p>
        <ul className="legal-sublist">
          <li>
            <span className="legal-sublist-marker">(a)</span>
            <span>a 13-hour time difference that both parties have continued to navigate;</span>
          </li>
          <li>
            <span className="legal-sublist-marker">(b)</span>
            <span>
              the Petitioner's phone, which has logged more screen time since December
              than in the entire preceding year, for reasons the Court has elected not to
              investigate<Footnote number={1} text="The screen-on frequency data has been reviewed and will not be entered into the public record. The Petitioner's dignity has been considered." />;
            </span>
          </li>
          <li>
            <span className="legal-sublist-marker">(c)</span>
            <span>
              the existence of this document, which the Petitioner built from scratch,
              which should tell you everything about jurisdiction.
            </span>
          </li>
        </ul>
        <p className="court-note">The Court notes that the Respondent did not ask for this.</p>
        <p className="court-note">The Court also notes that the Petitioner could not help it.</p>
        <p className="court-note">These facts are not in conflict.</p>
      </SectionBlock>

      <SectionBlock numeral="II" label="Statement of Facts">
        <p>
          {'\u00b61'}. In December, Petitioner matched with Respondent on a dating application.
          Communication began that same day, because apparently neither party had anything
          better to do.
        </p>
        <p>
          {'\u00b62'}. Daily communication followed. Then more daily communication. The Petitioner
          would like to clarify that she was very normal about
          this. <Footnote number={2} text="The Petitioner checked her phone with a frequency that this Court is not legally permitted to disclose. What can be disclosed: it was a lot. What cannot be disclosed: the exact number. What the Court will say anyway: it was a lot." />
        </p>
        <p>
          {'\u00b63'}. In January, an official designation was established. The date was not chosen
          randomly for this filing. The Petitioner will not be elaborating. The Docket Number
          speaks for itself, if the Respondent cares to look.
        </p>
        <p>
          {'\u00b64'}. The Respondent is a law student. He works night shifts. He is, at any given moment,
          probably tired. He texts back anyway. The Court finds this either very sweet or very
          concerning and has decided not to investigate further.
        </p>
        <p>
          {'\u00b65'}. The Petitioner, for her part, thinks too much. She knows this. She has filed this
          entire legal document instead of just saying the thing, which is submitted as Exhibit A
          through the entirety of this document.
        </p>
        <p>
          {'\u00b66'}. There were moments of misalignment. They were handled. The Court will not
          elaborate, not because it lacks information, but because both parties handled it well
          and that is, frankly, the whole point.
        </p>
        <p>
          {'\u00b67'}. There is a general agreement that these proceedings will, at some point, move into
          a physical venue. A timeframe has been proposed. The Petitioner is on record as being
          very chill about this. The Court neither confirms nor denies.
        </p>
      </SectionBlock>

      <SectionBlock numeral="III" label="Exhibits">
        <Exhibit
          letter="A"
          title={'He Stayed Consistent and the Petitioner Did Not Know What To Do With That'}
          category={'Behavioral Evidence / Mild Crisis'}
          notation={'The Petitioner waited for the catch. No catch was found. This exhibit is the catch not being found.'}
        >
          <p>
            The record reflects consistent communication across time zones, competing schedules,
            and the general chaos of being a person with obligations. This was not requested.
            It was not negotiated. It simply continued.
          </p>
          <p>
            The Petitioner, whose prior experience had not prepared her for this, responded by
            waiting for it to stop.
          </p>
          <p>It did not stop.</p>
        </Exhibit>

        <Exhibit
          letter="B"
          title={'The Part Where He Was Calm and She Was Not'}
          category={'Conduct Under Chaos'}
          notation={'The Court finds that being someone' + "'s" + ' calm when they cannot locate their own is not a small thing. It has entered this as evidence accordingly.'}
        >
          <p>
            When the Petitioner was, on various occasions, a lot {em} spiraling, over-apologizing,
            convinced she had done something wrong when she had not {em} the Respondent did not
            match her energy in the bad direction.
          </p>
          <p>He stayed calm. He checked in. He said she wasn't too much.</p>
          <p>
            He said it like he meant it, which, the Petitioner will admit, was the part that got her.
          </p>
        </Exhibit>

        <Exhibit
          letter="C"
          title={'The Plan'}
          category={'Forward Intent'}
          notation={'The Petitioner would like it on record that she is being very chill about this. The Court neither confirms nor denies.'}
        >
          <p>
            Both parties have expressed intent to meet in person. A timeframe exists. The details
            are pending, which the Petitioner is handling with characteristic patience.
          </p>
        </Exhibit>

        <Exhibit
          letter="D"
          sealed={true}
        />
      </SectionBlock>

      <SectionBlock numeral="IV" label="Findings of Fact">
        <FindingsOfFact />
      </SectionBlock>

      <SectionBlock numeral="V" label="Conclusions of Law">
        <Ruling />
      </SectionBlock>

      <SectionBlock numeral="VI" label="Order & Relief Sought">
        <ReliefSought />
      </SectionBlock>

      <DocketFooter />
    </>
  )
}

export default App
