import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

const StickyStyled = styled.div`
  position: absolute;
  width: 100%;
  overflow-x: hidden;
  z-index: 9;
  .sticky {
    background-color: transparent;
    padding: 0px 100px;
    width: 100vw;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const ScrollMagic = ({ height, content }) => (
  <StickyStyled>
    <Controller>
      <Scene duration={height} pin={true} enabled={true} offset={350}>
        <div className="sticky">{content}</div>
      </Scene>
    </Controller>
  </StickyStyled>
);

export default ScrollMagic;
