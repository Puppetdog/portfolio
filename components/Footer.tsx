import Image from "next/image";

import styles from "@/app/page.module.scss";

const Footer = () => {
  const imageRootPath = "/images/";
  const imageName = [
    "instagram.svg",
    "twitter.svg",
    "linkedin.svg",
    "github.svg",
  ];
  const imageSource: any[] = [];
  imageName.forEach((item) => {
    imageSource.push(imageRootPath + item);
  });

  return (
    <section className={styles.footer}>
      <span>© 2023 De Andre. All rights reserved.</span>
      <div>
        {imageSource.map((image) => (
          <Image
            key={imageSource.indexOf(image)}
            src={image}
            alt={"social media"}
            width={24}
            height={24}
          />
        ))}
      </div>
    </section>
  );
};

export default Footer;
