"use client";
import Image from "next/image";
import { gloock } from "../fonts";
import {
  Center,
  FooterPara,
  StyledFooter,
  MaxWidth,
  FooterHeading,
} from "@/app/styles/styles.js";

export default function Footer() {
  return (
    <StyledFooter>
      <MaxWidth style={{ margin: "auto" }}>
        <FooterHeading className={gloock.className}>Get in Touch</FooterHeading>
        <Center style={{ gap: "0.6rem", flexDirection: "column" }}>
          <FooterPara>wajidweb3dev@gmail.com</FooterPara>
          <FooterPara>Developed with love by Wajid © 2023</FooterPara>
        </Center>
        <Center style={{ marginTop: "2rem" }}>
          <a href="https://twitter.com/abdulwajidsid" target="_blank">
            <Image
              src="/assets/icons/twitter.svg"
              width="36"
              height="36"
              alt="Twitter"
            />
          </a>
        </Center>
      </MaxWidth>
    </StyledFooter>
  );
}
