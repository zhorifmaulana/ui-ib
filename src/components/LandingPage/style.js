import styled from "styled-components";

import lpMasterclass from "../../images/landing_battlefield_masterclass.png"
import lpExhibition from "../../images/landing_exhibition.png"

export const Styles = styled.div`
  .top-landing {
    text-align: center;
    margin-top: 240px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 120px;
    background: linear-gradient(181.13deg, #107ADC 8.61%, rgba(23, 121, 212, 0.772649) 26.25%, rgba(31, 120, 203, 0.483724) 41.07%, rgba(37, 119, 195, 0.265621) 52.75%, rgba(41, 119, 191, 0.133827) 73.44%, rgba(43, 118, 188, 0.046875) 87.08%, rgba(43, 118, 188, 0) 87.08%);
    mix-blend-mode: normal;
    border: 1px solid #000000;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 275px;

    .top-land-content {
      position: relative;
      bottom: 125px;
    }

    .big-logo-wrapper {
      display: flex;
      text-align: left;
      justify-content: center;
      align-items: center;

      .big-logo {
        width: 215px;
        margin-right: 1rem;
      }

      h1 {
        font-size: 4.1rem;
        max-width: 400px;
        margin-top: 0;
        margin-bottom: 1rem;
        letter-spacing: 3px;
      }
    }

    .big-desc {
      font-size: 1.75rem;
      padding-top: 25px;
      font-weight: 200;
      padding-bottom: 50px;
    }
  }

  .lp-events {
    margin-top: -120px;
    display: flex;
    justify-content: center;

    & > * {
      display: block;
    }

    h2 {
      font-size: 2rem;
      font-weight: normal;
    }

    h2:first-of-type {
      margin-bottom: .5rem;
      font-weight: bold;
    }

    h2:nth-of-type(2) {
      margin-top: .5rem;
    }

    .event-one, .event-two {
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      border: 1px solid #000000;
      box-sizing: border-box;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 30px;
      width: 50%;
      padding-top: 160px;
      padding-left: 30px;
      padding-right: 30px;
    }

    .event-one:hover, .event-two:hover {
      opacity: 0.75;
    }

    .event-one {
      background: url(${lpMasterclass}) no-repeat center center;
      margin-left: 10px;
      margin-right: 30px;

      h2:first-of-type {
        color: #31B057;
      }
    }

    .event-two {
      background: url(${lpExhibition}) no-repeat center center;
      margin-left: 30px;
      margin-right: 10px;

      h2:first-of-type {
        color: #C25B21;
      }
    }
  }

  .about-section {
    display: flex;
    padding-top: 75px;
    padding-bottom: 30px;

    h2 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    & > div:first-of-type {
      width: 60%;
      padding-right: 20px;
    }
    
    & > div:last-of-type {
      padding-left: 40px;
      width: 40%;
    }
  }

  .last-events {
    h2 {
      font-size: 2rem;
      text-align: right;
      padding-bottom: .5rem;
      padding-right: 1rem;
    }

    .flex {
      display: flex;

      .lastevent-big {
        width: 50.5%;
      }
    }

    .flex-small {
      display: flex;
      flex-wrap: wrap;
      width: 49.5%;

      .lastevent-small {
        width: 47%;
        margin-left: 3%;
      }

      .lastevent-small:nth-of-type(1), .lastevent-small:nth-of-type(2) {
        margin-bottom: 30px;
      }
    }
  }

  .innovation-magazine {
    & > div:first-of-type {
      padding-top: 30px;
      width: 60%;
      padding-right: 30px;
    }
    
    & > div:last-of-type {
      padding-left: 60px;
      width: 30%;
      padding-right: 10%;
    }

    p {
      padding-top: .3rem;
      padding-bottom: .3rem;
    }

    button {
      margin-top: .5rem;
    }
  }
`