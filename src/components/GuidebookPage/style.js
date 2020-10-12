import styled from "styled-components";

export const SmallGap = styled.div`
  display: inline-block;
  width: 15px;
`

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
    padding-top: 50px;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: auto;
    margin-right: auto;

    .guidebook-btn-list {
      padding-bottom: 20px;
      display: flex;
      justify-content: center;
      text-align: center;

      .guidebook-btn {
        display: inline-block;
        width: 240px;
        height: 50px;
        border: 2px solid #196ab3;
        font-size: 1.4rem;

        div {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .guidebook-btn:first-of-type {
        background: linear-gradient(90deg, #0858A1 -4.2%, #6EA6D9 137%);
        border-radius: 7px 0px 0px 7px;
        border-right: none;
        color: black;
      }

      .guidebook-btn:last-of-type {
        border-radius: 0px 7px 7px 0px;
        border-left: none;
      }
    }

    .guidebook-content ul {
      list-style-type: decimal;

      li {
        padding-left: .75rem;
      }
    }

    p {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.4;
      font-size: 1.1rem;
    }

    .deskripsi-tambahan {
      text-align: center;
    }
  }

  h1 {
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    background: -webkit-linear-gradient(0deg, #107ADC 35%, #E37C1D 50%, #31B057 74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  b {
    font-style: italic;
  }

  .why-section {
    text-align: center;
    padding-bottom: 50px;

    h1 {
      padding-bottom: 10px;
    }

    .why-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .one-why {
        width: calc(33% - 24px);
        padding: 12px;

        h2 {
          font-size: 1.3em;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .guidebook-layout .guidebook-btn-list .guidebook-btn {
      width: 150px;
      height: 60px;
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 550px) {
    .why-section {
      .why-list {
        flex-wrap: wrap;

        .one-why {
          width: calc(50% - 16px);
          padding: 8px;

          h2 {
            font-size: 0.9em;
          }
        }
      }
    }
  }
`