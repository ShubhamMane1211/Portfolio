import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
export function Projects() {
  return (
    <div className="page">
      <SectionHeading
        eyebrow="PROJECTS"
        title="Work that learns, predicts, and explains."
        copy="Each project represents a complete learning loop—from messy inputs and exploration to a focused result."
      />
      <div className="project-grid all-projects">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
