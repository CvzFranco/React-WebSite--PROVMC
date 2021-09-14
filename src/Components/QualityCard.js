import React from "react";
import styled from "styled-components";

function QualityCard({ logo, title, text }) {
  return (
    <CardStyled>
      <div className="card-container">
        <div className="card-header">
          <div className="card-header-figure">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="title">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}
const CardStyled = styled.div`
  .card-container {
    height: 20rem;
    width: 15rem;
    position: relative;
    margin-bottom: 1rem;
    border-radius: 5%;
    overflow: hidden;
    box-shadow: 0px 7px 10px -6px rgba(0, 0, 0, 0.5);
    transition: 0.4s ease-out;
    .card-header {
      height: 40%;
      position: relative;
      .card-header-figure {
        display: flex;
        flex-direction: column;
        text-align: center;
        transform: translatey(70px);
        transition: 0.5s;
        .logo {
          padding-top: 1rem;
        }
        .title {
          padding-top: 0.5rem;
        }
      }
    }

    .card-body {
      height: 60%;
      background-color: rgba(39, 169, 224, 0.3);
      position: relative;
      color: white;
      opacity: 0;
      transform: translateY(30px);
      transition: 0.5s;

      p {
        text-align: center;
        width: 80%;
        vertical-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .card-container:hover {
    transform: translateY(20px);
    .card-container:before:hover {
      opacity: 1;
      transform: translateY(0px);
    }
    .card-body {
      opacity: 1;
      transform: translateY(0px);
    }

    .card-header-figure {
      transform: translateY(0px);
    }
  }
  .card-container:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
`;
export default QualityCard;
