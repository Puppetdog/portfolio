import Image from "next/image";
import styles from "./page.module.scss";
import Introduction from "../../components/Introduction";
import Card from "../../components/Card";
import Skillset from "../../components/Skillset";
import ExperienceSection from "../../components/ExperienceCards";

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
        <span
          className={styles.underLine}
          style={{ "--height": "0.5rem" } as React.CSSProperties}
        >
          <h2>My skills</h2>
        </span>

        <Skillset />
      </section>
      <section className={styles.serviceSection}>
        <span>
          <h2>
            What{" "}
            <span
              className={styles.underLine}
              style={{ "--height": "0.5rem" } as React.CSSProperties}
            >
              service
            </span>{" "}
            do I provide
          </h2>
        </span>
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
          <h2>
            Work{" "}
            <span>
              <span
                className={styles.underLine}
                style={{ "--height": "0.5rem" } as React.CSSProperties}
              >
                {" "}
                Experi
              </span>
              ence
            </span>
          </h2>
          <p>
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
        </div>
        <ExperienceSection />
      </section>
      <section className={styles.featuredProjectsSection}>
        <span>
          <h2>
            Featured{" "}
            <span
              className={styles.underLine}
              style={{ "--height": "0.5rem" } as React.CSSProperties}
            >
              Projects
            </span>
          </h2>
        </span>
      </section>
      <section className={styles.reviewsSection}>
        <span>
          <h2>
            What{" "}
            <span
              className={styles.underLine}
              style={{ "--height": "0.5rem" } as React.CSSProperties}
            >
              they say
            </span>{" "}
            about me
          </h2>
        </span>
      </section>
    </main>
  );
}
