import styled from "styled-components";

export const Styles = styled.div`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 80px;
  max-width: 600px;
  margin: auto;
  margin-top: 60px;

  .big-logo-wrapper {
    display: flex;
    text-align: left;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;

    .big-logo {
      width: 150px;
      margin-right: 1rem;
    }

    h1 {
      font-size: 2.8rem;
      max-width: 240px;
      margin-top: 0;
      margin-bottom: 1rem;
      letter-spacing: 3px;
    }
  }
  
  form {
    label {
      padding-top: 20px;
      padding-bottom: 5px;
      display: block;
      text-align: left;
    }

    button {
      margin-top: 30px;
    }

    input {
      background: black;
      color: white;
      border: 1px solid #FFFFFF;
      box-sizing: border-box;
      border-radius: .5rem;
      padding: 10px 10px;
    }

    input, button, label {
      width: 100%;
      font-size: 1.2rem;
    }
  }

  .to-register {
    font-size: 1.2rem;
    padding-top: 20px;

    a {
      color: #126CC0;
    }
  }
`
