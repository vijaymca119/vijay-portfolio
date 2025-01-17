import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate software engineer with over 8+ years of experience in designing, developing, and deploying scalable web and mobile applications. I specialize in building modern, cloud-native solutions that solve complex business problems.
              <br />
              <br />
              I am fluent in technologies like
              <i>
                <b className="purple"> Java (Spring Boot, Hibernate), JavaScript (React.js, Node.js, Angular), and TypeScript. </b>
              </i>
              <br />
              <br />
              My field of interest lies in building &nbsp;
              <i>
                <b className="purple">scable web applications, microservices, and cloud-native solutions</b>, and I am also passionate about{" "}
                <b className="purple">
                  DevOps and CI/CD pipelines.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my expertise in developing robust backend systems with <b className="purple">Spring Boot</b> and
              <i>
                <b className="purple">
                  {" "}
                  modern frontend frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Angular.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vijaykumar" // Update with your GitHub profile
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/vijaykumar" // Update with your Twitter profile
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vijaykumar/" // Update with your LinkedIn profile
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vijaykumar/" // Update with your Instagram profile
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
