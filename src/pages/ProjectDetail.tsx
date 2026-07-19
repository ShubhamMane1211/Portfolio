import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { NotFound } from "./NotFound";
export function ProjectDetail() {
  const project = projects.find((item) => item.slug === useParams().slug);
  if (!project) return <NotFound />;
  return (
    <div className="page project-detail">
      <Link className="back-link" to="/projects">
        <ArrowLeft size={17} /> All projects
      </Link>
      <div className={`detail-hero bg-gradient-to-br ${project.gradient}`}>
        <span>{project.category}</span>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>
      <section className="detail-content">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>From data to a focused outcome.</h2>
          <p className="body-copy">{project.description}</p>
          <div className="detail-actions">
            <a
              className="button primary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={17} /> Source code
            </a>
            <a
              className="button secondary"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} /> Live demo
            </a>
          </div>
        </div>
        <aside>
          <p className="eyebrow">PROJECT HIGHLIGHTS</p>
          {project.metrics.map((metric) => (
            <p key={metric}>
              <CheckCircle2 size={17} /> {metric}
            </p>
          ))}
          <hr />
          <p className="eyebrow">TECH STACK</p>
          <div className="tag-list">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
