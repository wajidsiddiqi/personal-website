import styled from "styled-components";

//!Colors
const DarkLime = "#465d00";
const LightLime = "#f5ffd7";

const MaxWidth = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: auto;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${DarkLime};
`;

//!Wrappers Styles
const PageWrapper = styled(MaxWidth)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  padding-bottom: 0;

  @media (max-width: 530px) {
    padding: 5rem 2rem;
    padding-bottom: 0;
  }
`;

//!Heading Styles
const MainH1Title = styled.h1`
  color: ${DarkLime};
  font-size: 6rem;
  /* text-transform: uppercase; */
  font-weight: 600;
  line-height: 1;

  @media (max-width: 653px) {
    font-size: 4rem;
  }

  @media (max-width: 530px) {
    font-size: 3rem;
  }
`;

const H1Title = styled.h1`
  color: ${DarkLime};
  font-size: 6rem;
  font-weight: 600;
  padding: 5rem;

  @media (max-width: 653px) {
    font-size: 4rem;
  }

  @media (max-width: 530px) {
    font-size: 3rem;
  }
`;

//!Paragraph & Text Styles
const ParaBig = styled.p`
  color: ${DarkLime};
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 500;

  @media (max-width: 653px) {
    font-size: 1.3rem;
  }

  @media (max-width: 530px) {
    font-size: 1.1rem;
  }
`;

const ParaMid = styled(ParaBig)`
  font-size: 1.2rem;
  color: ${LightLime};
  font-weight: 500;
  line-height: 1.15;

  @media (max-width: 530px) {
    font-size: 1rem;
  }
`;

const ParaSm = styled(ParaMid)`
  font-size: 1rem;
  font-weight: 600;
`;

//!Containers & Boxes
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterSpaceAround = styled(Center)`
  justify-content: space-around;
`;

const CenterSpaceBetween = styled(Center)`
  justify-content: space-between;
`;

const Container = styled(Center)`
  flex-direction: column;
  gap: 2rem;
`;

const MainContainer = styled(Container)`
  margin-top: 140px;

  @media (max-width: 653px) {
    margin-top: 80px;
  }
`;

const ChildContainer = styled(Center)`
  flex-direction: column;
  gap: 0.1rem;
`;

const Box = styled(Center)`
  background-color: ${DarkLime};
  padding: 1.5rem;
  border-radius: 2rem;
  gap: 1rem;
  flex-direction: column;
  transition: all 0.38s ease;
  width: min-content;

  &:hover {
    transform: translateY(-10px);
  }
`;

//!Buttons Styles
const StyledConnectButton = styled.button`
  padding: 0.8rem 1.8rem;
  color: ${LightLime};
  cursor: pointer;
  border-radius: 4rem;
  font-family: inherit;
  border: none;
  background-color: ${DarkLime};
  font-size: 1.5rem;
  font-weight: 500;
`;

const StyledButton = styled(StyledConnectButton)`
  @media (max-width: 592px) {
    font-size: 1rem;
  }
`;

const HeaderBtn = styled(Center)`
  gap: 2rem;

  @media (max-width: 360px) {
    gap: 1rem;
  }
`;

const ScrollToTopButtonWrapper = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${DarkLime};
  border: none;
  border-radius: 5rem;
  width: 50px;
  height: 50px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 95;

  ${({ isVisible }) => isVisible && "display: flex;"}
`;

//!NavBar Styles
const StyledNav = styled.nav`
  width: 100%;
  padding: 1rem;
  z-index: 98;
  position: fixed;
  background-color: ${LightLime};
`;

const NavBarContainer = styled(Center)`
  gap: 1rem;
`;

const NavLinkForIcon = styled.div`
  padding: 0.7rem 0rem;
`;

const NavLinkText = styled.div`
  color: ${DarkLime};
  font-weight: 600;
  cursor: pointer;
`;

//!Image Styles & Containers
const ImageContainer = styled(Center)`
  position: relative;
  width: 500px;
  height: auto;

  @media (max-width: 900px) {
    width: 400px;
    height: auto;
  }

  @media (max-width: 530px) {
    width: 300px;
  }

  @media (max-width: 375px) {
    width: 250px;
  }
`;

const ImageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "1rem",
};

//!Icons Styles
const Icon = styled(Center)`
  gap: 2rem;
`;

const IconsContainer = styled(Center)`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  gap: 5rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

//!Footer Styles
const StyledFooter = styled(StyledNav)`
  position: absolute;
  z-index: 0;
  margin-top: 5rem;
`;

const FooterPara = styled.p`
  color: ${DarkLime};
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
  text-align: center;
`;

const FooterHeading = styled(FooterPara)`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export {
  MaxWidth,
  MainH1Title,
  ParaBig,
  ParaMid,
  StyledButton,
  Center,
  CenterSpaceAround,
  CenterSpaceBetween,
  StyledConnectButton,
  StyledNav,
  ImageContainer,
  Container,
  ParaSm,
  Icon,
  ImageStyle,
  Box,
  FooterPara,
  StyledFooter,
  HeaderBtn,
  NavBarContainer,
  LogoText,
  NavLinkForIcon,
  ChildContainer,
  NavLinkText,
  H1Title,
  PageWrapper,
  IconsContainer,
  ScrollToTopButtonWrapper,
  MainContainer,
  FooterHeading,
};
