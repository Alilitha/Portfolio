import Link from 'next/link';
import { Eye, Droplets, School, Car, WalletCards, ChartNoAxesCombined } from 'lucide-react';
import { projects, type Project } from '@/content/projects';
const icons = {eye:Eye,drop:Droplets,school:School,car:Car,wallet:WalletCards,chart:ChartNoAxesCombined};
export function ProjectCard({project:p}:{project:Project}) {const Icon=icons[p.icon as keyof typeof icons];return <Link className="project-card" href={'/software/'+p.slug}><div className="project-cover" style={{background:p.color}}><h3>{p.name}</h3><Icon aria-hidden="true"/></div><div className="project-body"><p className="eyebrow">{p.category} · {p.year}</p><p>{p.summary}</p><div className="project-meta">{p.tech.map(t=><span key={t} className="badge">{t}</span>)}</div><span className="text-link">Read the project story</span></div></Link>}
export function ProjectGrid(){return <div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>}
