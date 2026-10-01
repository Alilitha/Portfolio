import type { Metadata } from 'next';
import {Navigation} from '@/components/portfolio/navigation';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Alilitha Manengela — Software & Data', template: '%s | Alilitha Manengela' }, description: 'Information Systems graduate building practical software and turning data into useful decisions. Cape Town, South Africa.', icons: {icon:'/Portfolio/favicon.svg'} };
export default function Layout({children}: {children: React.ReactNode}) { return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Navigation/>{children}<footer><p>Alilitha Manengela<span>Software, data, and the people they serve.</span></p><div><a href="mailto:alilithamanengela@gmail.com">Email</a><a href="https://github.com/Alilitha">GitHub</a><span>Cape Town · South Africa</span></div></footer></body></html> }
