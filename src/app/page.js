"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gloock } from "./fonts";
import Skills from "./components/Skills";
/* import Footer from "./components/Footer";
import EnlargeImage from "./components/EnlargeImage";
import { TotalSupply } from "./components/getterFuntions";
import Mint from "./components/Mint"; */
import {
  MainH1Title,
  ParaBig,
  StyledButton,
  Container,
  Icon,
  PageWrapper,
} from "@/app/styles/styles.js";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <React.Fragment>
      <PageWrapper>
        <Container>
          <MainH1Title className={gloock.className}>
            Hello There! I'm Wajid, Your Full-Stack Web 3.0 Developer.
          </MainH1Title>
          <ParaBig>
            Welcome to my digital space, where I bring your Web 3.0 dreams to
            life. Explore my portfolio and let's build the future of the web
            together. I create cutting-edge web experiences that stand out in
            the digital landscape.
          </ParaBig>
          <a href="mailto:wajidsiddiqi12@gmail.com" target="_blank">
            <StyledButton>Let's Build Together</StyledButton>
          </a>
          <Icon>
            <Link href="https://github.com/wajidsiddiqi" target="_blank">
              <Image
                src="/assets/icons/github.svg"
                width="36"
                height="36"
                alt="My Github"
              />
            </Link>
            <Link href="https://twitter.com/abdulwajidsid" target="_blank">
              <Image
                src="/assets/icons/twitter.svg"
                width="36"
                height="36"
                alt="My Twitter"
              />
            </Link>
          </Icon>
        </Container>
      </PageWrapper>
      <Skills />
      <Projects />
    </React.Fragment>
  );
}
