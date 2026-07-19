import { Code2, GraduationCap, Wrench } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import profileImage from "../assets/profile.png";
const skillGroups = [
  { title: "Programming", skills: ["Python", "SQL"] },
  {
    title: "Data & libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Flask",
      "Streamlit",
    ],
  },
  {
    title: "Machine learning",
    skills: [
      "Regression",
      "Classification",
      "Clustering",
      "EDA",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Power BI"],
  },
];
export function About() {
  return (
    <div className="page">
      <SectionHeading
        eyebrow="ABOUT ME"
        title="Curious by nature. Practical by design."
        copy="I’m an Information Technology graduate focused on the craft of making data useful."
      />
      <section className="about-intro">
        <div className="portrait">
          <img src={profileImage} alt="Shubham Mane" />
          <div />
        </div>
        <div>
          <p className="body-copy large">
            Hey There! Shubham Mane this side, a data science and machine
            learning enthusiast who enjoys finding the meaningful signal in
            complex information. My work combines analytical discipline with a
            product mindset—because a model matters most when it helps someone
            make a better decision.
          </p>
          <p className="body-copy">
            I work across data exploration, feature engineering, supervised and
            unsupervised learning, and lightweight application development.
          </p>
        </div>
      </section>
      <section className="timeline">
        <SectionHeading eyebrow="EDUCATION" title="Foundation" />
        <article>
          <GraduationCap />
          <div>
            <span>Academic background</span>
            <h3>B.E. in Information Technology</h3>
            <p>
              Developed a strong foundation in programming, databases, software
              engineering, and data-driven problem solving.
            </p>
          </div>
        </article>
      </section>
      <section className="skills-section">
        <SectionHeading
          eyebrow="TOOLKIT"
          title="Skills I bring to the table."
        />
        <div className="skill-grid">
          {skillGroups.map((group, i) => (
            <article key={group.title}>
              <div className="skill-icon">{i < 2 ? <Code2 /> : <Wrench />}</div>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
