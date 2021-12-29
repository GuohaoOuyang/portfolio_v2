import React from "react";
import { Typography, Row, Col, Button } from "antd";
import styled from "styled-components";
import bg from "../images/mockup.png";

const ReviewSection = () => {
  const ReviewContainer = styled.div`
    position: relative;
    z-index: 0;
    min-height: 100vh;
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      min-height: 100vh;
      background: url(${bg}) center no-repeat;
      background-size: cover;
      -webkit-mask-image: linear-gradient(
        to bottom,
        transparent 10%,
        black 75%
      );
      mask-image: linear-gradient(to bottom, transparent 10%, black 75%);
    }
  `;
  const { Title, Text } = Typography;
  const TitleOverlay = styled(Title)`
    padding: 10px 0;
    text-align: center;
    margin-bottom: 0 !important;
    font-weight: 600;
  `;

  const Intro = styled(Text)`
    text-align: center;
  `;

  const Heading = styled(Col)`
    margin: 50px 100px;
  `;

  const Footer = styled(Col)`
    margin: 50px 0px;
    display: flex;
    justify-content: center;
  `;

  const CVButton = styled(Button)`
    position: relative;
    transition: color 0.5s ease;
    border: 2px solid rgba(79, 79, 79, 0.7);
    background: transparent;
    height: 50px;
    padding: 0;
    display: flex;
    line-height: auto !important;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    align-items: center;
    : hover {
      background: transparent;
      color: #64B3F4;
      border-color: #64B3F4;
    }
    span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }
    span: after {
      content: "\\20D7";
      position: absolute;
      opacity: 0;
      font-size: 2em;
      top: 0.6rem;
      right: -0.4em;
      transition: 0.5s;
    }
    :hover span {
      transform: translate3d(-0.5em, 0, 0);
      color: #64B3F4;
    }
    :hover span: after {
      opacity: 1;
      right: -0.8em;
      color: #64B3F4;
    }
  `;

  return (
    <>
      <Row justify="center">
        <Heading
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-easing="ease"
          xs={15}
        >
          <TitleOverlay>About Me</TitleOverlay>
          <Intro>
            Software engineer based in Toronto, I love to bring beatutiful
            design to life - design that can make people's lives better. Talk to
            me in English or Mandarin!
          </Intro>
        </Heading>
      </Row>
      <Row justify="center" align="top" gutter={16}>
        <Col
          lg={5}
          xs={16}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease"
          data-aos-anchor-placement="top-bottom"
        >
          <Title level={5} style={{ textAlign: "center" }}>
            I do
          </Title>
          <Text style={{ textAlign: "center" }}>
            Designed and prototyped web-based, desktop, and mobile applications, implemented solutions using modern architectures
          </Text>
        </Col>
        <Col
          lg={5}
          xs={16}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="450"
          data-aos-easing="ease"
          data-aos-anchor-placement="top-bottom"
        >
          <Title level={5} style={{ textAlign: "center" }}>
            I sepcialize
          </Title>
          <Text style={{ textAlign: "center" }}>
            Problem solving and analytical thinking. Tools including Git, Docker, modern frontend frameworks and css framekworks
          </Text>
        </Col>
        <Col
          lg={5}
          xs={16}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease"
          data-aos-anchor-placement="top-bottom"
        >
          <Title level={5} style={{ textAlign: "center" }}>
            I appreciate
          </Title>
          <Text style={{ textAlign: "center" }}>
            Positive workplace culture, enough challenges and opportunities for growth and good coding standards and practices
          </Text>
        </Col>
      </Row>
      <Row>
        <Footer
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-delay="500"
          data-aos-easing="ease"
          xs={24}
        >
          <CVButton
            href="https://drive.google.com/file/d/1_JMEwDQHas7S8yROVxxTiWm8eycQpIIi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Resume</span>
          </CVButton>
        </Footer>
      </Row>
      <ReviewContainer></ReviewContainer>
    </>
  );
};

export default ReviewSection;
