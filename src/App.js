import React, { useEffect } from "react";
import "./App.less";
import TimelineSection from "./components/Timeline";
import ReviewSection from "./components/ReviewSection";
import ProjectSection from "./components/ProjectSection";
import { Layout } from "antd";
import AOS from "aos";
import FooterContent from "./components/Footer";
import { CgFileDocument } from "react-icons/cg";
import "antd/dist/antd.css";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { Footer, Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <Content>
          <a
            type="text"
            href="https://drive.google.com/file/d/1_JMEwDQHas7S8yROVxxTiWm8eycQpIIi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume"
          >
            <CgFileDocument size={36} />
          </a>
          <TimelineSection />
          <ReviewSection />
          <ProjectSection />
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
