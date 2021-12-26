import React from "react";
import { Typography, Row, Col } from "antd";
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
            UI/UX design, create prototype, web, desktop and mobile app
            development, responsive design.
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
            CSS, Figma, frontend framework like vue and react, various UI
            framework, Git, project management
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
            cultural diversity, challenged to grow product that makes people's
            lives better
          </Text>
        </Col>
      </Row>
      <ReviewContainer></ReviewContainer>
    </>
  );
};

export default ReviewSection;
