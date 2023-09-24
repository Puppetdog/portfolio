import Card from "./Card";
import styles from "@/app/page.module.scss";

const ExperienceSection = () => {
  const originPath = "public/images/experience";
  const fs = require("fs");
  let files = fs.readdirSync(originPath);
  let experiencePath: string[] = [];
  files.map((skill: string) => {
    return experiencePath.push(
      // eslint-disable-next-line prettier/prettier
      (originPath + "/" + skill).replace("public", "")
    );
  });
  return (
    <section className={styles.experienceCardStack}>
      {experiencePath.map((exp) => (
        <Card
          key={experiencePath.indexOf(exp)}
          ImageSrc={exp}
          Heading={"Slack"}
          Body={"Product Design - 4 Years Experience"}
          Styling={"experienceCard"}
          ImHeight={58}
          ImWidth={58}
        />
      ))}
    </section>
  );
};

export default ExperienceSection;
