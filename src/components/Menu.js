import React from "react";
import styled from "styled-components";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={item.imageBack}
                      alt=""
                      className="service__image"
                    />
                  </div>
                  <div class="flip-card-back">
                    <img
                      src={item.imageFront}
                      alt=""
                      className="service__image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

export default Menu;

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-gap: 0.5rem;
 
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    
    .portfolio-content {
      
      .flip-card {
        
        background-color: transparent;
        width: 150px;
        height: 150px;
        perspective: 1000px;
        margin: 10px;
        border-radius:20px;
        @media screen and (max-width: 575px)and (min-width:375px){
          margin: 10px 10px 10px 75px;
        }
        &:hover {
          .flip-card-inner {
            transform: rotateY(180deg);
            transition: 1.5s;
          }
        }
        .flip-card-inner {
          
          border-radius:20px;
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0 4px 8px 0 var(--second__color);
          .flip-card-front {
            border-radius:20px;
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background-color: var(--fourth__color);
            color: black;
            .service__image {
              height: 100%;
              width: 100%;
             border-radius:20px;
            }
          }
          .flip-card-back {
            border-radius:20px;
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background-color: var(--fourth__color);
            color: white;
            transform: rotateY(180deg);
            .productsName{
              font-size:1rem;
            }
            .service__icons{
              display: flex;
              justify-content:space-around;

              .service__icon{
                font-size:2rem;
                color: var(--second__color);
                text-decoration:none
                .service__icon:hover{
                  color: black;
                  font-weight:bold;
                }
              }
            }
            .service__image {
              height: 100%;
              width: 100%;
              border-radius:20px;
            }
        }
      }
  }
`;
