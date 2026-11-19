import { DocumentRequests } from '@/components/portfolio/document-requests';

export const metadata = { title: 'Contact' };

export default function Page() {
  return (
    <main id="main">
      <div className="page-head">
        <p className="eyebrow">Contact</p>
        <h1>Contact Alilitha</h1>
        <p className="lead">Get in touch about software development, business systems, AI projects or opportunities to collaborate.</p>
      </div>
      <section className="content" aria-labelledby="email-title">
        <div className="contact-panel">
          <h2 id="email-title">Send me an email</h2>
          <p>Share a little about your project or opportunity and what you have in mind.</p>
          <a className="email-address" href="mailto:alilithamanengela@gmail.com">alilithamanengela@gmail.com</a>
          <p>East London, South Africa</p>
        </div>
        <DocumentRequests />
      </section>
    </main>
  );
}
