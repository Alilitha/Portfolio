import Link from 'next/link';
import {notFound} from 'next/navigation';
import {analyses} from '@/content/analyses';
import Dashboard from '@/components/portfolio/dashboard';
export function generateStaticParams(){return analyses.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=analyses.find(a=>a.slug===slug);return {title:a?.title??'Analysis not found',description:a?.question}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=analyses.find(a=>a.slug===slug);if(!a)notFound();return <main id="main"><div className="page-head"><div className="breadcrumbs"><Link href="/analytics">Data analytics</Link> / {a.title}</div><p className="eyebrow">{a.category} · {a.period}</p><h1>{a.title}</h1><p className="lead">{a.question}</p><p className="study-meta">{a.source} · Independent, AI-assisted portfolio study</p></div><div className="content"><Dashboard slug={slug}/></div></main>}
