import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Database,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-copy"
        >
          <p className="eyebrow">
            <Sparkles size={15} /> Available for opportunities
          </p>
          <h1>
            Shubham Mane<span>.</span>
          </h1>
          <p className="hero-role">
            Data Scientist <i>|</i> Machine Learning Engineer <i>|</i> AI
            Enthusiast
          </p>
          <p className="lede">
            Information Technology graduate passionate about turning complex
            data into useful, production-ready applications.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/resume.pdf" download>
              Download résumé <ArrowDown size={17} />
            </a>
            <Link className="button secondary" to="/projects">
              View projects <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="social-row">
            <a href="https://github.com/ShubhamMane1211" target="_blank" rel="noreferrer">
              <FaGithub size={19} /> GitHub
            </a>
            <a href="https://linkedin.com/in/shubhammane1211/" target="_blank" rel="noreferrer">
              <FaLinkedin size={19} /> LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hero-visual"
        >
          <div className="data-card">
            <div className="card-top">
              <span>MODEL_STATUS</span>
              <b>LIVE</b>
            </div>
            <div className="metric">
              <strong>94.8%</strong>
              <span>Validation accuracy</span>
            </div>
            <div className="chart">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="card-bottom">
              <span>Last run: now</span>
              <span>v2.4.0</span>
            </div>
          </div>
          <div className="floating-chip chip-left">
            <Database size={19} /> Data → insight
          </div>
          <div className="floating-chip chip-right">
            <BrainCircuit size={19} /> ML systems
          </div>
        </motion.div>
      </section>
      <section className="trust">
        <span>FOCUS AREAS</span>
        <p>
          Machine Learning <b>•</b> Data Analytics <b>•</b> Applied AI <b>•</b>{" "}
          Product Thinking
        </p>
      </section>
      <section className="section">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Projects built around real questions."
          copy="A collection of data projects—from exploratory analysis to deployable machine-learning interfaces."
        />
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>
        <Link className="text-link" to="/projects">
          Explore every project <ArrowUpRight size={17} />
        </Link>
      </section>
      <section className="section split-section">
        <div>
          <SectionHeading eyebrow="APPROACH" title="Clarity at every step." />
          <p className="body-copy">
            I enjoy the full lifecycle: framing an ambiguous problem, making
            data trustworthy, selecting the right method, and communicating
            outcomes with precision.
          </p>
          <Link className="button secondary" to="/about">
            More about me <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="principles">
          <article>
            <b>01</b>
            <h3>Question first</h3>
            <p>Start with the decision that data needs to support.</p>
          </article>
          <article>
            <b>02</b>
            <h3>Build deliberately</h3>
            <p>
              Prefer useful, measurable models over complexity for its own sake.
            </p>
          </article>
          <article>
            <b>03</b>
            <h3>Share clearly</h3>
            <p>
              Make outputs understandable for both technical and business
              audiences.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
