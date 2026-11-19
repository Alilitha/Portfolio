import Image from 'next/image';
import { Journey } from '@/components/portfolio/journey';

export default function Home() {
  return (
    <main id="main" className="consulting-home">
      <section className="consulting-hero" aria-labelledby="home-title">
        <div className="consulting-hero-copy">
          <p className="eyebrow">Digital Solutions Builder · East London</p>
          <h1 id="home-title">Alilitha <span>Manengela</span></h1>
          <p className="intro">I want to help small businesses use technology with confidence. My path to that work has taken me through software development, business analysis and mentoring.</p>
          <div className="actions">
            <a className="button" href="#journey">Explore my journey</a>
            <a className="button secondary" href="#work">View my work</a>
          </div>
          <ul className="journey-focus" aria-label="Areas of interest">
            <li>Business analysis</li><li>Digital solutions</li><li>AI and digital skills</li><li>Quality and process improvement</li>
          </ul>
        </div>
        <Image className="consulting-portrait" src="/Portfolio/images/alilitha-profile-studio.webp"
          alt="Alilitha Manengela seated at a desk in a navy suit" width={1536} height={1024} preload />
      </section>
      <Journey />
    </main>
  );
}
