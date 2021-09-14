import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";

function NavigationHeader() {
  return (
    <NavigationStyled>
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <a href="">Acceuil</a>
            </li>
            <li>
              <a href="">Nos Préstations</a>
            </li>
            <li>
              <a href="">Qui Sommes Nous?</a>
            </li>
            <li>
              <a href="">Contactez Nous</a>
            </li>
          </ul>
        </div>
      </div>
    </NavigationStyled>
  );
}
const NavigationStyled = styled.section`
  width: 100%;

  background-color: white;
  color: var(--blue-main);
  font-size: 0.8rem;

  .nav-container {
    height: 5.4rem;
    display: flex;
    width: 50%;
    position: relative;

    .logo {
      position: absolute;
      left: 17%;
      transform: scale(0.8);
    }

    .navbar {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(0, -50%);
    }

    ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      li {
        a{
          display:inline-block;
          position:relative;
          padding-bottom:2px;
          font-size:1.2rem;
        }
        a:after {
          content:'';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--light-blue);
          transform-origin: bottom right;
          transition: transform 0.4s ease-out;
        }

        a:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }       
        }
      }
    }
    
  }
`;
export default NavigationHeader;
