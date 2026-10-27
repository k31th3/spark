import type { ElementType } from 'react'
import { Button, Reveal, Section, Text, Wrapper } from '@/components'
import { cn } from '@/lib/utils'
import type { ProjectsProps } from './Projects.types'
import { getDisplayedProjects } from './Projects.helpers'
import styles from './Projects.module.css'

/* =========================================================
   HELPERS
========================================================= */

const pad = (value: number, length: number) =>
  String(value).padStart(length, '0')

/* =========================================================
   PROJECTS (WORK)
========================================================= */

function Projects({
  eyebrow = 'Work',
  title = 'Selected work',
  projects,
  limit,
  viewAllLabel = 'View all work',
  viewAllHref,
  onViewAllClick,
  className = '',
  ...props
}: ProjectsProps) {
  const displayedProjects = getDisplayedProjects(
    projects,
    limit
  )

  return (
    <Section
      aria-labelledby="work-heading"
      spacing="none"
      className={cn(styles.section, className)}
      {...props}
    >
      <Wrapper.Body className={styles.container}>

        {/* =================================================
            HEADER
        ================================================= */}

        <Reveal variant="fade">
          <div className={styles.header}>
            <div className={styles.headingGroup}>
              {eyebrow && (
                <Text
                  as="span"
                  variant="label"
                  color="muted"
                >
                  ({eyebrow})
                </Text>
              )}

              <div className={styles.titleRow}>
                <h2
                  id="work-heading"
                  className={styles.title}
                >
                  {title}
                </h2>

                <Text
                  as="span"
                  variant="label"
                  color="muted"
                  className={styles.count}
                >
                  ({pad(displayedProjects.length, 2)})
                </Text>
              </div>
            </div>

            {viewAllHref && (
              <Button
                href={viewAllHref}
                variant="outlineDark"
                size="nav"
                roll
                arrow
                onClick={onViewAllClick}
                className="w-fit"
              >
                {viewAllLabel}
              </Button>
            )}
          </div>
        </Reveal>

        {/* =================================================
            GRID
        ================================================= */}

        <ul
          role="list"
          className={styles.grid}
        >
          {displayedProjects.map((project, index) => {
            const Shell: ElementType = project.href ? 'a' : 'div'

            const shellProps = project.href
              ? { href: project.href, 'data-cursor-label': 'View' }
              : {}

            return (
              <li
                key={project.id}
                className={styles.item}
              >
                <Reveal
                  variant="slide"
                  delay={(index % 2) * 120}
                >
                  <Shell
                    className={styles.card}
                    {...shellProps}
                  >
                    <div className={styles.frame}>
                      <img
                        src={project.image}
                        alt={
                          project.imageAlt ??
                          `${project.title} project preview`
                        }
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.meta}>
                      <div className={styles.metaMain}>
                        <Text
                          as="span"
                          variant="label"
                          color="muted"
                          className={styles.index}
                        >
                          ({pad(index + 1, 3)})
                        </Text>

                        <h3 className={styles.name}>
                          {project.title}
                        </h3>
                      </div>

                      {project.year && (
                        <Text
                          as="span"
                          variant="label"
                          color="muted"
                          className={styles.year}
                        >
                          {project.year}
                        </Text>
                      )}
                    </div>

                    <Text
                      as="p"
                      variant="label"
                      color="muted"
                      className={styles.category}
                    >
                      {project.category}
                    </Text>

                    {project.description && (
                      <Text
                        as="p"
                        variant="bodySmall"
                        color="muted"
                        className={styles.description}
                      >
                        {project.description}
                      </Text>
                    )}
                  </Shell>
                </Reveal>
              </li>
            )
          })}
        </ul>

      </Wrapper.Body>
    </Section>
  )
}

export default Projects;