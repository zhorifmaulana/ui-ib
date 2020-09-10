import styled from "styled-components";

export const Styles = styled.div`
  .top-section {
    background: url(${props => props.theme.topBgSrc}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 500px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 4rem;
      margin-top: 0;
      margin-bottom: .5rem;
    }

    div {
      font-size: 1.5rem;
      max-width: 500px;
      text-align: center;
      padding-bottom: 2rem;
    }
  }
  
  .guidebook-layout {
    max-width: 900px;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -50px;

    h1, p {
      max-width: 560px;
      margin-left: auto;
      margin-right: auto;
    }

    h1 {
      padding-top: 50px;
      background: -webkit-linear-gradient(0deg, #107ADC 37%, #E37C1D 48%, #31B057 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      line-height: 1.4;
      font-size: 1.1rem;
    }

    iframe {
      border: none;
      width: 100%;
      height: 700px;
    }

    .hadiah-list {
      text-align: center;

      .hadiah {
        display: flex;
        justify-content: center;

        & > * {
          width: 33%;
          padding: 12px;
        }
      }
    }
  }
`