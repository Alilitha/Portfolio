import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/content/projects';
import { TechStack } from './tech-stack';

function projectLogoPath(project: Project) {
  return `/Portfolio/logos/${project.slug}-official.webp`;
}

export function projectArtwork(project: Project) {
  return {
    '--project-tint': project.color,
    '--project-art': `url("${projectLogoPath(project)}")`,
  } as CSSProperties;
}

export function ProjectLogo({ project }: { project: Project }) {
  return <img className="project-logo" src={projectLogoPath(project)} alt="" width={80} height={80} loading="lazy" />;
}

export function ProjectCard({ project, showPreview = false }: { project: Project; showPreview?: boolean }) {
  const poster = showPreview ? project.videos?.[0]?.poster : undefined;
  return (
    <Link className="project-card" href={`/software/${project.slug}`}>
      <div className="project-cover" style={projectArtwork(project)}>
        <ProjectLogo project={project} />
        <span className="project-year">{project.year}</span>
        <h3>{project.name}</h3>
      </div>
      {poster && <img className="project-preview" src={`/Portfolio/images/${poster}`} alt={`${project.name} application screenshot`} width={640} height={360} loading="lazy" />}
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <p>{project.summary}</p>
        <TechStack items={project.tech} />
        <span className="card-action">Explore project <ArrowUpRight size={18} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

export function ProjectGrid() {
  return <div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>;
}
