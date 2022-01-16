import React from "react";
import styled from "styled-components";
// import {
//   BsFillCreditCardFill,
//   FaShippingFast,
//   GiMoneyStack,
//   MdProductionQuantityLimits,
// } from "react-icons/fa";

function AboutUs() {
  const data = [
    {
      // icon: { GiMoneyStack },
      title: "Flexible Payment",
      subTitle:
        "Enjoy the flexible payment through our application and get your product delivered. ",
    },

    {
      // icon: { FaShippingFast },
      title: "Get Fast Delivery",
      subTitle: "Pay through our application and get fast delivery ",
    },

    {
      // icon: { BsFillCreditCardFill },
      // <BsFillCreditCardFill
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards. ",
    },

    {
      // icon: { MdProductionQuantityLimits },
      title: "Find The Best Products For You",
      subTitle: "Find the best products that serves you in a single click.",
    },
  ];

  return (
    <div className="my-2">
      <h1 className="text-center">Why choose us?</h1>
      <Section id="aboutus" className="mx-5 my-5">
        {data.map((aboutus) => {
          return (
            <div className="aboutus" key={aboutus.title}>
              <div className="icon">
                <img src={aboutus.icon} alt="" />
              </div>
              <h3>{aboutus.title}</h3>
              <p>{aboutus.subTitle}</p>
            </div>
          );
        })}
      </Section>
    </div>
  );
}
export default AboutUs;

const Section = styled.section`
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media screen and (min-width: 280px) and (max-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 540px) and (max-width: 1024px) {
    width:50%;
    margin:0 auto;
    
  }
  .aboutus {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #acf181;
    box-shadow: #4c8a19 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    @media screen and (min-width: 280px) and (max-width: 1024px) {
      margin-bottom:50px;
  }

    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: #949c8c 0px 5px 15px;
    }

    .icon {
      img {
        height: 2.4rem;
      }
    }
  } */

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minimax(250px, 1fr));
    width:100%
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    display: flex;
    justify-content: center;
    flex-direction: column;
  } 
`;
