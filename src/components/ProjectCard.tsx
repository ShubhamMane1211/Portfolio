import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="project-card"
    >
      <div className={`project-art bg-gradient-to-br ${project.gradient}`}>
        <span>{project.category}</span>
        <div className="grid-orb" />
      </div>
      <div className="project-body">
        <div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <div className="tag-list">
          {project.stack.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="card-actions">
          <Link to={`/projects/${project.slug}`}>
            Case study <ArrowUpRight size={16} />
          </Link>
          <a
            href="https://github.com/ShubhamMane1211"
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
