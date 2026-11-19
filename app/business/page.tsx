import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'Ingobozi Digital Consultants' };

export default function BusinessPage() {
  return (
    <main id="main">
      <header className="page-head">
        <p className="eyebrow">Future consulting venture · East London</p>
        <h1>Ingobozi Digital Consultants</h1>
        <p className="lead">My plan for helping small businesses improve everyday workflows, choose practical digital tools and build the confidence to use them.</p>
      </header>
      <div className="content">
        <article className="contact-panel business-panel">
          <Image src="/Portfolio/images/journey/ingobozi-brand.webp" width={1200} height={800} alt="Ingobozi Digital Consultants logo" />
          <div>
            <h2>Website and business plan</h2>
            <p>The plan covers my initial market research, proposed services, financial assumptions and first 90 days. I’m starting by exploring how independent repair workshops in East London handle quotes, approvals and job records.</p>
            <div className="actions">
              <a className="button" href="/Portfolio/ingobozi/index.html">Open the Ingobozi homepage</a>
              <a className="button secondary" href="/Portfolio/downloads/ingobozi-business-plan.pdf" download>Download the business plan (PDF)</a>
              <Link className="button secondary" href="/contact#document-requests">Request the business plan</Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
