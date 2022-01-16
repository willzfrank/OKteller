import React from "react";

import {
  // BsLinkedin,
  // BsFacebook,
  BsWhatsapp,
  // BsTwitter,
  // BsArrowRightShort,
} from "react-icons/bs";
// import { AiFillInstagram, AiOutlineRight } from "react-icons/ai";
import Logo from "../assets/transparent-logo.png";
// import * as ReactBootstrap from "react-bootstrap";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src={Logo} alt="OKteller" className="mb-3 footer__logo" />
            <p className="font-italic text-muted">
              Making payments easier than ever without stress for your everyday
              amenities.
            </p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item">
                <a href="#" target="_blank" title="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Services</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-muted">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-muted">
                  Our Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/policy" className="text-muted">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Pages</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Login
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Register
                </a>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-muted">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-4">Never Miss an Update.</p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  className="form-control border-0 shadow-0"
                />
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link"
                  >
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -- Copyrights -- */}
      <div className="bg-light py-4">
        <div className="container text-center">
          <p className="text-muted mb-0 py-2">
            © 2021 OKteller All rights reserved.
          </p>
        </div>
      </div>
      <BsWhatsapp className="whatsapp_float" />
    </footer>
  );
}

export default Footer;
