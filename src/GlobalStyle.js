import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --blue-main : #294D79;
    --light-blue: #27A9E0;
    
    
}

* {
    margin:0;
    padding:0;
    text-decoration:none;
    list-style:none;
    font-family: "poppins" , sans-serif;
    color:var(--blue-main)
    
}
h1 {
    color:var(--blue-main)
}
`;

export default GlobalStyle;
