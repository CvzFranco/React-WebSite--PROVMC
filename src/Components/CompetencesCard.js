import React from "react";
import styled from "styled-components";

function CompetencesCard({ icon, title, text }) {
  return (
    <CompetencesCardStyled>
      <div className="card-container">
        <div className="card-container-figure">
          <div className="container-logo-title">
            <div className="logo">
              <img src={icon} alt="" />
            </div>
            <div className="title">
              <h3>{title}</h3>
            </div>
          </div>

          <div className="container-text-button">
            <div className="text">
              <p>{text}</p>
            </div>
            <div className="button">
              <p>En savoir plus</p>
            </div>
          </div>
        </div>
      </div>
    </CompetencesCardStyled>
  );
}

const CompetencesCardStyled = styled.div`
  .card-container {
    background-color: white;
    width: 20rem;
    height: 25rem;
    border-radius: 10px;
    box-shadow: 0px 7px 10px -6px rgba(0, 0, 0, 0.5);
    text-align: center;

    .card-container-figure {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .container-logo-title {
        transform: translateY(90px);
        transition: 0.5s;
      }
      .logo {
        height: 6rem;
      }
      .title {
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container-text-button {
        transform: translateY(30px);
        opacity: 0;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .text {
          height: 10rem;
        }
        .button {
          height: 4rem;
          background-color: var(--blue-main);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 12rem;
          border-radius: 30px;
          transition: 0.3s;
          cursor: pointer;
          p {
            color: white;
          }
        }
      }
    }
  }
  .card-container:hover {
    .container-logo-title {
      transform: translateY(0px);
    }

    .container-text-button {
      transform: translateY(0px);
      opacity: 1;
    }
    .button:hover {
      background-color: var(--light-blue);
    }
  }
`;
export default CompetencesCard;
