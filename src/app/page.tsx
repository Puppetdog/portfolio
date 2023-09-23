import Image from "next/image";
import styles from "./page.module.scss";
import Introduction from "../../components/Introduction";
import Card from "../../components/Card";
import Skillset from "../../components/Skillset";

export default function Home() {
  return (
    <main>
      <section className={styles.introduction}>
        <Introduction />
        <Image
          src="/images/illustration.svg"
          alt="Illustration"
          width={798}
          height={532}
          priority
        />
      </section>
      <section className={styles.mySkillsSection}>
        <div
          className={styles.titleBlock}
          style={
            {
              "--bottom": 0,
              "--right": 0,
            } as React.CSSProperties
          }
        >
          <span>
            <h2>My skills</h2>
          </span>
          <div
            className={styles.orangeBox}
            style={
              {
                "--height": "0.5rem",
                "--width": "100%",
              } as React.CSSProperties
            }
          ></div>
        </div>

        <Skillset />
      </section>
      <section className={styles.serviceSection}>
        <div
          className={styles.titleBlock}
          style={
            {
              "--bottom": "37%",
              "--right": "48%",
            } as React.CSSProperties
          }
        >
          <span>
            <h2>What service do I provide</h2>
          </span>
          <div
            className={styles.orangeBox}
            style={
              {
                "--height": "0.5rem",
                "--width": "23%",
              } as React.CSSProperties
            }
          ></div>
        </div>
        <div>
          <Card
            ImageSrc="/images/frame.svg"
            Heading="Analytics & SEO"
            Body="Implement tracking & analytics tools to monitor website performance & improve SEO."
            Styling={"serviceCard"}
            ImHeight={24}
            ImWidth={24}
          />
          <Card
            ImageSrc="/images/frame.svg"
            Heading="Analytics & SEO"
            Body="Implement tracking & analytics tools to monitor website performance & improve SEO."
            Styling={"serviceCard"}
            ImHeight={24}
            ImWidth={24}
          />
          <Card
            ImageSrc="/images/frame.svg"
            Heading="Analytics & SEO"
            Body="Implement tracking & analytics tools to monitor website performance & improve SEO."
            Styling={"serviceCard"}
            ImHeight={24}
            ImWidth={24}
          />
          <Card
            ImageSrc="/images/frame.svg"
            Heading="Analytics & SEO"
            Body="Implement tracking & analytics tools to monitor website performance & improve SEO."
            Styling={"serviceCard"}
            ImHeight={24}
            ImWidth={24}
          />
        </div>
      </section>
      <section className={styles.experienceSection}>
        <div className={styles.workExperience}>
          <div
            className={styles.titleBlock}
            style={
              {
                "--bottom": "5%",
                "--right": "48%",
              } as React.CSSProperties
            }
          >
            <span>
              <h2>Work Experience</h2>
            </span>
            <div
              className={styles.orangeBox}
              style={
                {
                  "--height": "0.5rem",
                  "--width": "52%",
                } as React.CSSProperties
              }
            ></div>
          </div>
          <p>
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
        </div>
        <div className={styles.experienceCardStack}>
          <Card
            ImageSrc={"/images/frame.svg"}
            Heading={"Slack"}
            Body={"Product Design - 4 Years Experience"}
            Styling={"experienceCard"}
            ImHeight={58}
            ImWidth={58}
          />
          <Card
            ImageSrc={"/images/frame.svg"}
            Heading={"Slack"}
            Body={"Product Design - 4 Years Experience"}
            Styling={"experienceCard"}
            ImHeight={58}
            ImWidth={58}
          />
          <Card
            ImageSrc={"/images/frame.svg"}
            Heading={"Slack"}
            Body={"Product Design - 4 Years Experience"}
            Styling={"experienceCard"}
            ImHeight={58}
            ImWidth={58}
          />
          <Card
            ImageSrc={"/images/frame.svg"}
            Heading={"Slack"}
            Body={"Product Design - 4 Years Experience"}
            Styling={"experienceCard"}
            ImHeight={58}
            ImWidth={58}
          />
        </div>
      </section>
      <section className={styles.featuredProjectsSection}>
        <div
          className={styles.titleBlock}
          style={
            {
              "--bottom": "20%",
              "--right": 0,
            } as React.CSSProperties
          }
        >
          <span>
            <h2>Featured Projects</h2>
          </span>
          <div
            className={styles.orangeBox}
            style={
              {
                "--height": "0.5rem",
                "--width": "45%",
              } as React.CSSProperties
            }
          ></div>
        </div>
      </section>
      {/* What they say about me component */}
      {/* Get in touch with me component */}
    </main>
  );
}
