import React from "react";
import styled from "styled-components";
import QualityCard from "./QualityCard";
import clock from "../img/clock.svg";
import fiability from "../img/fiability.svg";
import euro from "../img/euro.svg";
import dialogue from "../img/dialogue.svg";

function QualitySection() {
  return (
    <QualityStyled>
      <div className="title">
        <h1>Nos Valeurs</h1>
      </div>
      <div className="cards-container">
        <QualityCard
          logo={clock}
          title={"Réactivité"}
          text={
            "Pour toute demande de devis, nous nous engageons à répondre dans les plus brefs délais. Les travaux sont ensuite réalisés dans le respect des délais impartis."
          }
        />
        <QualityCard
          logo={fiability}
          title={"Fiabilité"}
          text={
            "Nous accordons une grande importance à la qualité du travail fourni et à la satisfaction de ses clients, dans toutes les situations."
          }
        />
        <QualityCard
          logo={euro}
          title={"Qualité-Prix"}
          text={
            "Nous travaillons avec les meilleurs fournisseurs, et ce depuis de nombreuses années, en vous proposant le meilleur prix, pour que la qualité soit accessible à tous."
          }
        />
        <QualityCard
          logo={dialogue}
          title={"Transparence"}
          text={
            "Nos devis sont clairs et complets afin de vous assurer une transparence optimale quant aux travaux réalisés. Nous sommes à votre écoute pour toute question."
          }
        />
      </div>
    </QualityStyled>
  );
}
const QualityStyled = styled.section`
  .title {
    height: 13rem;
    position: relative;

    h1 {
      font-size: 2.7rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h1:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      bottom: -1px;
      left: 50%;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--light-blue);
    }
  }

  .cards-container {
    display: flex;
    width: 80%;
    padding-top: 0rem;
    padding-left: 10%;
    justify-content: space-between;
  }
`;
export default QualitySection;
