import React from "react";
import styled from "styled-components";
import ContactHeader from "./ContactHeader";
import NavigationHeader from "./NavigationHeader";

function HeaderSection() {
  return (
    <headerStyled>
      <ContactHeader />
      <NavigationHeader />
    </headerStyled>
  );
}
const headerStyled = styled.section``;
export default HeaderSection;
