import type { Metadata } from 'next';
import {Navigation} from '@/components/portfolio/navigation';
import './globals.css';
import './portfolio-theme.css';
export const metadata: Metadata = { title: { default: 'Alilitha Manengela — Business, AI & Digital Skills', template: '%s | Alilitha Manengela' }, description: 'Alilitha Manengela is an Information Systems graduate in East London exploring software development, data, AI and business systems.', icons: {icon:'/Portfolio/favicon.svg'} };
export default function Layout({children}: {children: React.ReactNode}) { return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Navigation/>{children}<footer><p>Alilitha Manengela<span>Business processes, AI and digital skills.</span></p><div><a href="mailto:alilithamanengela@gmail.com">Email</a><a href="https://github.com/Alilitha">GitHub</a><span>East London · South Africa</span></div></footer></body></html> }
