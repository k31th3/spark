import { Wrapper } from '@/components'

import CareersCta from './CareersCta'
import CareersHero from './CareersHero'
import CareersMission from './CareersMission'
import CareersPositions from './CareersPositions'
import CareersWhy from './CareersWhy'

/* =========================================================
   CAREERS PAGE
========================================================= */

function Careers() {
  return (
    <Wrapper title="Careers" path="careers">
      <CareersHero />
      <CareersWhy />
      <CareersMission />
      <CareersPositions />
      <CareersCta />
    </Wrapper>
  )
}

export default Careers;