import React from "react";
import Image from "next/image";
import { gloock } from "../fonts";
import {
  PageWrapper,
  MainH1Title,
  Container,
  ImageContainer,
  Center,
  ImageStyle,
  Box,
  ChildContainer,
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
          <ChildContainer>
            <Center style={{ width: "40%" }}>
              This is a Front-end I made for Pixel Beanz NFT which is on Polygon
              chain, I used next js, react, styled components and some other
              stuff to make this.
            </Center>
          </ChildContainer>
        </Box>
      </Container>
    </PageWrapper>
  );
}
