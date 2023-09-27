"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { Link as ScrollLink } from "react-scroll";

import {
  CenterSpaceBetween,
  CenterSpaceAround,
  MaxWidth,
  StyledNav,
  StyledButton,
  PageWrapper,
  HeaderBtn,
  NavBarContainer,
  ChildContainer,
  NavLinkText,
  ParaSm,
} from "@/app/styles/styles.js";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 675);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <StyledNav>
      <MaxWidth style={{ margin: "auto" }}>
        <CenterSpaceBetween>
          <NextLink href="/" style={{ textDecoration: "none" }}>
            <NavBarContainer>
              <div>
                <Image
                  src="/wajid.png"
                  width="50"
                  height="50"
                  alt="Profile Photo"
                  style={{
                    borderRadius: "5rem",
                    border: "#465d00 5px solid",
                  }}
                />
              </div>
              <ChildContainer style={{ alignItems: "flex-start" }}>
                <ParaSm style={{ color: "#465d00" }}>Wajid Siddiqi</ParaSm>
                <ParaSm style={{ opacity: 0.5, color: "#465d00" }}>
                  Web 3.0 Developer
                </ParaSm>
              </ChildContainer>
            </NavBarContainer>
          </NextLink>
          <NavBarContainer>
            {/* Hamburger Menu */}
            {isMobile && isOpen && (
              <PageWrapper
                style={{
                  position: "fixed",
                  top: "0",
                  right: isOpen ? "0" : "300px",
                  height: "100vh",
                  width: "300px",
                  zIndex: "998",
                  transition: "right 0.3s ease-in-out",
                  padding: "0",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#465d00",
                }}
              >
                <CenterSpaceAround style={{ flexDirection: "column" }}>
                  <NextLink
                    href="/"
                    style={{ textDecoration: "none" }}
                    onClick={handleMenuClose}
                  >
                    <NavLinkText style={{ color: "#f5ffd7" }}>Home</NavLinkText>
                  </NextLink>

                  <ScrollLink
                    to="skills"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuClose}
                  >
                    <NavLinkText style={{ color: "#f5ffd7" }}>
                      Skills
                    </NavLinkText>
                  </ScrollLink>

                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuClose}
                  >
                    <NavLinkText style={{ color: "#f5ffd7" }}>
                      Projects
                    </NavLinkText>
                  </ScrollLink>
                </CenterSpaceAround>
              </PageWrapper>
            )}

            {/* Menue */}
            {!isMobile && (
              <React.Fragment>
                <NextLink href="/" style={{ textDecoration: "none" }}>
                  <NavLinkText>Home</NavLinkText>
                </NextLink>

                <ScrollLink to="skills" smooth={true} duration={500}>
                  <NavLinkText>Skills</NavLinkText>
                </ScrollLink>

                <ScrollLink to="projects" smooth={true} duration={500}>
                  <NavLinkText>Projects</NavLinkText>
                </ScrollLink>
              </React.Fragment>
            )}

            {/* Hamburger Button - Fixed position */}
            {isMobile && (
              <HeaderBtn>
                <StyledButton
                  style={{ zIndex: "999", margin: "0", padding: "0" }}
                >
                  <Hamburger
                    toggled={isOpen}
                    toggle={handleMenuToggle}
                    size={19.2}
                  />
                </StyledButton>
              </HeaderBtn>
            )}
          </NavBarContainer>
        </CenterSpaceBetween>
      </MaxWidth>
    </StyledNav>
  );
}
