import styles from "@/app/page.module.scss";
import Button from "./Button";
import Image from "next/image";

const Introduction = () => {
  return (
    <article>
      <section className={styles["introduction-body"]}>
        <h3>HI, I AM DE ANDRE</h3>
        <span>
          <h1>
            Professional{" "}
            <span
              className={styles.underLine}
              style={{ "--height": "1.5rem" } as React.CSSProperties}
            >
              Web Developer
            </span>{" "}
            based in Saint Lucia
          </h1>
        </span>
        <p>
          Transforming the Web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          ot excellence
        </p>
      </section>
      <section className={styles["introduction-footer"]}>
        <Button />
        <div className={styles["footer-contact"]}>
          <span>albert.de.andre@gmail.com</span>
          <Image src="/images/frame.svg" alt="frame" height={21} width={21} />
        </div>
      </section>
    </article>
  );
};

export default Introduction;
