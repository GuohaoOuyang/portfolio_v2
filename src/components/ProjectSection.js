import React from "react";
import styled from "styled-components";
import bookstore from '../images/bookstore.jpeg';
import mip from '../images/mip.jpeg';
import { Typography, Row, Col } from "antd";

const ProjectSection = () => {
  const ProjectContainer = styled(Row)`
    min-height: 80vh;
    background: white;
    overflow: hidden;
    padding: 10px 0;
  `;
  const LeftSm1 = styled(Col)`
    overflow: hidden;
    height: 250px;
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      background: grey;
      cursor: pointer;
      width: 100%;
      // background: url(${bookstore}) center no-repeat;
      background-size: cover;
      height: 100%;
      transition: all 0.5s ease;
      & > span {
        color: white;
        font-size: 1.2rem;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  `;
  const LeftSm2 = styled(Col)`
  overflow: hidden;
  height: 250px;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    cursor: pointer;
    width: 100%;
    // background: url(${mip}) center no-repeat;
    background-size: cover;
    height: 100%;
    transition: all 0.5s ease;
    & > span {
      color: white;
      font-size: 1.2rem;
    }
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
      & > span {
        color: white;
        font-size: 1.2rem;
      }
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
          <LeftSm1
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
          </LeftSm1>

          <LeftSm2
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
          </LeftSm2>
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
              href="https://www.yasholding.ae/nebras-education-holding/"
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
