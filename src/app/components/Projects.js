import React from "react";
import Image from "next/image";
import Link from "next/link";
import { gloock } from "../fonts";
import {
  PageWrapper,
  MainH1Title,
  Container,
  ImageContainer,
  ImageStyle,
  Box,
  ParaMid,
  Icon,
} from "@/app/styles/styles.js";

export default function Projects() {
  return (
    <PageWrapper>
      <MainH1Title className={gloock.className}>Projects</MainH1Title>
      <Container>
        <Box>
          <ImageContainer>
            <Image
              src="/assets/project_images/project_1.png"
              alt="Project 1"
              width={0}
              height={0}
              layout="responsive"
              style={ImageStyle}
            />
          </ImageContainer>
          <ParaMid>
            I've crafted an exciting website for Beanz Pixel NFTs on the Polygon
            blockchain. By leveraging the power of Next.js, React, Styled
            Components, and some other intriguing technologies, I've brought
            this project to life.
          </ParaMid>
          <Icon>
            <Link href="https://github.com/wajidsiddiqi" target="_blank">
              <Image
                src="/assets/icons/github_v2.svg"
                width="36"
                height="36"
                alt="My Github"
              />
            </Link>
            <Link href="https://twitter.com/abdulwajidsid" target="_blank">
              <Image
                src="/assets/icons/external_link.svg"
                width="36"
                height="36"
                alt="My Twitter"
              />
            </Link>
          </Icon>
        </Box>
      </Container>
    </PageWrapper>
  );
}
