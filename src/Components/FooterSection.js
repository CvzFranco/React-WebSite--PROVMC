import React from "react";
import styled from "styled-components";
import map from "../img/map.svg";

function FooterSection() {
  return (
    <FooterStyled>
      <div className="footer-container">
        <div className="container-left">
          <div className="title">
            <h3>Besoin d'un conseil?</h3>
          </div>

          <div className="contact">
            <h3>PROVMC</h3>
            <p className="tel">04 22 13 13 06</p>
            <p className="adress">
              216 route de Bellet, <br />
              06200 Nice
            </p>
            <img src={map} alt="" />
          </div>
        </div>
        <div className="middle"></div>
        <div className="container-right">
          <div className="title">
            <h3>A propos</h3>
            <p>
              PROVMC a été créé en 2020 pour répondre au besoin grandissant
              d'une professionnalisation du métier, aujourd'hui effectué par des
              entreprises trop polyvalentes. PROVMC s'occupe uniquement des VMC
              et propose des prestations plus complètes effectuées par des
              techniciens spécialisés. .
            </p>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.section`
  .footer-container {
    height: 34rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:70%;
    padding-left:15%;

    .container-left {
      text-align: left;
      width: 15rem;

     .title {
         padding-bottom: 2rem;
     }

     .contact {
         h3 {
             padding-bottom: 0.5rem;
         }
         img {
             padding-top:2rem
         }
     }
      }
    }

    .middle {
        height:30rem;
        width:0.125rem;
        background-color:var(--light-blue);
        
    }
    .container-right {
      width: 15rem;
      text-align: left;
      font-size:1.1rem;
      height:25rem;
      margin-top:3.6rem;
      
      .title {
          h3 {
            padding-bottom: 2rem;
          }
      }
    }
  }
`;
export default FooterSection;
