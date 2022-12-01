import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactSVG } from "react-svg";

const NotFound = () => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        className="cs-07-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +
            "/assets/img/backgrounds/coming-soon-07.jpg"})`
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-07-header space-pt--30 space-pb--30">
          <div className="container">
            <div className="row">
              <div className="col-6">
                {/* logo */}
                <div className="cs-07-logo space-mb--35">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/logo/logo-07.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-07-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 ml-auto mr-auto">
                <h2 className="cs-07-content__title text-center">
                  Nothing Found Here
                </h2>

                <div className="cs-07-subscription-wrapper space-mt--50 text-center">
                  <div className="mc-newsletter-form">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                      Go Back to Homepage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-07-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                {/* copyright */}
                <div className="cs-07-copyright">
                  &copy; {new Date().getFullYear() + " "}
                  <a
                    href="https://hasthemes.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HasThemes
                  </a>
                  , all rights reserved
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* social icons */}
                <ul className="cs-07-social-icons d-flex align-items-center justify-content-center justify-content-md-end">
                  <li>
                    <a
                      href="http://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/facebook-01.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/twitter-01.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/instagram-01.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/linkedin-01.svg"
                        }
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ReactSVG
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/icons/youtube-01.svg"
                        }
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/*====================  End of footer  ====================*/}
      </div>
    </Fragment>
  );
};

export default NotFound;
