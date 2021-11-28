import css from "styled-jsx/css";
import { fonts, colors, breackpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgroundColor = addOpacityToColor(colors.primary, 0.3);

export const globalStyles = css.global`
  html,
  body {
    background: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${fonts.base};
  }
  * {
    box-sizing: border-box;
  }
  textara,
  input {
    font-family: ${fonts.base};
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }
  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
    overflow-y: auto;
    position: relative;
    width: 100%;
  }
  ::-webkit-scrollbar-track {
    border: 3px solid white;
    background-color: #ccc;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #ccc;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0099ff4d;
    border-radius: 5px;
  }
  @media (min-width: ${breackpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breackpoints.mobile};
    }
  }
`;
