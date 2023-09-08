import "./Navs.css";
import React, { useState } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import menubar from "../../images/menubar.png";
import { Link } from "react-scroll";

const Navs = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <Container>
      <Row>
        <Navbar>
          <Col>
            <span className="stroke-text">Elijah.dev</span>
          </Col>
          <Col>
            <div className="header" id="home">
              <img src="" alt="" /> {/*image for logo*/}
              {menuOpened === false && mobile === true ? (
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "0.5rem",
                    borderRadius: "10px",
                    opacity: "50%",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={menubar}
                    alt=""
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    onClick={() => setMenuOpened(true)}
                  />
                </div>
              ) : (
                <ul className="header-menu">
                  <li onClick={() => setMenuOpened(false)}>
                    <Link
                      onClick={() => setMenuOpened(false)}
                      to="home"
                      span={true}
                      smooth={true}
                    >
                      Home
                    </Link>
                  </li>
                  <li onClick={() => setMenuOpened(false)}>
                    <Link
                      onClick={() => setMenuOpened(false)}
                      to="about"
                      span={true}
                      smooth={true}
                    >
                      About
                    </Link>
                  </li>
                  <li onClick={() => setMenuOpened(false)}>
                    <Link
                      onClick={() => setMenuOpened(false)}
                      to="projects"
                      span={true}
                      smooth={true}
                    >
                      Projects
                    </Link>
                  </li>
                  <li onClick={() => setMenuOpened(false)}>
                    <Link
                      onClick={() => setMenuOpened(false)}
                      to="contact"
                      span={true}
                      smooth={true}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </Col>
        </Navbar>
      </Row>
    </Container>
  );
};

export default Navs;
