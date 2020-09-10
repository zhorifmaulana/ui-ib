import styled from "styled-components";

export const Styles = styled.div`
  .colored {
    color: ${props => props.theme.eventColor};
  }

  .top-section {
    background: url(${props => props.theme.topBgSrc}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border: 1px solid #000000;
    box-sizing: border-box;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 30px;
    padding-top: 120px;
    padding-bottom: 110px;

    .big-logo-wrapper {
      display: flex;
      text-align: left;
      justify-content: center;
      align-items: center;

      .big-logo {
        width: 210px;
        margin-right: 1rem;
      }

      h1 {
        font-size: 3.5rem;
        margin-top: 0;
        margin-bottom: 1rem;
        letter-spacing: 3px;
      }

      h1.innov-battle {
        max-width: 400px;
        margin-bottom: 0;
      }
    }

    .big-desc {
      text-align: center;
      padding-top: 50px;
      font-size: 1.8rem;
    }
  }

  .desc-section {
    .long-desc {
      padding-top: 50px;
      padding-bottom: 40px;
      font-size: 1.5rem;
      font-style: italic;
      line-height: 1.4;
      max-width: 600px;
      margin: auto;
      text-align: center;
    }

    .learn-more-register {
      text-align: center;

      .btn-learn-register {
        padding-top: 15px;
      }

      .watch-video {
        a {
          color: #0066FF;
        }
        
        padding-top: 20px;

        .video-logo {
          width: 21px;
          display: inline-block;
          position: relative;
          top: 4px;
          left: 4px;
        }
      }

      button {
        background: ${props => props.theme.eventColor};
        border: 2px solid ${props => props.theme.eventColor};
        margin-left: 1rem;
        margin=right: 1rem;
        width: 175px;
      }

      button.secondary {
        color: ${props => props.theme.eventColor};
        background: transparent;
      }
    }
  }

  .timeline-section {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 60px;

    .timeline {
      max-width: 850px;
      padding-top: 10px;
      margin: auto;
    }
  }

  .why-section {
    text-align: center;
    padding-bottom: 50px;

    h1 {
      padding-bottom: 10px;
    }

    .why-list {
      display: flex;
      justify-content: center;

      .one-why {
        width: 33%;
        padding: 12px;
      }
    }
  }

  .faq-section {
    padding-bottom: 50px;

    h1 {
      text-align: center;
      padding-bottom: 10px;
    }
  }
`