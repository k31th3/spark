import { Image, Reveal, Section, Text, Wrapper } from "@/components";
import { cn } from "@/lib/utils";

import { icons, placeholders, tones, type Card } from "../Content";
import styles from "./PortfolioGrid.module.css";

interface Props {
    projects: Card[];
}

const COLUMNS = 3;

function ProjectCard({ project, image }: { project: Card; image: string }) {
    const CategoryIcon = icons[project.category];

    const content = (
        <>
            <Image
                src={image}
                alt={`${project.title} preview`}
                loading="lazy"
                wrapperClassName={styles.frame}
                className={styles.image} />

            <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <Text variant="body" color="muted" className={styles.description}>
                    {project.information}
                </Text>

                <span className={cn(styles.pill, styles[tones[project.category]])}>
                    <CategoryIcon size={18} aria-hidden="true" />
                    {project.category}
                </span>
            </div>
        </>
    );

    return project.link ? (
        <a href={project.link} data-cursor-label="View" className={styles.card}>{content}</a>
    ) : (
        <article className={styles.card}>{content}</article>
    );
}

function PortfolioGrid({ projects }: Props) {
    const columns = Array.from({ length: COLUMNS }, (_, column) =>
        projects
            .map((project, index) => ({ project, index }))
            .filter(({ index }) => index % COLUMNS === column)
    );

    return (
        <Section id="work" spacing="none" className={styles.section}>
            <Wrapper.Body className={styles.container}>
                {projects.length === 0 ? (
                    <div className={styles.empty}>
                        <Text variant="body" color="muted">No projects in this category yet.</Text>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {columns.map((items, column) => (
                            <div key={column} className={styles.column}>
                                {items.map(({ project, index }) => (
                                    <div key={project.id} style={{ order: index }}>
                                        <Reveal variant="slide" delay={(index % COLUMNS) * 120}>
                                            <ProjectCard project={project} image={project.image ?? placeholders[index % placeholders.length]} />
                                        </Reveal>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </Wrapper.Body>
        </Section>
    );
}

export default PortfolioGrid;