import React from "react";
import styled from "styled-components";
import mapIcon from "../img/mapIcon.svg";
import emailIcon from "../img/emailIcon.svg";
import phoneIcon from "../img/phoneIcon.svg";

function ContactHeader() {
  return (
    <ContactStyled>
      <ul>
        <div className="adress">
          <img src={mapIcon} alt="" />
          <li>216 Route de Bellet, 06200 Nice</li>
        </div>
        <div className="mail">
          <img src={emailIcon} alt="" />
          <li>info@provmc.fr</li>
        </div>
        <div className="phone">
          <img src={phoneIcon} alt="" />
          <li>04 22 13 13 06</li>
        </div>
      </ul>
    </ContactStyled>
  );
}
const ContactStyled = styled.div`
  width: 100%;
  height: 2.7rem;
  background-color: var(--light-blue);
  color: white;
  font-size: 0.8rem;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8rem;

    .adress {
      display: flex;
      align-items: center;
      position: relative;

      img {
        transform: scale(0.6);
        margin-left: 10px;
      }
      li {
        margin-left: -10px;
        color: white;
      }
    }
    .mail {
      display: flex;
      align-items: center;

      img {
        transform: scale(0.6);
      }
      li {
        color: white;
      }
    }
    .phone {
      display: flex;
      align-items: center;

      img {
        transform: scale(0.6);
      }
      li {
        color: white;
      }
    }
  }
`;

export default ContactHeader;
