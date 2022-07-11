import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
       width: 100%;
       height: 100vh;
        background-image: url('https://picsum.photos/1600/900');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;


        
    }
    *{
        margin: 0;
        padding: 0;
    }
`;
export default GlobalStyle;
