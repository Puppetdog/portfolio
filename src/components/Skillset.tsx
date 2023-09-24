import Image from "next/image";

import styles from "@/app/page.module.scss";

const Skillset = () => {
  const originPath = "public/images/skills";
  const fs = require("fs");
  let files = fs.readdirSync(originPath);
  let skillsPath: string[] = [];
  files.map((skill: string) =>
    skillsPath.push((originPath + "/" + skill).replace("public", ""))
  );
  return (
    <section>
      {skillsPath.map((skill) => (
        <div className={styles.skillBubble} key={skillsPath.indexOf(skill)}>
          <Image src={skill} height={50} width={50} alt={"skill"} />
        </div>
      ))}
    </section>
  );
};

export default Skillset;
