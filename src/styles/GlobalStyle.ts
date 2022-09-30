import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#C25757",
  secondary: "#000000",
  white: "#ffffff",
  black: "#000000",
  grey: "#CCCCCC"
}
