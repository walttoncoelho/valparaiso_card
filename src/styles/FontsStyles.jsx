import { createGlobalStyle } from "styled-components";
/* import BloggerSans from "../fonts/BloggerSans.ttf";
import BloggerSans2 from "../fonts/Blogger Sans.otf"; */
import Mermaid from "../fonts/Mermaid Babies.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Mermaid';
  src: url(${Mermaid}) format('truetype')       
}
`;



export default FontStyles