import { getProjects } from "../../../sanity/sanity-utils";
import styles from "@/app/page.module.scss";
export default async function CaseStudies() {
  const projects = await getProjects();
  return (
    <article>
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
      <div>
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
    </article>
  );
}
