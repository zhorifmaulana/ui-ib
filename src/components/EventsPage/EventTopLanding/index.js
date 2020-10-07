import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from '../../image'

const Styles = styled.div`
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
    padding-top: 115px;
    padding-bottom: 100px;

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
        max-width: 350px;
        margin-top: 0;
        margin-bottom: 1rem;
        letter-spacing: 3px;
      }

      .powered-by {
        font-size: 1.3rem;
      }
    }

    .big-desc {
      text-align: center;
      padding-top: 50px;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 1.8rem;

      h2 {
        margin-top: 0;
        margin-bottom: 1rem;
      }
    }
  }

  .long-desc {
    padding-top: 50px;
    padding-bottom: 40px;
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.4;
    max-width: 800px;
    margin: auto;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .top-section .big-logo-wrapper h1 {
      font-size: 3.5rem;
      max-width: 300px;
    }
  }

  @media screen and (max-width: 550px) {
    .top-section {
      .big-logo-wrapper {
        .big-logo {
          width: 180px;
          margin-right: 1rem;
          padding-left: .5rem;
        }

        h1 {
          font-size: 2.5rem;
          max-width: 225px;
        }

        .powered-by {
          font-size: 1.1rem;
        }
      }

      .big-desc {
        font-size: 1.4rem;
      }
    }
    
    .long-desc {
      font-size: 1.25rem;
    }
  }
`

function EventTopLanding({ name, color, shortdesc, longdesc }) {
  return (
    <Styles>
      <div className="top-section">
        <div className="big-logo-wrapper">
          <div className="big-logo">
            <Image imgName="IB_Logo_Big.png" alt="Innovation Battlefield" />
          </div>
          <div>
            <h1>Innovation Battlefield</h1>
            <div className="powered-by">Powered by <b>VORMENT</b></div>
          </div>
        </div>
        <div className="big-desc">
          <h2 style={{ color: color }}>{name}</h2>
          <div>{shortdesc}</div>
        </div>
      </div>
      <div className="long-desc" dangerouslySetInnerHTML={{ __html: longdesc }} />
    </Styles>
  )
}

EventTopLanding.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  shortdesc: PropTypes.string,
  longdesc: PropTypes.string
}

export default EventTopLanding
