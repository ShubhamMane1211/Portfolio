import { Download, FileText } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
export function Resume() {
  return (
    <div className="page">
      <SectionHeading
        eyebrow="RÉSUMÉ"
        title="A concise view of my experience."
        copy="Download the résumé for a complete overview of my education, technical skills, and project work."
      />
      <div className="resume-box">
        <FileText size={48} />
        <h2>My résumé</h2>
        <a className="button primary" href="/Shubham_Mane_Resume.pdf" download>
          <Download size={17} /> Download résumé
        </a>
      </div>
    </div>
  );
}
