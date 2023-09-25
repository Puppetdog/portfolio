import { getProject } from "../../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { project: string };
};
export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <article>
      <p>Web Dev Project</p>
      <h1>
        {project.name} - {project.description}
      </h1>
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
      <section>
        <div>
          <p>My Role</p>
          <p></p>
        </div>
        <div>
          <p>Start Date</p>
          <p></p>
        </div>
        <div>
          <p>End Date</p>
          <p></p>
        </div>
      </section>
      <section>
        <div>
          <p>Technologies used</p>
          <h3>Tech Stack</h3>
        </div>
      </section>
      <section>
        <PortableText value={project.content} />
      </section>
      <section>
        <div>
          <p>Problem</p>
          <h3>Problem Statement</h3>
        </div>
      </section>
      <section>
        <div>
          <p>Problem</p>
          <h3>Challenges & Learnings</h3>
        </div>
        <section>
          <p>Challenges</p>{" "}
          <div>
            {project.challenges.map((challenge) => (
              <div key={project.challenges.indexOf(challenge)}>
                <Image
                  src={"/images/target.svg"}
                  alt={"target"}
                  width={20}
                  height={20}
                />
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p>Learnings</p>{" "}
          <div>
            {project.learnings.map((learning) => (
              <div key={project.learnings.indexOf(learning)}>
                <Image
                  src={"/images/tick.svg"}
                  alt={"target"}
                  width={20}
                  height={20}
                />
                <p>{learning}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </article>
  );
}
