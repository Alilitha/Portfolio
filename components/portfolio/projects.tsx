import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import { projects, type Project } from '@/content/projects';
import {TechStack} from './tech-stack';
export function ProjectLogo({project:p}:{project:Project}){return <img className="project-logo" src={'/Portfolio/logos/'+p.slug+(p.slug==='drip-alert'?'.webp':'.svg')} alt={p.name+' logo'} width="64" height="64"/>}
export function ProjectCard({project:p}:{project:Project}) {return <Link className="project-card" href={'/software/'+p.slug}><div className="project-cover" style={{background:p.color}}><ProjectLogo project={p}/><span className="project-year">{p.year}<ArrowUpRight size={18}/></span><h3>{p.name}</h3></div><div className="project-body"><p className="eyebrow">{p.category}</p><p>{p.summary}</p><TechStack items={p.tech}/><span className="card-action">Explore project <ArrowUpRight size={18}/></span></div></Link>}
export function ProjectGrid(){return <div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div>}
