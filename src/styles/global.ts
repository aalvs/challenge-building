import { createGlobalStyle } from "styled-components";

 export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body {

        /*background: linear-gradient(#043385, #1797D7); */
        background: linear-gradient(#2CA4F4, #C2E6FB);
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
 `;
