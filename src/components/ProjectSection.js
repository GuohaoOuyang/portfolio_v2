import React from "react";
import styled from "styled-components";
import { Typography, Row, Col } from "antd";

const ProjectSection = () => {
  const ProjectContainer = styled(Row)`
    min-height: 80vh;
    background: white;
    overflow: hidden;
    padding: 10px 0;
  `;
  const LeftSm = styled(Col)`
    overflow: hidden;
    height: 250px;
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      background: grey;
      cursor: pointer;
      width: 100%;
      height: 100%;
      transition: all 0.5s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  `;
  const RightLg = styled(Col)`
    height: 510px;
    overflow: hidden !important;
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      background: grey;
      height: 100%;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  `;

  const { Text } = Typography;

  return (
    <ProjectContainer justify="center" align="middle" gutter={[8, 8]}>
      <Col lg={6} xs={16}>
        <Row gutter={[0, 8]}>
          <LeftSm
            span={24}
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-easing="ease"
            data-aos-anchor-placement="top-bottom"
          >
            <a
              href="https://github.com/GuohaoOuyang/ebook-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text>Ebook Store</Text>
            </a>
          </LeftSm>

          <LeftSm
            span={24}
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-delay="150"
            data-aos-easing="ease"
            data-aos-anchor-placement="top-bottom"
          >
            <a
              href="https://mip.staging.fyelabs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text>MIP</Text>
            </a>
          </LeftSm>
        </Row>
      </Col>
      <Col lg={6} xs={16}>
        <Row>
          <RightLg
            span={24}
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-easing="ease"
            data-aos-anchor-placement="top-bottom"
          >
            <a
              href="https://github.com/GuohaoOuyang/ebook-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text>Nebras</Text>
            </a>
          </RightLg>
        </Row>
      </Col>
    </ProjectContainer>
  );
};

export default ProjectSection;
