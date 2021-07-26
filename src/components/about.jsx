import React, { Component } from "react";
import { Image, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function generateGithubCalendarTheme(theme) {
  const springTheme = {
    background: "transparent",
    text: "#000",
    grade4: "#fe6b6b",
    grade3: "#fe9292",
    grade2: "#ffb9b9",
    grade1: "#ffcdcd",
    grade0: "#eee",
  };
  const summerTheme = {
    background: "transparent",
    text: "#000",
    grade4: "#00643d",
    grade3: "#008c55",
    grade2: "#00b36d",
    grade1: "#00c679",
    grade0: "#eee",
  };
  const autumnTheme = {
    background: "transparent",
    text: "#000",
    grade4: "#aa530e",
    grade3: "#df8931",
    grade2: "#f4b95a",
    grade1: "#f9d8a3",
    grade0: "#eee",
  };
  const winterTheme = {
    background: "transparent",
    text: "#000",
    grade4: "hsl(183.7, 36%, 41%)",
    grade3: "hsl(183.7, 37%, 53%)",
    grade2: "hsl(183.7, 37%, 66%)",
    grade1: "hsl(183.7, 36%, 80%)",
    grade0: "#eee",
  };
  if (theme === "spring") return springTheme;
  else if (theme === "summer") return summerTheme;
  else if (theme === "autumn") return autumnTheme;
  else if (theme === "winter") return winterTheme;
  else return NaN;
}

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>
          Yushi Qiu
          <a className="link" href="https://github.com/ihsuy" target="_blank" rel="noopener noreferrer">
            <i
              className="fa fa-github"
              aria-hidden="true"
              style={{ marginLeft: "15pt" }}
            ></i>
          </a>
          <a className="link" href="https://www.linkedin.com/in/yushi-q-a4b431204" target="_blank" rel="noopener noreferrer">
            <i
              className="fa fa-linkedin"
              aria-hidden="true"
              style={{ marginLeft: "15pt" }}
            ></i>
          </a>
        </h1>
        <p className="affiliation">
            Engineering @🔮 in 🗼</p>

        <hr style={{ marginTop: "25px", marginBottom: "25px" }} />

        <h2 id="about">About me</h2>
        <p>
          I am a member of <a className="link" href="https://www.palantir.com" target="_blank" rel="noopener noreferrer">
            🔮
          </a>
          's engineering team in Tokyo. Prior to my current position, I was a
          Ph.D. student in Computer Science at the University of Tokyo with a
          concentration on training dynamics and generalization of deep neural
          networks.
          <br />
          In my free time, I enjoy reading (especially about Psychology/Philosophy/Science), listening to audiobooks, playing music (singing/piano/composing), and taking long walks.
          <br />I speak English, Japanese, and Mandarin fluently.
        </p>

        <hr style={{ marginTop: "25px", marginBottom: "25px" }} />

        <h2 id="publications">Publications</h2>
        <div>
          <ul>
            <li>
              <Row>
                <Col sm={8}>
                  <strong>Yushi Qiu</strong>, Reiji Suda:
                  <br />
                  <strong>
                    Train-by-Reconnect: Decoupling Locations of Weights from
                    their Values.
                  </strong>
                  <br />
                  In Proceedings of{" "}
                  <a
                    className="link"
                    href="https://proceedings.neurips.cc/paper/2020"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <strong>NeurIPS 2020 </strong>
                  </a>
                  [
                  <a
                    className="link"
                    href="https://papers.nips.cc/paper/2020/hash/f0682320ccbbb1f1fb1e795de5e5639a-Abstract.html"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Paper
                  </a>
                  ] [
                  <a
                    className="link"
                    href="https://github.com/ihsuy/Train-by-Reconnect/blob/main/NeurIPS%20Poster.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Poster
                  </a>
                  ] [
                  <a className="link" href="https://arxiv.org/abs/2003.02570" target="_blank" rel="noopener noreferrer">
                    arXiv
                  </a>
                  ] [
                  <a
                    className="link"
                    href="https://github.com/ihsuy/Train-by-Reconnect"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Project Page
                  </a>
                  ][
                  <a
                    className="link"
                    href="https://paperswithcode.com/paper/permute-to-train-a-new-dimension-to-training"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Paper With Code
                  </a>
                  ]
                </Col>
                <Col sm={4}>
                  <a
                    className="link"
                    href="https://paperswithcode.com/paper/permute-to-train-a-new-dimension-to-training"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://github.com/ihsuy/Train-by-Reconnect/blob/main/Images/connect.png?raw=true"
                      style={{ height: "12vh" }}
                      fluid
                    />
                  </a>
                </Col>
              </Row>
            </li>

            <li style={{ marginTop: "25px" }}>
              <Row>
                <Col sm={8}>
                  <strong>Yushi Qiu</strong>, Reiji Suda:
                  <br />
                  <strong>
                    Permute to Train: A New Dimension to Training Deep Neural
                    Networks.
                  </strong>
                  <br />
                  PrePrint [
                  <a className="link" href="https://arxiv.org/abs/2003.02570v4" target="_blank" rel="noopener noreferrer"> 
                    arXiv
                  </a>
                  ][
                  <a className="link" href="https://github.com/ihsuy/SGPerm" target="_blank" rel="noopener noreferrer">
                    Project Page
                  </a>
                  ]
                </Col>
                <Col sm={4}>
                  <a className="link" href="https://arxiv.org/abs/2003.02570v4" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="https://github.com/ihsuy/SGPerm/blob/main/img/puzzle.png?raw=true"
                      style={{ height: "9vh" }}
                      fluid
                    />
                  </a>
                </Col>
              </Row>
            </li>
            <li style={{ marginTop: "25px" }}>
              <Row>
                <Col sm={8}>
                  Kentaro Yamamoto, <strong>Yushi Qiu</strong>, Masaharu
                  Matsumoto, Reiji Suda:
                  <br />
                  <strong>Online Autotuning of Parameters of GA-BiCG.</strong>
                  <br />
                  Oral Presentation at{" "}
                  <a
                    className="link"
                    href="https://sites.google.com/site/atathpsc/07-previous-conf/2018"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    ATAT in HPSC (2018)
                  </a>
                </Col>
                <Col sm={4}>
                  <Image
                    src="https://i.ibb.co/2swFQHQ/bicg.png"
                    style={{ height: "11vh" }}
                    fluid
                  />
                </Col>
              </Row>
            </li>
          </ul>
        </div>

        <hr style={{ marginTop: "25px", marginBottom: "25px" }} />

        <h2 id="software">Software</h2>
        <Row>
          <Col sm={8}>
            <h3>
              <a className="link" href="https://github.com/ihsuy/Typon" target="_blank" rel="noopener noreferrer">
                Typon
              </a>
            </h3>
            <p>
              A multi-featured typing practice tool that runs on a terminal
              emulator which can turn any text file into a typing game 🎮. Typon
              monitors users' typing performance down to keystroke-level and
              allows users to compete in real-time with their past selves.
            </p>
            <p>
              For more details, please see [
              <a className="link" href="https://github.com/ihsuy/Typon" target="_blank" rel="noopener noreferrer">
                Project Page
              </a>
              ].
            </p>
          </Col>
          <Col sm={4}>
            <a className="link" href="https://github.com/ihsuy/Typon" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://github.com/ihsuy/Typon/raw/master/demo_gif/logo2.png"
                style={{ width: "14vh", marginTop: "0pt" }}
                fluid
              />
            </a>
          </Col>
        </Row>

        <hr style={{ marginTop: "25px", marginBottom: "25px" }} />

        <h2 id="education">Education</h2>
        <div>
          <ul>
            <li>
              Master of Information Science and Technology, The University of
              Tokyo, March 2020
            </li>
            <li>
              Bachelor of Science, University of Illinois at Urbana-Champaign,
              May 2017
            </li>
          </ul>
        </div>

        <hr style={{ marginTop: "25px", marginBottom: "25px" }} />

        <h2 id="contact">Contact</h2>
        <div>
          <ul>
            <li>E-mail: yushi621 [at] is.s.u-tokyo.ac.jp</li>
            <li>
              GitHub:{" "}
              <a className="link" href="https://github.com/ihsuy" target="_blank" rel="noopener noreferrer">
                @ihsuy
              </a>
            </li>
          </ul>
        </div>

        <GitHubCalendar
          username="ihsuy"
          style={{ marginLeft: "40pt" }}
          blockMargin={3}
          theme={generateGithubCalendarTheme(this.props.theme)}
        />

        <p style={{ marginBottom: "30px" }}> </p>
      </React.Fragment>
    );
  }
}

export default About;
