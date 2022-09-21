import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export const GlobalStyle = createGlobalStyle` 
 ${normalize} 
 html { 
    box-sizing: border-box;   
    font-size: 20px; 
    min-width: 320px;
}
 a { cursor: pointer; text-decoration: none; }
 body {
    background-color: #323232;
    overflow: hidden;
     -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
 }
 
 `;
