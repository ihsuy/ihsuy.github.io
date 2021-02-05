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
  if (theme === 'spring')
    return springTheme;
  else if (theme === 'summer')
    return summerTheme;
  else if (theme === 'autumn')
    return autumnTheme;
  else if (theme === 'winter')
    return winterTheme;
  else
    return NaN;
}

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>
          Yushi Qiu
          <a className="link" href="https://github.com/ihsuy">
            <i
              className="fa fa-github"
              aria-hidden="true"
              style={{ marginLeft: "15pt" }}
            ></i>
          </a>
        </h1>
        <p className="affiliation">
          Graduate School of Information Science and Technology, The University
          of Tokyo
        </p>

        <hr style={{ marginTop: "25px", marginBottom: "25px" }} />

        <h2 id="about">About me</h2>
        <p>
          I am a Ph.D. student in Computer Science at the University
          of Tokyo. I am interested in training dynamics and generalization of
          deep neural networks, particularly through statistical analysis and
          visualization. I am fortunate to be advised by{" "}
          <a
            className="link"
            href="https://www.i.u-tokyo.ac.jp/greeting_e.shtml"
          >
            Reiji Suda
          </a>
          .
          <br />
          Aside from my academia life, I am working as an intern (as of Dec.
          2020) at Microsoft CELA, coordinating several philanthropic projects
          with F500 customers focusing on leveraging AI for public health and
          environment reservation.
          <br />
          In my free time, I enjoy reading (especially on Psychology,
          Philosophy, Science/Technology), music (singing/acapella/piano, music composing), workout, and exploring the city by
          foot/bike. I speak English, Japanese, and Mandarin fluently.
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
                  >
                    <strong>NeurIPS 2020 </strong>
                  </a>
                  [
                  <a
                    className="link"
                    href="https://papers.nips.cc/paper/2020/hash/f0682320ccbbb1f1fb1e795de5e5639a-Abstract.html"
                  >
                    Paper
                  </a>
                  ] [
                  <a
                    className="link"
                    href="https://github.com/ihsuy/Train-by-Reconnect/blob/main/NeurIPS%20Poster.pdf"
                  >
                    Poster
                  </a>
                  ] [
                  <a className="link" href="https://arxiv.org/abs/2003.02570">
                    arXiv
                  </a>
                  ] [
                  <a
                    className="link"
                    href="https://github.com/ihsuy/Train-by-Reconnect"
                  >
                    Project Page
                  </a>
                  ][
                  <a
                    className="link"
                    href="https://paperswithcode.com/paper/permute-to-train-a-new-dimension-to-training"
                  >
                    Paper With Code
                  </a>
                  ]
                </Col>
                <Col sm={4}>
                  <a
                    className="link"
                    href="https://paperswithcode.com/paper/permute-to-train-a-new-dimension-to-training"
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
                  <a className="link" href="https://arxiv.org/abs/2003.02570v4">
                    arXiv
                  </a>
                  ][
                  <a className="link" href="https://github.com/ihsuy/SGPerm">
                    Project Page
                  </a>
                  ]
                </Col>
                <Col sm={4}>
                  <a className="link" href="https://arxiv.org/abs/2003.02570v4">
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

        <h2 id="Software">Software</h2>
        <Row>
          <Col sm={8}>
            <h3>
              <a className="link" href="https://github.com/ihsuy/Typon">
                Typon
              </a>
            </h3>
            <p>
              A multi-featured typing practice tool that runs on a terminal
              emulator which can turn any text file into a typing game. Typon
              monitors users' typing performance down to keystroke-level and
              allows users to compete in real-time with their past selves.
            </p>
            <p>
              For more details, please see [
              <a className="link" href="https://github.com/ihsuy/Typon">
                Project Page
              </a>
              ].
            </p>
          </Col>
          <Col sm={4}>
            <a className="link" href="https://github.com/ihsuy/Typon">
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
              Bachelor of Science in Liberal Arts and Sciences, University of
              Illinois at Urbana-Champaign, May 2017
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
              <a className="link" href="https://github.com/ihsuy">
                @ihsuy
              </a>
            </li>
          </ul>
        </div>

        {/* <GitHubCalendar
          username="ihsuy"
          style={{ marginLeft: "40pt" }}
          blockMargin={3}
          theme={generateGithubCalendarTheme(this.props.theme)}
        /> */}

        <p style={{ marginBottom: "30px" }}> </p>
      </React.Fragment>
    );
  }
}

export default About;
