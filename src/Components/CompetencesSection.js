import React from "react";
import styled from "styled-components";
import CompetencesCard from "./CompetencesCard";
import maintenance from "../img/maintenance.svg";
import pro from "../img/pro.svg";
import particuliers from "../img/particuliers.svg";

function CompetencesSection() {
  return (
    <CompetencesStyled>
      <div className="cards-section">
        <div className="cards-container">
          <CompetencesCard
            icon={maintenance}
            title={"Maintenance"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo expedita perferendis nisi eius, error aliquid nobis consequuntur temporibus officiis numquam similique! Omnis, harum doloremque."
            }
          />
          <CompetencesCard
            icon={pro}
            title={"Pour les professionnels"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo expedita perferendis nisi eius, error aliquid nobis consequuntur temporibus officiis numquam similique! Omnis, harum doloremque."
            }
          />
          <CompetencesCard
            icon={particuliers}
            title={"Pour les particuliers"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo expedita perferendis nisi eius, error aliquid nobis consequuntur temporibus officiis numquam similique! Omnis, harum doloremque."
            }
          />
        </div>
      </div>
    </CompetencesStyled>
  );
}

const CompetencesStyled = styled.section`
  .cards-section {
    background-color: rgba(39, 169, 224, 0.3);
    margin-top: 5rem;
    height: 34rem;
    position: relative;
  }
  .cards-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding-left: 10%;
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    img {
      transform: scale(0.6);
    }
  }
`;
export default CompetencesSection;
