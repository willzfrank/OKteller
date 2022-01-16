import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
function ScrollToTop() {
  const [scrollState, setScrollState] = useState(false);

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });
  return (
    <ToTop scrollState={scrollState} onClick={toTop}>
      <img src={logo} alt="To-Top" />
    </ToTop>
  );
}

export default ScrollToTop;

const ToTop = styled.div`
  display: {(({scrollState})};
  position:fixed;
  bottom:1rem;
  right:2rem;
  z-index:10;
  cursor:pointer;
  img{
    height:1.5rem;
  }
  border-radius:2rem;
   background-color: #949c8c;
   padding:1rem;
`;
