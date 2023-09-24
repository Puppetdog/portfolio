import Image from "next/image";
import { CardProps } from "../../types/component";
import styles from "@/app/page.module.scss";

const Card = ({
  ImageSrc,
  Heading,
  Body,
  ImWidth,
  ImHeight,
  Styling,
}: CardProps) => {
  return (
    <article className={styles[`${Styling}`]}>
      <div>
        <Image
          alt="Service Card"
          src={ImageSrc}
          width={ImWidth}
          height={ImHeight}
        />
      </div>
      <section>
        <h3>{Heading}</h3>
        <p>{Body}</p>
      </section>
    </article>
  );
};

export default Card;
