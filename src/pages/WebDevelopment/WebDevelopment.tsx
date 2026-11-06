import { Wrapper } from '@/components'

import WebDevHero from './WebDevHero'
import WebDevSolutions from './WebDevSolutions'
import WebDevWhy from './WebDevWhy'


function WebDevelopment() {
  return (
    <Wrapper title="Web Development" path="web-development">
      <WebDevHero />
      <WebDevSolutions />
      <WebDevWhy />
    </Wrapper>
  )
}

export default WebDevelopment