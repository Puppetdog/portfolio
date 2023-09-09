"use client";
import Image from "next/image";
const NavBar = () => {
  // const router = useRouter();

  // theming

  return (
    <nav>
      <section>
        <Image width={45} height={45} src={"/images/logo.svg"} alt={"Logo"} />
      </section>
      <section>
        <ul>
          <li>Home</li>
          <li>Case Studies</li>
          <li>Contact</li>
          <li>Resume</li>
          <li>Toggle</li>
        </ul>
      </section>
    </nav>
  );
};

export default NavBar;
