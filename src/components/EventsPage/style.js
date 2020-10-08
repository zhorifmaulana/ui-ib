import styled from "styled-components";

export const Styles = styled.div`
  .colored {
    color: ${props => props.theme.eventColor};
  }

  .desc-section {
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
        margin-right: 1rem;
        margin-top: .4rem;
        margin-bottom: .4rem;
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

  @media screen and (max-width: 550px) {
    .timeline-section {
      overflow-x: hidden;

      .timeline {
        margin-left: -40px;
        margin-right: -40px;
      }
    }

    .why-section {
      .why-list {
        flex-wrap: wrap;

        .one-why {
          width: calc(50% - 16px);
          padding: 8px;

          h2 {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    .top-section .big-logo-wrapper {
      h1, h1.innov-battle {
        font-size: 1.75rem;
      }

      .powered-by {
        font-size: .9rem;
      }
    }
  }
`