import { useNavigate } from 'react-router-dom'
import { LuSmile } from 'react-icons/lu'

import { Button } from '@/components'
import { cn } from '@/lib/utils'

import { DEMO_HREF, WORK_PATH } from './WebDevelopment.config'
import styles from './WebDevelopment.module.css'

function DemoButtons({ className }: { className?: string }) {
  const navigate = useNavigate()

  return (
    <div className={cn(styles.buttons, className)}>
      <Button
        href={DEMO_HREF}
        variant="dark"
        size="hero"
        roll
        glow
        arrow
      >
        Book a Demo
      </Button>

      <Button
        href={WORK_PATH}
        onClick={(event) => {
          event.preventDefault()
          navigate(WORK_PATH)
        }}
        variant="outline"
        size="hero"
        roll
        icon={<LuSmile size={18} />}
        className="bg-white"
      >
        See our Work
      </Button>
    </div>
  )
}

export default DemoButtons;