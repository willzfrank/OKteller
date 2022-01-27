import React, { useState } from "react";
import logo from "../assets/hero.jpg";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav className="shadow">
        <div className="brand">
          <Link to="/" className="container">
            <img src={logo} alt="OKteller" className="logo" />
            OKteller Nigeria
          </Link>

          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/okexchange">OkExchange</Link>
          </li>
          <li>
            <Link to="/policy">Policy</Link>
          </li>
          <li>
            <a
              href="http://sms.okteller.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SMS
            </a>
          </li>
          <li>
            <a
              href="https://vtu.okteller.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <Link
              to="/"
              className="sidebar__link"
              onClick={() => setNavbarState(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="sidebar__link"
              onClick={() => setNavbarState(false)}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/okexchange"
              className="sidebar__link"
              onClick={() => setNavbarState(false)}
            >
              OkExchange
            </Link>
          </li>
          <li>
            <Link
              to="/policy"
              className="sidebar__link"
              onClick={() => setNavbarState(false)}
            >
              Policy
            </Link>
          </li>
          <li>
            <a
              href="http://sms.okteller.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__link"
              onClick={() => setNavbarState(false)}
            >
              SMS
            </a>
          </li>
          <li>
            <a
              href="https://vtu.okteller.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar__link"
              onClick={() => setNavbarState(false)}
            >
              Login
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

export default Navbar;

const Nav = styled.nav`
  padding: 5px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  position: sticky;
  top: 0;
  background: linear-gradient(to right, white, var(--second__color));
  @media screen and (min-width: 540px) and (max-width: 1080px) {
    padding: 5px 0px;
  }
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.1rem;
      font-weight: 900px;
      text-transform: uppercase;
      color: var(--fourth__color);
      font-family: "Montserrat", sans-serif;

      .logo {
        width: 10%;
        @media screen and (min-width: 540px) and (max-width: 1080px) {
          width: 5%;
        }
      }
    }

    .toggle {
      display: none;
    }
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    padding-top: 1rem;

    li {
      font-family: "Montserrat", sans-serif;
      a {
        text-decoration: none;
        /* color: #949c8c; */
        color: black;
        font-size: 1.2rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          color: #4c8a19;
        }
      }
    }
  }

  /* button {
    background-color: none;
    cursor: pointer;
    /* border: 0; 
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px var(--fourth__color);
    color: var(--fourth__color);
    position: relative;
    vertical-align: middle;
    padding: 0.5rem 1.5rem;
    border-radius: 8px;
    border: 2px solid blue;
    &::before {
      box-sizing: inherit;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform: center;
      border-top: 2px solid var(--second__color);
      border-bottom: 2px solid var(--second__color);
      transform: scale3d(0, 1, 1) !important;
    }
    &::after {
      box-sizing: inherit;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform: center;
      border-left: 2px solid var(--second__color);
      border-right: 2px solid var(--second__color);
      transform: scale3d(1, 0, 1);
    }
    &:hover {
      color: var(--fourth__color);
    }
    &:hover::before {
      transform: scale3d(1, 1, 1) !important;
      transition: transform 0.5s !important;
      border-radius: 8px;
    }
    &:hover::after {
      transform: scale3d(1, 1, 1) !important;
      transition: transform 0.5s !important;
      border-radius: 8px;
    }
  } */

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .toggle {
        display: block;
      }
    }

    ul,
    button {
      display: none;
    }
  } ;
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  background-color: white;
  border-radius: 8px;
  padding-bottom: 15px;
  width: 100%;
  height: 50vh;
  align-items: center;
  transition: 0.3s ease-in-out;
  top: ${({ state }) => (state ? "50px" : "-400px")};

  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 0.8rem 0;
      margin-left: 2rem;

      &:first-child {
        margin-top: 40px;
      }
      a {
        /* border: 2px solid red;
        text-decoration: none;
        
        font-size: 1.2rem;
        transition: 0.1s ease-in-out; */

        &:hover {
          color: #4c8a19;
        }
      }
    }
    li {
      .sidebar__login {
        color: #949c8c;
        text-decoration: none;
        border-radius: 1rem;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.1rem;
        transition: ease-in-out 0.3s;

        &:hover {
          border-bottom: 2px solid #4c8a19;
          color: white;
          padding: 0.5rem 1rem;
          transition: ease-in-out 1s;
        }
      }
    }
  }
`;
