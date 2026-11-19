'use client';

import { useState, type FormEvent } from 'react';

const requests = {
  cv: { title: 'CV', context: 'Job title or reference', description: 'Include the role so I can share the most relevant CV.' },
  academic: { title: 'academic record', context: 'Purpose of the request', description: 'Tell me why you need the record and who will review it.' },
  business: { title: 'Ingobozi business plan', context: 'Purpose of the request', description: 'Tell me what you’d like to discuss about the plan.' },
};

export function DocumentRequests() {
  const [kind, setKind] = useState<keyof typeof requests>('cv');
  const [emailLink, setEmailLink] = useState('');
  const request = requests[kind];

  function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get('name') ?? '').trim();
    const organisation = String(fields.get('organisation') ?? '').trim();
    const context = String(fields.get('context') ?? '').trim();
    if (!name || !organisation || !context) return;
    const subject = encodeURIComponent(`Request for ${request.title}: ${context}`);
    const body = encodeURIComponent(`Hi Alilitha,\n\nI’d like to request your ${request.title}.\n\nName: ${name}\nOrganisation: ${organisation}\n${request.context}: ${context}\n\nThank you,\n${name}`);
    setEmailLink(`mailto:alilithamanengela@gmail.com?subject=${subject}&body=${body}`);
  }

  return (
    <section id="document-requests" className="contact-panel document-requests" aria-labelledby="request-title">
      <h2 id="request-title">Request a document</h2>
      <p>Prepare an email to request my CV, academic record, or the Ingobozi business plan.</p>
      <form onSubmit={prepareRequest} onInput={() => setEmailLink('')}>
        <label>Document
          <select value={kind} onChange={(event) => { setKind(event.target.value as keyof typeof requests); setEmailLink(''); }}>
            <option value="cv">CV</option>
            <option value="academic">Academic record</option>
            <option value="business">Ingobozi business plan</option>
          </select>
        </label>
        <label>Your name<input name="name" autoComplete="name" required pattern=".*\S.*" maxLength={100} /></label>
        <label>Organisation<input name="organisation" autoComplete="organization" required pattern=".*\S.*" maxLength={120} /></label>
        <label>{request.context}
          <input key={kind} name="context" required pattern=".*\S.*" maxLength={180} aria-describedby="request-context" />
        </label>
        <p id="request-context">{request.description}</p>
        <div className="actions">
          <button className="button" type="submit">Prepare email</button>
          {emailLink && <a className="button secondary" href={emailLink}>Open email draft</a>}
        </div>
        <p role="status">{emailLink ? 'Draft ready. Open it in your email app to review and send.' : ''}</p>
      </form>
    </section>
  );
}
