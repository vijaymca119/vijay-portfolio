import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../Assets/toolkit.css";
import {
    SiVisualstudiocode,
    SiPostman,
    SiIntellijidea,
    SiDocker,
    SiKubernetes,
    SiJenkins,
    SiAmazonaws,
    SiGit,
    SiJira,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {[
                { icon: <SiIntellijidea />, name: "IntelliJ" },
                { icon: <SiVisualstudiocode />, name: "VS Code" },
                { icon: <SiPostman />, name: "Postman" },
                { icon: <SiDocker />, name: "Docker" },
                { icon: <SiKubernetes />, name: "Kubernetes" },
                { icon: <SiJenkins />, name: "Jenkins" },
                { icon: <SiAmazonaws />, name: "AWS" },
                { icon: <SiGit />, name: "Git" },
                { icon: <SiJira />, name: "Jira" },
            ].map((tool, index) => (
                <Col key={index} xs={4} md={2} className="tech-icons">
                    {tool.icon}
                    <p>{tool.name}</p>
                </Col>
            ))}
        </Row>
    );
}

export default Toolstack;
