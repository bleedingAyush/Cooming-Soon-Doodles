import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector(".header-section");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  // componentDidUpdate() {
  //   const heroSection = document.querySelector(".hero-section");
  //   this.state.scroll > this.state.top
  //     ? (heroSection.style.marginTop = `${this.state.height}px`)
  //     : (heroSection.style.marginTop = 0);
  // }

  componentWillUnmount() {
    this.mount = false;
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href={process.env.PUBLIC_URL + "/assets/css/fontawesome.min.css"}
          />
          <link
            rel="stylesheet"
            href={
              process.env.PUBLIC_URL + "/assets/css/fontawesome-light.min.css"
            }
          />
        </Helmet>
        {/* header */}
        <div className={`header-section section`}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="logo col-md-auto col-12">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/landing/logo.png"
                    }
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/landing/logo-color.png"
                    }
                    alt=""
                    className="sticky"
                  />
                </Link>
              </div>
              <div className="col-md-auto col-12">
                <ul className="header-links">
                  <li>
                    <SmoothLink
                      className="smoth-scroll"
                      to="demos"
                      smooth={true}
                      duration={500}
                    >
                      Demos
                    </SmoothLink>
                  </li>
                  <li>
                    <a href="https://hasthemes.com/contact-us/">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* hero area */}
        <div
          className="hero-section section overlay"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/img/landing/hero-bg.jpg"
            })`
          }}
        >
          <div className="container">
            <div className="hero-content">
              <h2 className="title">
                <span>Bluetoof</span> - React JS Coming Soon Template
              </h2>
              <SmoothLink
                className="btn btn-light smoth-scroll"
                to="demos"
                smooth={true}
                duration={500}
              >
                View Demo
              </SmoothLink>
            </div>
          </div>
        </div>

        {/* demo pages */}
        <div id="demos" className="section section-padding">
          <div className="container">
            <div className="projects row row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-one"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-01.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-one"}>
                      Coming Soon One
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-two"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-02.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-two"}>
                      Coming Soon Two
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-three"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-03.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-three"}>
                      Coming Soon Three
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-four"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-04.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-four"}>
                      Coming Soon Four
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-five"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-05.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-five"}>
                      Coming Soon Five
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-six"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-06.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-six"}>
                      Coming Soon Six
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-seven"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-07.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-seven"}>
                      Coming Soon Seven
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-eight"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-08.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-eight"}>
                      Coming Soon Eight
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-nine"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-09.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-nine"}>
                      Coming Soon Nine
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-ten"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-10.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-ten"}>
                      Coming Soon Ten
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-eleven"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-11.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-eleven"}>
                      Coming Soon Eleven
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-twelve"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-12.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-twelve"}>
                      Coming Soon Twelve
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-thirteen"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-13.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-thirteen"}>
                      Coming Soon Thirteen
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-fourteen"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-14.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-fourteen"}>
                      Coming Soon Fourteen
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-fifteen"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-15.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-fifteen"}>
                      Coming Soon Fifteen
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-sixteen"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-16.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-sixteen"}>
                      Coming Soon Sixteen
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-seventeen"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-17.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link
                      to={process.env.PUBLIC_URL + "/coming-soon-seventeen"}
                    >
                      Coming Soon Seventeen
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-eighteen"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-18.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-eighteen"}>
                      Coming Soon Eighteen
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-nineteen"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-19.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-nineteen"}>
                      Coming Soon Nineteen
                    </Link>
                  </h4>
                </div>
              </div>
              <div className="project col">
                <div className="inner">
                  <Link
                    to={process.env.PUBLIC_URL + "/coming-soon-twenty"}
                    className="image"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/img/landing/bluetoof/coming-soon-20.png"
                      }
                      alt=""
                    />
                    <i className="fal fa-long-arrow-right" />
                  </Link>
                  <h4 className="title">
                    <Link to={process.env.PUBLIC_URL + "/coming-soon-twenty"}>
                      Coming Soon Twenty
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* features */}
        <div className="section section-padding bg-light">
          <div className="container">
            <div className="section-title">
              <h2 className="title">Core Features</h2>
            </div>
            <div className="features row row-cols-lg-3 row-cols-md-2 row-cols-1">
              <div className="feature col">
                <span className="icon">
                  <i className="fal fa-mobile" />
                </span>
                <div className="content">
                  <h4 className="title">Responsive Design</h4>
                  <p>
                    Bluetoof is super responsive &amp; work perfectly in all
                    devices.
                  </p>
                </div>
              </div>
              <div className="feature col">
                <span className="icon">
                  <i className="fal fa-user" />
                </span>
                <div className="content">
                  <h4 className="title">User Friendly</h4>
                  <p>
                    Bluetoof is easy to use for any technical &amp; nontechnical
                    People.
                  </p>
                </div>
              </div>
              <div className="feature col">
                <span className="icon">
                  <i className="fal fa-flask" />
                </span>
                <div className="content">
                  <h4 className="title">Creative Design</h4>
                  <p>It's comes with creative &amp; smart design layout.</p>
                </div>
              </div>
              <div className="feature col">
                <span className="icon">
                  <i className="fal fa-font" />
                </span>
                <div className="content">
                  <h4 className="title">Google Font</h4>
                  <p>
                    600+ Google Fonts. You can change font for all elements
                    easily.
                  </p>
                </div>
              </div>
              <div className="feature col">
                <span className="icon">
                  <i className="fal fa-search" />
                </span>
                <div className="content">
                  <h4 className="title">Clean Markup</h4>
                  <p>We developed it followed by W3C Markup.</p>
                </div>
              </div>
              <div className="feature col">
                <span className="icon">
                  <i className="fal fa-cloud-upload" />
                </span>
                <div className="content">
                  <h4 className="title">Free Updates</h4>
                  <p>Purchase once &amp; get life-time free updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* cta area */}
        <div
          className="cta-section section section-padding overlay"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/img/landing/hero-bg-02.jpg"
            })`
          }}
        >
          <div className="container">
            <div className="cta-content">
              <h2 className="title">Make your website come to life quickly.</h2>
              <a
                className="btn btn-light-outline"
                href="https://hasthemes.com/react-templates/"
              >
                buy Bluetoof
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LandingPage;
