import { useEffect, useState } from 'react'
import './App.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  { icon: '⚛', title: 'React', text: 'Component-based UI' },
  { icon: '◈', title: 'JavaScript', text: 'Interactive experiences' },
  { icon: '⌁', title: 'HTML & CSS', text: 'Structure and styling' },
  { icon: '✳', title: 'Tailwind CSS', text: 'Responsive design' },
  { icon: '✳', title: 'Bootstrap', text: 'Responsive design' },
  { icon: '▲', title: 'Vite', text: 'Frontend tooling' },
  { icon: '⬡', title: 'Node.js & Express', text: 'Backend fundamentals' },
  { icon: '◉', title: 'MongoDB', text: 'Database integration' },
  { icon: '⌘', title: 'Git & GitHub', text: 'Version control' },
]

const projects = [
  {
    title: 'Sokoto Suya',
    type: 'Collaborative Project',
    description:
      'A classroom group project developed in 2023 that allows users to order suya online. Built with a focus on fundamental layout structures.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://adekeyeadeniyi.github.io/Sokoto_suya/',
  },
  {
    title: 'E-Commerce Storefront',
    type: 'Personal Project',
    description:
      'An online store interface demonstrating fundamental frontend styling, DOM manipulation, and responsive web design skills.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://enesgid.github.io/e-commerce-site/index.html',
  },
  {
    title: 'P3 Hub Landing Page',
    type: 'Personal Project',
    description:
      'A modern landing page for a tech startup, showcasing their services and values with a focus on user experience and conversion optimization. Built to showcase experience on HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://enesgid.github.io/landing-page-for-P3-hub/',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="topbar">
        <nav className="wrap" aria-label="Main navigation">
          <a className="brand" href="#home">
            <img src="/profile.png" alt="profile photo" />
            <span>Enesgid</span>
          </a>

          <div className={`navlinks ${menuOpen ? 'open' : ''}`} id="navlinks">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={link.href === '#home' ? 'active' : ''}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="/Enesgid-CV.pdf" download="Enesgid-CV.pdf">
            Download CV ↧
          </a>

          <button
            type="button"
            className="menu-btn"
            id="menuBtn"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </nav>
      </header>

      <main>
        <div className="wrap hero" id="home">
          <div>
            <div className="eyebrow">Available for opportunities</div>
            <h1>
              Hello, I'm
              <br />
              <span>Enesgid</span>
            </h1>
            <h2>Frontend Developer</h2>
            <p className="intro">
              I build clean, responsive and user-friendly web experiences. I enjoy
              turning ideas into practical interfaces, paying attention to detail,
              and continuously improving my craft.
            </p>

            <div className="actions">
              <a className="btn btn-primary" href="#projects">
                Explore My Work <span>↘</span>
              </a>
              <a className="btn btn-secondary" href="mailto:agenyigi@gmail.com">
                Get In Touch <span>↗</span>
              </a>
              <a className="btn btn-primary" href="/Enesgid-CV.pdf" download="Enesgid-CV.pdf">
                Download CV <span>↧</span>
              </a>
            </div>

            <div className="socials">
              <a href="https://github.com/Enesgid" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/agenyi-gideon-63587734a/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                LinkedIn ↗
              </a>
              <a href="mailto:agenyigi@gmail.com" aria-label="Email">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-art" aria-label="Interactive portfolio preview">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <a className="hero-core-link" href="#projects" aria-label="View my projects">
              <div className="hero-core">
                <div className="core-ring" />
                <img src="/profile.png" alt="Profile image" />
                <span className="core-badge">UI</span>
              </div>
            </a>

            <a className="floating-panel panel-top" href="#about" aria-label="Read more about me">
              <span className="panel-dot" />
              <strong>Frontend engineering</strong>
              <small>Responsive • accessible • polished</small>
            </a>

            <a className="floating-panel panel-bottom" href="#contact" aria-label="Contact me">
              <strong>Open to opportunities</strong>
              <small>React • JavaScript • UI systems</small>
            </a>

            <a className="tech-pill pill-left" href="#skills" aria-label="View my skills">
              React
            </a>
            <a className="tech-pill pill-right" href="#projects" aria-label="Jump to projects">
              UX
            </a>
          </div>
        </div>

        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">My toolkit</div>
                <h2>Technologies I Work With</h2>
              </div>
              <p>Tools I use to build and improve modern web applications.</p>
            </div>

            <div className="skills">
              {skills.map(({ icon, title, text }) => (
                <div className="skill" key={title}>
                  <div className="skill-icon">{icon}</div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Featured work</div>
                <h2>Projects &amp; Collaborations</h2>
              </div>
              <p>A selection of my recent frontend applications and collaborative coursework.</p>
            </div>

            <div className="project-grid">
              {projects.map(({ title, type, description, tags, link }) => (
                <article className="project-card" key={title}>
                  <div className="eyebrow">{type}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="tags">
                    {tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="actions" style={{ marginTop: 'auto' }}>
                    <a className="btn btn-secondary" href={link} target="_blank" rel="noreferrer noopener">
                      Live Site ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">A little About me</div>
                <h2>How I approach my work</h2>
              </div>
            </div>

            <div className="about-grid">
              <div>
                <p>
                  I’m a frontend developer focused on building interfaces that are both clean
                  and useful. I enjoy understanding the problem behind a workflow, simplifying it,
                  and turning it into a product people can actually use without friction.
                </p>
                <p>
                  One of the most meaningful projects I built was an Assignment of Responsibility
                  (AOR) Management System for lecturers at FUT Minna. It was a private internal
                  platform designed to streamline academic responsibility tracking and approvals.
                  I worked on the frontend experience for the system, handling multi-step forms,
                  data-heavy screens, and the overall user flow so lecturers could complete tasks
                  more efficiently and confidently.
                </p>

                <div className="about-highlight">
                  <div className="about-highlight-header">
                    <span className="mini-badge">Project spotlight</span>
                    <strong>AOR Management System</strong>
                  </div>
                  <ul className="achievement-list">
                    <li>Designed and built frontend screens for academic responsibility workflows.</li>
                    <li>Connected forms and dashboards to APIs for real data handling and updates.</li>
                    <li>Improved usability across approval flows, task tracking, and form progression.</li>
                    <li>Worked with a practical, user-first mindset to reduce friction in everyday tasks.</li>
                  </ul>
                </div>
              </div>

              <div className="values">
                <div className="value">
                  <div className="value-icon">⌘</div>
                  <div>
                    <strong>Problem-first thinking</strong>
                    <span>I focus on user flow, clarity, and practical impact before design polish.</span>
                  </div>
                </div>
                <div className="value">
                  <div className="value-icon">▣</div>
                  <div>
                    <strong>Responsive by default</strong>
                    <span>Interfaces that work cleanly across device sizes and real-world usage.</span>
                  </div>
                </div>
                <div className="value">
                  <div className="value-icon">↗</div>
                  <div>
                    <strong>Workflow-driven builds</strong>
                    <span>Strong attention to multi-step forms, transitions, and data-heavy screens.</span>
                  </div>
                </div>
                <div className="value">
                  <div className="value-icon">✦</div>
                  <div>
                    <strong>Always improving</strong>
                    <span>Open to feedback, collaboration, and learning more ways to build better products.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="contact-box">
              <div>
                <div className="eyebrow">Have an opportunity?</div>
                <h2>Let’s build something useful.</h2>
                <p>
                  I’m interested in frontend development opportunities and collaborations. Reach out and let’s talk about how I can contribute.
                </p>
                <div className="contact-links">
                  <a className="btn btn-primary" href="mailto:agenyigi@gmail.com">
                    Email Me ↗
                  </a>
                  <a className="btn btn-secondary" href="https://github.com/Enesgid" target="_blank" rel="noreferrer noopener">
                    GitHub ↗
                  </a>
                  <a className="btn btn-secondary" href="https://www.linkedin.com/in/agenyi-gideon-63587734a/" target="_blank" rel="noreferrer noopener">
                    LinkedIn ↗
                  </a>
                  <a className="btn btn-secondary" href="/Enesgid-CV.pdf" download="Enesgid-CV.pdf">
                    Download CV ↧
                  </a>
                </div>
              </div>

              <div style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
                Based in Nigeria
                <br />
                <span style={{ color: '#a99fff' }}>Open to suitable opportunities</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>
            © <span>{year}</span> Enesgid. Built with care.
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
