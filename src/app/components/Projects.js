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
      <Container style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
            <Link
              href="https://github.com/wajidsiddiqi/project-2"
              target="_blank"
            >
              <Image
                src="/assets/icons/github_v2.svg"
                width="36"
                height="36"
                alt="Project Repo"
              />
            </Link>
            <Link href="https://project-2-nu.vercel.app/" target="_blank">
              <Image
                src="/assets/icons/external_link.svg"
                width="36"
                height="36"
                alt="Live Demo"
              />
            </Link>
          </Icon>
        </Box>
        <Box>
          <ImageContainer>
            <Image
              src="/assets/project_images/project_2.png"
              alt="Project 1"
              width={0}
              height={0}
              layout="responsive"
              style={ImageStyle}
            />
          </ImageContainer>
          <ParaMid>
            I embarked on crafting the King Kat project, utilizing ERC-1155
            tokens and tools like Hardhat, Alchemy and OpenZeppelin. Next.js,
            React, Wagmi, and Styled Components worked their magic, shaping a
            captivating digital realm.
          </ParaMid>
          <Icon>
            <Link
              href="https://github.com/wajidsiddiqi/project-3"
              target="_blank"
            >
              <Image
                src="/assets/icons/github_v2.svg"
                width="36"
                height="36"
                alt="Project Repo"
              />
            </Link>
            <Link
              href="https://650802f6df5e463f629674c5--snazzy-unicorn-46744e.netlify.app/"
              target="_blank"
            >
              <Image
                src="/assets/icons/external_link.svg"
                width="36"
                height="36"
                alt="Live Demo"
              />
            </Link>
          </Icon>
        </Box>
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
            <Link
              href="https://github.com/wajidsiddiqi/project-2"
              target="_blank"
            >
              <Image
                src="/assets/icons/github_v2.svg"
                width="36"
                height="36"
                alt="My Github"
              />
            </Link>
            <Link href="https://project-2-nu.vercel.app/" target="_blank">
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
