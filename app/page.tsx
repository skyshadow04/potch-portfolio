import ProjectGallery, { type ProjectScreenshot } from "./project-gallery";
import ThemeToggle from "./theme-toggle";

const inventoryScreenshots: ProjectScreenshot[] = [
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-13-33-brave-browser.png",
    alt: "Inventory system sign-in screen",
    caption: "Sign in to access the inventory and supplier management dashboard.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-16-23-brave-browser.png",
    alt: "Inventory system login page",
    caption: "A clean login page for secure access to the inventory system.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-17-37-brave-browser.png",
    alt: "Inventory dashboard with asset, supplier, and expense summaries",
    caption: "The dashboard summarizes asset counts, suppliers, and expenses.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-18-12-brave-browser.png",
    alt: "Assets dashboard with filters and equipment cards",
    caption: "Browse and filter tracked equipment, owners, and asset status.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-18-38-brave-browser.png",
    alt: "User administration dashboard",
    caption: "Manage user accounts, roles, and access status.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-18-59-brave-browser.png",
    alt: "Printer inventory with toner and drum stock",
    caption: "Track printer supplies, including toner and drum stock levels.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-19-15-brave-browser.png",
    alt: "Supplier dashboard with supplier contact and order details",
    caption: "Review registered suppliers, contact details, and order totals.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-19-31-brave-browser.png",
    alt: "Items dashboard with search, filters, and item cards",
    caption: "Search and filter inventory items by date, supplier, or item details.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-19-45-brave-browser.png",
    alt: "Light mode appearance settings",
    caption: "Choose an organization-wide accent color in the light interface.",
  },
  {
    src: "/InventoryScreenshots/screenshot-2026-11-09_09-20-00-brave-browser.png",
    alt: "Dark mode appearance settings",
    caption: "The appearance settings are also available in dark mode.",
  },
];

const nvrScreenshots: ProjectScreenshot[] = [
  {
    src: "/LocalNVRScreenshots/screenshot-2026-11-09_09-27-41-brave-browser.png",
    alt: "Local NVR viewer with a grid of connected security cameras",
    caption: "Arrange multiple connected camera feeds in a live monitoring grid.",
  },
  {
    src: "/LocalNVRScreenshots/screenshot-2026-11-09_09-25-46-brave-browser.png",
    alt: "Local NVR viewer waiting for a camera stream",
    caption: "Connect to a local NVR and choose a camera to load its stream.",
  },
];

const projects = [
  {
    number: "01",
    name: "Inventory System",
    type: "Inventory management · Dashboard",
    description:
      "A centralized inventory dashboard for managing assets, suppliers, items, and expense summaries across an organization.",
    tags: ["Inventory", "Asset tracking", "Dashboard"],
    screenshots: inventoryScreenshots,
  },
  {
    number: "02",
    name: "Local NVR Viewer",
    type: "Video surveillance · Local viewer",
    description:
      "A local network video recorder viewer for connecting Hikvision cameras and arranging live feeds in flexible multi-camera layouts.",
    tags: ["Local NVR", "Multi-camera", "Live viewer"],
    screenshots: nvrScreenshots,
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "CSS",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Potchollo Cabos, home">
          <span className="wordmark-mark">PM</span>
          <span>Potchollo Cabos</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-cta" href="mailto:cpotchollo@gmail.com">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            Available for select projects
          </div>
          <p className="eyebrow">Independent software developer</p>
          <h1>
            I make the web{" "}
            <br />
            work <span className="accent-word">better.</span>
          </h1>
          <p className="hero-intro">
            I&apos;m Potchollo — a developer partnering with good people to build
            useful, thoughtful digital products from first sketch to final
            deploy.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="mailto:cpotchollo@gmail.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>Based in Abu Dhabi, UAE</span>
            <span className="meta-divider" />
            <span>Working worldwide</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className="art-sun" />
          <div className="art-code">
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="code-line code-line-long" />
            <span className="code-line" />
            <span className="code-line code-line-short" />
            <span className="code-line code-line-long" />
          </div>
          <span className="art-caption">Thoughtful by design.</span>
          <span className="art-coordinate">40°42&apos;46.1&quot;N</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Creative development</span>
          <span className="ticker-star" aria-hidden="true">✳</span>
          <span>Product engineering</span>
          <span className="ticker-star" aria-hidden="true">✳</span>
          <span>Thoughtful details</span>
          <span className="ticker-star" aria-hidden="true">✳</span>
          <span>Creative development</span>
          <span className="ticker-star" aria-hidden="true">✳</span>
          <span>Product engineering</span>
          <span className="ticker-star" aria-hidden="true">✳</span>
          <span>Thoughtful details</span>
          <span className="ticker-star" aria-hidden="true">✳</span>
        </div>
      </div>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few things I&apos;ve made</p>
            <h2>Selected work<span className="accent-word">.</span></h2>
          </div>
          <p className="section-aside">
            Good work starts with a good question.
            <br />
            Here are a few of my answers.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-visual">
                <ProjectGallery
                  projectName={project.name}
                  screenshots={project.screenshots}
                />
              </div>
              <div className="project-info">
                <div className="project-title-line">
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label="Project highlights">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <a className="all-work-link" href="mailto:cpotchollo@gmail.com?subject=More%20work">
          Want to see more? Just ask <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="about-section" id="about">
        <div className="about-inner section-wrap">
          <div className="about-heading">
            <p className="eyebrow">A little about me</p>
            <h2>Curious by nature.{" "}<br /><span className="accent-word">Developer</span> by choice.</h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m an independent developer who cares about the details —
              the tiny interactions, the fast load, the feeling that everything
              just makes sense.
            </p>
            <p>
              I work across the stack, bring a collaborative mindset to every
              project, and believe the best technology is the kind that quietly
              makes life easier.
            </p>
            <a className="text-link about-link" href="mailto:cpotchollo@gmail.com">
              A bit more about me <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="skills-block">
            <p className="eyebrow">My toolkit</p>
            <ul className="skills-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <div className="about-note">
            <span className="note-spark" aria-hidden="true">✳</span>
            <span>Good things happen<br />when we build together.</span>
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <p className="eyebrow">Have something in mind?</p>
        <h2>Let&apos;s make it{" "}<br /><span className="accent-word">matter.</span></h2>
        <p className="contact-copy">
          Have a project, a question, or just want to say hello? My inbox is
          always open.
        </p>
        <a className="button button-dark contact-button" href="mailto:cpotchollo@gmail.com">
          cpotchollo@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-decoration" aria-hidden="true">✳</div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">PM</span>
          <span>Potchollo Cabos</span>
        </a>
        <p>Designed &amp; built with care. © 2025</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </main>
  );
}
