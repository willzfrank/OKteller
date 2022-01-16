import React, { useState } from "react";
import styled from "styled-components";
import ServicesData from "../data/services";
import Menu from "../components/Menu";

import Layout from "../components/Layout";

const allButtons = [
  "All",
  ...new Set(ServicesData.map((item) => item.category)),
];

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

export default function Services() {
  const [menuItem, setMenuItems] = useState(ServicesData);
  const [button] = useState(allButtons);
  const filter = (button) => {
    if (button === "All") {
      setMenuItems(ServicesData);
      return;
    }

    const filteredData = ServicesData.filter(
      (item) => item.category === button
    );
    setMenuItems(filteredData);
  };
  return (
    <>
      <Section id="services">
        <div className="title">
          <h2>Services</h2>
        </div>
        <div className="packages">
          <Button filter={filter} button={button} />
        </div>
        <div className="destinations">
          {<Menu menuItem={menuItem} className="menuItem" />}
        </div>
      </Section>
    </>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.4rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;
  &:active,
  &:focus {
    background-color: var(--first__color);
    border-radius: 8px;
  }
  &:hover {
    border-top: 1px solid var(--first__color);
    border-radius: 8px;
    transition: 1s;
  }
  &:not(:last-child) {
    margin-right: 0.6rem;
    transition: 1s;
  }
`;
const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
    color:  #949c8c;
    font-family: "Montserrat", sans-serif;
    h2{
      font-size: 2.5rem ;
    }
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    button {
      width: max-content;
      padding: 1rem 2rem;
      border-bottom: 0.1rem solid #4c8a19;
      &:hover {
        transition:2s
        border-bottom: 2px solid #4c8a19;
        transform: translateY(-.5rem);
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 20rem;
    margin-bottom:10rem;

    @media screen and (min-width: 280px)and (max-width:319px){
      margin-left:3rem;
    }

    @media screen and (min-width: 320px)and (max-width:375px){
      margin-left:5rem;
    }

    @media screen and (min-width: 375px)and (max-width:414px){
      margin-left:3rem;
    } 
    

    @media screen and (min-width: 928px)and (max-width:1024px){
      margin-left:0rem;
      padding:0 0 0 160px;
    }

    @media screen and (min-width: 414px)and (max-width:768px){
      margin-left:100px;
    }
    
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
