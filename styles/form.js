import styled from "styled-components";

export const StyleForm = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');

body {
  margin: 0;
  font-family: 'Sigmar One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
  .text-login {
    font-size: 26px;
    
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-signin {
    width: 100%;
    max-width: 520px;
    height: 380px;
    padding: 15px;
    margin: auto;
    background-color: white;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
    margin-top: 10%;
    border-radius:10px;
    background-color: rgba(89, 0, 255, 0.123);
  }
  .text-center {
    text-align: center;
    font-size: 700;
    letter-spacing: .01em;
  }
  /* INPUTS */
  .input-form {
    background-color: transparent;
    border: 1.5px solid rgb(0 0 0 / 10%);
    border-radius: 5px;
    padding: 10px;
    outline: none;
    width: 90%;
    font-size: 16px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    margin: 5px;
  }
  /* BUTTON SIGNUP */
  .button-signup {
    display: inline-block;
    font-weight: 400;
    color: #ffffff;
    height: 45px;
    width: 90%;
    text-align: center;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 10px;

    
  }
  .button-signup:hover{
    font-weight: 700;
    background-color: #000;
    color: #833ac7;

  }
  
  .fondo-color-signup {
    background: #833ac7;
  }
  .register-text{
    
    font-weight: 600;
  }
  .text-title-init {
    font-size: 3rem;
    color: #833ac7;
    font-weight: 600;
    letter-spacing: .01em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-home{
    display: flex;
    justify-content: center;


  }

  .footer-stilo{
    text-align: center;
  }
  .footer-div {
    margin-top: 2rem;
    padding-bottom: 1rem;
  }
  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #833ac7;
    justify-content: center;
    align-items: center;
  }
  
  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
  .text-center-two{
    margin: 10px auto;
    text-align: center;
    letter-spacing: .01em;
  }
  .margenes-laterales{
    margin: 1rem;
  }
  .nav-home{
    position: relative;
    padding: 1rem;
    background-color: #833ac7;
    color: #fff;
    font-size: 1.2em!important;
    font-weight: 400;
    transition: 0.5s;

  }
  .nav-home:hover{
    font-weight: 700;
      color: #000;
  }

  
  .margenes-colector{
    margin-top:60%;
    margin-left:10%;
  }
  .text-center-center{
    text-align: center;
    padding-bottom: 15%;
    font-size: 700;
    letter-spacing: .01em;
  }
  .fake-textarea {
    resize: none;
  }
  .fake-textarea:empty::before {
    position: absolute;
    content: "Write here...";
  }
  .botones{
    text-decoration: none;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    
    display: inline-block;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 10px;
  }

  .botones:hover{
    font-weight: 700;
    background-color: #000;
    color: #833ac7;

  }
`;