import Image from "next/image";
import { getProjects } from "../sanity/sanity-utils";
import styles from "@/app/page.module.scss";

const ProjectFeat = async () => {
  const projects = await getProjects();
  console.log(projects[1].image);
  return (
    <>
      {projects.map((project) => (
        <article key={project._id} className={styles.projectFeatCard}>
          <section>
            <section>
              <h2>
                {project.name} - {project.description}
              </h2>
            </section>
            <section>
              {project.badges.map((badge) => (
                <div key={project.badges.indexOf(badge)}>{badge}</div>
              ))}
            </section>
          </section>
          <section>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={695}
                height={330}
              />
            )}
          </section>
        </article>
      ))}
    </>
  );
};
export default ProjectFeat;
