import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import github from "../img/social/github.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-secondary has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="gicma.dev"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-secondary has-text-white-ter">
          <div className="container has-background-secondary has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Accueil
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/a-propos">
                        À propos
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="mailto:contact@gicma.dev"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  href="https://facebook.com/gicma.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="twitter"
                  href="https://twitter.com/gicmadev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="instagram"
                  href="https://instagram.com/gicma.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="github"
                  href="https://github.com/gicmadev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
