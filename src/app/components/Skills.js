import React from "react";
import Image from "next/image";
import { gloock } from "../fonts";
import {
  PageWrapper,
  MainH1Title,
  Container,
  IconsContainer,
} from "@/app/styles/styles.js";
export default function Skills() {
  return (
    <PageWrapper>
      <MainH1Title className={gloock.className}>Skills</MainH1Title>
      <Container>
        <IconsContainer>
          <Image
            src="/assets/icons/ethereum.svg"
            width="36"
            height="36"
            alt="Ethereum"
          />
          <Image
            src="/assets/icons/polygon.svg"
            width="36"
            height="36"
            alt="Polygon"
          />
          <Image
            src="/assets/icons/solidity.svg"
            width="36"
            height="36"
            alt="Solidity"
          />
          <Image
            src="/assets/icons/alchemy.svg"
            width="36"
            height="36"
            alt="Alchemy"
          />
          <Image
            src="/assets/icons/ethersjs.svg"
            width="36"
            height="36"
            alt="Ethersjs"
          />
          <Image
            src="/assets/icons/hardhat.svg"
            width="36"
            height="36"
            alt="Hardhat"
          />
          <Image
            src="/assets/icons/chainlink.svg"
            width="36"
            height="36"
            alt="Chainlink"
          />
          <Image
            src="/assets/icons/openzeppelin.svg"
            width="36"
            height="36"
            alt="Openzeppelin"
          />
          <Image
            src="/assets/icons/wagmi.svg"
            width="36"
            height="36"
            alt="Wagmi"
          />
          <Image
            src="/assets/icons/familykit.svg"
            width="36"
            height="36"
            alt="Familykit"
          />
          <Image
            src="/assets/icons/nextjs.svg"
            width="36"
            height="36"
            alt="NextJS"
          />
          <Image src="/assets/icons/js.svg" width="36" height="36" alt="Js" />
          <Image
            src="/assets/icons/nodejs.svg"
            width="36"
            height="36"
            alt="NodeJS"
          />
          <Image
            src="/assets/icons/reactjs.svg"
            width="36"
            height="36"
            alt="ReactJS"
          />
          <Image
            src="/assets/icons/styledcomponents.svg"
            width="36"
            height="36"
            alt="Styled Components"
          />
          <Image src="/assets/icons/css.svg" width="36" height="36" alt="CSS" />
          <Image
            src="/assets/icons/html.svg"
            width="36"
            height="36"
            alt="html"
          />
        </IconsContainer>
      </Container>
    </PageWrapper>
  );
}
