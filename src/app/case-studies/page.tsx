import { getProjects } from "../../../sanity/sanity-utils";
import styles from "@/app/case-studies/page.module.scss";
export default async function CaseStudies() {
  const projects = await getProjects();
  return (
    <article className={styles.recentCaseStudies}>
      <span>
        <h1>
          Recent{" "}
          <span
            className={styles.underLine}
            style={{ "--height": "1.5rem" } as React.CSSProperties}
          >
            Case Studies
          </span>
        </h1>
      </span>
      <p className={styles.subHeading}>
        Dive into my recent success stories and discover how I've helped clients
        overcome challenges, innovate, and achieve their goals
      </p>
      <div>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
    </article>
  );
}
