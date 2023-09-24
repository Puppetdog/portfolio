"use client";
import Image from "next/image";
import Link from "next/link";
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
          {" "}
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/case-studies"}>Case Studies</Link>
          </li>
          <li>Contact</li>
          <li>Resume</li>
          <li>
            <Image
              width={20}
              height={20}
              src={"/images/union.svg"}
              alt={"theme"}
            />{" "}
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default NavBar;
