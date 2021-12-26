import React from "react";
import { Row, Col, Button } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { GrBlog } from 'react-icons/gr'

const Footer = () => {
  return (
    <div>
      <Row align="middle" justify="space-between">
        <Col span={8} offset={8} style={{ textAlign: "center" }}>
          © 2022 Aidan Ouyang. All Rights Reserved
        </Col>
        <Col span={6}>
          <Row justify="space-around">
            <Col>
              <Button
                type="text"
                href="https://github.com/GuohaoOuyang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubOutlined />
              </Button>
            </Col>
            <Col>
              <Button
                type="text"
                href="https://www.linkedin.com/in/guohao-aidan-ouyang-13451619a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined />
              </Button>
            </Col>
            <Col>
              <Button type="text" href="mailto:guohao.ouyang@gmail.com">
                <MailOutlined />
              </Button>
            </Col>
            <Col>
              <Button
                type="text"
                href="https://gojsblog.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrBlog />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
