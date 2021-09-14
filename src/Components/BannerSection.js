import React from "react";
import styled from "styled-components";
import banner from "../img/Banner.svg";

function BannerSection() {
  return (
    <BannerStyled>
      <div className="container">
        <div className="text">
          <h1>PROVMC</h1>
          <p>
            Les experts de l’entretien et de la maintenance des systèmes de
            ventilations, specialisés dans les copropriétés.
          </p>
          <br />
          <p>
            Des professionnels qualifiés et réactifs pour répondre à tous vos
            besoins liés aux VMC et ventilations naturelles
          </p>
        </div>
      </div>
    </BannerStyled>
  );
}
const BannerStyled = styled.section`
  .container {
    background-image: url(${banner});
    width: 100%;
    height: 57vh;
    display: flex;
    position: relative;

    .text {
      width: 45%;
      position: absolute;
      left: 15%;
      top: 50%;
      transform: translateY(-50%);
      h1 {
        font-size: 4rem;
        padding-bottom: 2rem;
      }
      p {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
        padding-bottom: 1.3rem;
      }
    }
  }
`;

export default BannerSection;
