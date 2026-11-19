import Image from 'next/image';
import Link from 'next/link';
import { ProjectCard } from '@/components/portfolio/projects';
import { projects } from '@/content/projects';

const evidence = '/Portfolio/images/journey/';
const credentials = [
  ['fintech', 'UCT–Cortex Hub Fintech Lab 2026 Winter School', 'UCT Financial Innovation Hub and The Cortex Hub · 22 June–10 July 2026'],
  ['fnb', 'Certificate in Full Stack Development', 'FNB App Academy · 15 July 2025'],
  ['ai-fluency', 'Microsoft AI Fluency Course', 'Microsoft and Geekulcha · 22 June 2025'],
  ['python', 'Python for Data Science', 'IBM · 11 August 2025'],
  ['cloud', 'Introduction to Cloud', 'IBM SkillsBuild · 11 August 2025'],
  ['hp', 'Customer Experience (CX) for Business Success', 'HP LIFE · 2025'],
];

function EvidencePhoto({ file, alt, caption, width, height }: {
  file: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="journey-photo">
      <Image src={evidence + file} alt={alt} width={width} height={height} sizes="(max-width: 760px) 90vw, 540px" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Journey() {
  return (
    <div className="journey">
      <nav className="journey-index" aria-label="On this page">
        <a href="#journey">My roots</a>
        <a href="#education">Education and research</a>
        <a href="#experience-stories">Experience</a>
        <a href="#work">Projects</a>
        <a href="#ingobozi">Ingobozi</a>
        <a href="#credentials">Credentials</a>
      </nav>
      <section id="journey" className="journey-panel journey-roots" aria-labelledby="roots-title">
        <div>
          <p className="eyebrow">East London, South Africa</p>
          <h2 id="roots-title">Where my interest in business began</h2>
        </div>
        <div>
          <p>I grew up around township and rural entrepreneurs. My father runs an upholstery business. Around me, people worked as plumbers, mechanics and welders, ran spaza shops and rented out backyard rooms. I saw how much skill and judgement went into making a living this way.</p>
          <p>It made me curious about what happens when that business knowledge meets practical technology. I want to work alongside owners to find tools that fit their routines, help them manage their work and give them more confidence making decisions.</p>
        </div>
      </section>

      <section id="education" className="journey-panel journey-split" aria-labelledby="education-title">
        <div>
          <h2 id="education-title">Education</h2>
          <ol className="journey-milestones">
            <li><strong>2022</strong> Completed matric at Umtata International School.</li>
            <li><strong>University of Fort Hare</strong> Started in BCom General and moved into Information Systems in my second year.</li>
            <li><strong>2025</strong> Completed my BCom studies in Information Systems. The degree was awarded in 2026.</li>
            <li><strong>2026</strong> Completed Information Systems Honours, studying emerging technologies, AI, robotics, cybersecurity, innovation, ethics and regulation.</li>
          </ol>
        </div>
        <div className="journey-inset">
          <h3>Research on rural digital entrepreneurship</h3>
          <p>I explored how digital skills can help rural entrepreneurs sustain their businesses. My study pointed to practical learning tied to business needs, flexible training for different levels of confidence, continued learning as tools change, and technical support when an owner gets stuck.</p>
          <p>That is the kind of support I want to help design: tied to real work and available when people need it.</p>
        </div>
      </section>

      <section id="experience-stories" className="journey-panel" aria-labelledby="experience-title">
        <h2 id="experience-title">Leadership, mentoring and community work</h2>

        <article id="hackathon" className="journey-story">
          <div>
            <p className="eyebrow">2025 · Human Rights Day Hackathon</p>
            <h3>Getting more eyes on what schools need</h3>
            <p>I led Team Go Getters. We proposed iFundStructure to make school infrastructure needs visible to parents, community groups, funders, suppliers and contractors. The team placed second.</p>
            <p>Working on the proposal taught me to consider what each person could contribute. A supplier, a parent and a contractor all need different information before they can act.</p>
            <div className="journey-links">
              <Link href="/software/ifundstructure">Read the project case study</Link>
              <a href="https://www.facebook.com/share/p/1ZmggucMyT/" target="_blank" rel="noreferrer">See the hackathon post on Facebook</a>
            </div>
          </div>
          <EvidencePhoto file="hackathon.webp" alt="Cortex Hub post announcing Team Go Getters as runners-up, with team and presentation photographs" caption="Cortex Hub announced Team Go Getters as the second-place winners." width={1080} height={1415} />
        </article>

        <article id="mentoring" className="journey-story">
          <div>
            <p className="eyebrow">Cortex Hub · University of Fort Hare</p>
            <h3>Helping students explain how their systems work</h3>
            <p>At Cortex Hub, I mentored students in robotics development and practical AI during the SA Robotics and AI for Good Challenge. My AI Fluency course and Honours studies gave me a foundation for talking about both what AI can do and how to use it responsibly.</p>
            <div className="journey-links">
              <a href="https://www.facebook.com/reel/1420176332494278" target="_blank" rel="noreferrer">Watch the robotics challenge reel on Facebook</a>
              <a href="#credentials">See my AI Fluency certificate</a>
            </div>
          </div>
          <EvidencePhoto file="robotics.webp" alt="Alilitha outside the robotics challenge venue wearing his event lanyard" caption="At the SA Robotics and AI for Good Challenge, where I supported students as a mentor." width={1152} height={1536} />
        </article>

        <article id="academic-mentor" className="journey-story">
          <div>
            <p className="eyebrow">University of Fort Hare · Systems Development</p>
            <h3>Supporting student teams through four sprints</h3>
            <p>I mentored three groups of about seven to eight students each. Across four submissions, I reviewed their documentation and working systems against the module requirements. I checked diagrams, database schemas and how the application used its data, then gave corrections and suggestions the teams could act on before submitting.</p>
            <p>We usually met once or twice a week until the projects were complete. I stayed involved throughout the build, reviewing each stage with the teams and helping them think through what to improve next.</p>
          </div>
          <EvidencePhoto file="academic-mentor.webp" alt="Alilitha and students working together at a computer" caption="Working through a systems development project with students." width={1050} height={1400} />
        </article>

        <article id="it-tutor" className="journey-story">
          <div>
            <p className="eyebrow">2025 · University of Fort Hare</p>
            <h3>Helping first-year students get started in IT</h3>
            <p>I tutored Essentials of IT in the second semester. Many students were new to the subject, so I helped them understand why IT matters in Information Systems and build the basic skills they would use throughout the degree.</p>
            <p>Every Friday, we worked through hands-on exercises and practical assessments. Those sessions gave students a place to ask questions, try things for themselves and connect the concepts to tasks they could do at a computer.</p>
          </div>
        </article>


        <article id="festival" className="journey-story">
          <div>
            <p className="eyebrow">Ubabalo Trading · Richmond, Northern Cape</p>
            <h3>Making room to learn at a film festival</h3>
            <p>I worked with Ubabalo Trading on the Central Karoo Film Festival. I helped plan activities, document the event, analyse attendance and present findings for funder reporting.</p>
            <p>I suggested bringing in industry practitioners so people could learn alongside the screenings. The festival included an acting session led by a professional actress. For me, it was a chance to see how planning and evidence help organisers make better decisions for their audience.</p>
            <div className="journey-links"><a href="https://www.facebook.com/share/p/1eUpFNVvAW/" target="_blank" rel="noreferrer">See the film festival post on Facebook</a></div>
          </div>
          <EvidencePhoto file="festival.webp" alt="Central Karoo Film Festival group gathered outside the theatre in Richmond" caption="The Central Karoo Film Festival group outside the theatre in Richmond." width={1600} height={1200} />
        </article>
      </section>

      <section id="workplace" className="journey-panel journey-split" aria-labelledby="workplace-title">
        <div>
          <h2 id="workplace-title">Learning in the workplace</h2>
          <div className="journey-inset">
            <h3>Development and business analysis</h3>
            <p>I joined a Systems Development Learnership in November 2025 and have completed it. I’m awaiting my certificate.</p>
            <p>From June 2026, I volunteered as a trainee at MyBliss Technologies. I worked on event-booking bug fixes and contributed to ERP ticket-scanning work with TypeScript, React and Next.js.</p>
            <p>In a separate business analyst placement through the learnership, I reviewed digital platforms, clarified feature requirements and explained proposed changes to developers and management.</p>
          </div>
        </div>
        <div>
          <div className="journey-inset">
            <h3>Quality management</h3>
            <p>I’m currently enrolled in a Quality Management Learnership in East London. It is shaping how I approach a solution: understand what the customer needs, check whether the work meets it, and use feedback to improve the process.</p>
          </div>
          <div className="journey-inset">
            <h3>Fintech</h3>
            <p>At the UCT–Cortex Hub Fintech Lab Winter School, I learned about open banking, open finance and digital payments. It gave me another way to think about how everyday financial services affect small businesses.</p>
          </div>
        </div>
      </section>

      <section id="work" className="journey-panel" aria-labelledby="work-title">
        <h2 id="work-title">Selected development projects</h2>
        <div className="project-grid journey-projects">
          {['bizwise-ai', 'drip-alert', 'finspend'].map((slug) => {
            const project = projects.find((entry) => entry.slug === slug);
            return project && <ProjectCard key={project.slug} project={project} showPreview />;
          })}
        </div>
        <div className="journey-links"><Link href="/software">All software projects</Link><Link href="/analytics">Data analysis portfolio</Link></div>
      </section>

      <section id="ingobozi" className="journey-panel journey-split" aria-labelledby="ingobozi-title">
        <div className="journey-brand">
          <Image src={evidence + 'ingobozi-brand.webp'} width={1200} height={800} alt="" />
          <div><p className="eyebrow">Future consulting venture</p><h2 id="ingobozi-title">Ingobozi Digital Consultants</h2></div>
        </div>
        <div>
          <p>I picture Ingobozi as a basket holding people, technology, businesses, processes and policies together. I want to start by speaking to business owners in East London and discovering where small changes might make their work easier. Independent repair workshops are one area I’d like to explore.</p>
          <p>Before growing a consultancy of my own, I want to contribute within an experienced team and learn how experienced consultants gather evidence, explain recommendations and review results. I’d also like to develop responsible AI workshops for schools and share practical digital skills with business owners.</p>
          <div className="journey-links"><Link href="/business">Ingobozi website and business plan</Link></div>
        </div>
      </section>

      <section id="credentials" className="journey-panel" aria-labelledby="credentials-title">
        <h2 id="credentials-title">Credentials and course records</h2>
        <ul className="journey-credentials">
          {credentials.map(([file, title, issuer]) => (
            <li key={file}>
              <a href={evidence + file + '.webp'} target="_blank" rel="noreferrer">
                <span>{title}</span><small>{issuer}</small><strong>View evidence</strong>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="journey-panel journey-contact" aria-labelledby="contact-title">
        <div><h2 id="contact-title">Let’s have a conversation.</h2><p>I’m looking for graduate, junior analyst and consulting opportunities where I can contribute and learn from experienced colleagues.</p></div>
        <div className="actions"><a className="button" href="mailto:alilithamanengela@gmail.com">Email me</a><a className="button secondary" href="https://github.com/alilitha">GitHub</a></div>
      </section>
    </div>
  );
}
