import React, { useEffect, useState } from "react";
import { Timeline, Spin, Typography } from "antd";
import { BsDiamondFill } from "react-icons/bs";
import ScrollMagic from "./ScrollMagic";
import styled from "styled-components";

const TimelineSection = () => {
  const StyleTimeline = styled(Timeline)`
    background: linear-gradient(to bottom, #c2e59c, #64b3f4);
    position: relative;
    // padding-bottom: 1000px;
    li {
      padding-top: 50px;
      padding-bottom: 100px;
      &:nth-last-child(2) {
        .ant-timeline-item-tail {
          border-left: 6px dotted white;
        }
      }
    }
    .ant-timeline-item-tail {
      border-left: 6px solid white;
      top: 0px;
      height: 100%;
      @media (max-width: 900px) {
        position: absolute;
        left: 15px !important;
      }
    }
    .ant-timeline-item-last {
      .ant-timeline-item-content {
        background: transparent;
        box-shadow: none;
      }
      //   .ant-timeline-item-tail {
      //       display: flex;
      //   }
    }
    .ant-timeline-item-head {
      background-color: transparent;
    }
    .ant-timeline-item-head-custom {
      padding: 0;
      margin-left: 3px !important;
      top: 12px;
      @media (max-width: 900px) {
        position: absolute;
        left: 15px !important;
      }
    }
    .ant-timeline-item-content {
      position: relative;
      bottom: 0;
      width: 400px !important;
      padding: 20px;
      background: #fff;
      box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
      border-radius: 5px;
      time {
        position: absolute;
        background: #F4A564;
        width: 80px;
        height: 30px;
        top: -15px;
        font-family: 'Roboto', sans-serif;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
      }
    }

    .ant-timeline-item-left .ant-timeline-item-content {
      @media (max-width: 900px) {
        left: 10% !important;
        margin: 0;
      }
    }

    .ant-timeline-item-right .ant-timeline-item-content {
      left: calc(50% - 400px - 23px);
      text-align: left !important;
      @media (max-width: 900px) {
        left: 10% !important;
      }
    }

    // ANIMATION
    li {
      .ant-timeline-item-content {
        visibility: hidden;
        opacity: 0;
        transition: all 0.5s ease-in-out;
      }

      &:nth-of-type(odd) {
        .ant-timeline-item-content {
          transform: translate3d(100px, -10px, 0) rotate(10deg);
        }
      }
      &:nth-of-type(even) {
        .ant-timeline-item-content {
          transform: translate3d(-100px, -10px, 0) rotate(10deg);
        }
      }
      &.in-view {
        .ant-timeline-item-content {
          transform: none;
          visibility: visible;
          opacity: 1;
        }
      }
    }
  `;

  const { Title, Text } = Typography;

  useEffect(() => {
    var items = document.querySelectorAll(".ant-timeline li");
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
          }
        } else if (items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  // eslint-disable-next-line
  const [height, setHeight] = useState(1650);
  // const ref = useRef();

  // useEffect(() => {
  //   setHeight(ref.current.clientHeight)
  // },[setHeight])

  return (
    <>
      <ScrollMagic
        height={height}
        content={<Title level={2}>My Journey</Title>}
      />
      <StyleTimeline mode="alternate" id="time-line">
        <Timeline.Item dot={<BsDiamondFill style={{ fontSize: "24px" }} />}>
          <time>2015</time>
          <div className="right">
            <Title level={4}>Study</Title>
            <Text>St Clair College, Diploma of Fashion Design</Text>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<BsDiamondFill style={{ fontSize: "24px" }} />}>
          <time>2016</time>
          <div className="left">
            <Title level={4}>Graduated</Title>
            <Text>Niagara College, Diploma of Automotive Technician</Text>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<BsDiamondFill style={{ fontSize: "24px" }} />}>
          <time>2016</time>
          <div className="right">
            <Title level={4}>Work</Title>
            <Text>Technician, Nissan Waterloo</Text>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<BsDiamondFill style={{ fontSize: "24px" }} />}>
          <time>2020</time>
          <div className="left">
            <Title level={4}>Graduated</Title>
            <Text>York University, Bachelor's degree of Computer Science</Text>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<BsDiamondFill style={{ fontSize: "24px" }} />}>
          <time>2021</time>
          <div className="right">
            <Title level={4}>Work</Title>
            <Text>Front end developer, Fyelabs Hamilton</Text>
          </div>
        </Timeline.Item>
        <Timeline.Item dot={<BsDiamondFill style={{ fontSize: "24px" }} />}>
          <Title level={4}>What's next?</Title>
        </Timeline.Item>
        <Timeline.Item dot={<Spin />}></Timeline.Item>
      </StyleTimeline>
    </>
  );
};

export default TimelineSection;
