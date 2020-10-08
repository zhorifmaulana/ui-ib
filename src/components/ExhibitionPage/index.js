import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import EventTopLanding from "../EventsPage/EventTopLanding"
import Image from '../image'

const Styles = styled.div`
  padding-bottom: 2rem;

  .colored {
    color: ${props => props.theme.eventColor};
  }

  .exhibition-desc {
    max-width: 1024px;
    margin: auto;

    h1.colored {
      text-align: center;
      padding-top: 1rem;
      padding-bottom: .5rem;
    }

    .one-exhibition {
      display: flex;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;

      .left-exhibition {
        width: 55%;
        padding-right: 5%;
        line-height: 1.4;
      }

      .right-exhibition {
        width: 40%;
      }
    }

    .one-exhibition:nth-of-type(even) {
      flex-direction: row-reverse;

      .left-exhibition {
        padding-right: 0;
        padding-left: 4%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .exhibition-desc {
      .one-exhibition {
        flex-wrap: wrap;
        flex-direction: column-reverse;

        .left-exhibition {
          width: 100%;
          padding-left: 0;
          padding-right: 0;

          h1 {
            margin-block-end: 0.33em;
          }
        }

        .right-exhibition {
          max-width: 600px;
          width: calc(100% - 50px);
          padding-left: 25px;
          padding-right: 25px;
          margin: auto;
        }
      }

      .one-exhibition:nth-of-type(even) {
        flex-direction: column-reverse;

        .left-exhibition {
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
  }
`

const HIDE_DULU = true

function ExhibitionPage({ event }) {
  return (
    <Styles>
      <EventTopLanding
        name={event.name}
        color={event.color}
        shortdesc={event.shortdesc}
        longdesc={event.longdesc}
      />
      <div className="exhibition-desc">
        {
          HIDE_DULU ?
          <h1 className="colored">Coming Soon</h1>
          :
          <>
            <h1 className="colored">Exhibition Day</h1>
            {event.exhibitions.map(({ photo, title, desc }, index) => (
              <div key={index} className="one-exhibition">
                <div className="left-exhibition">
                  <h1>{title}</h1>
                  <div>{desc}</div>
                </div>
                <div className="right-exhibition">
                  <Image imgName={photo} alt={title} />
                </div>
              </div>
            ))}
          </>
        }
      </div>
    </Styles>
  )
}

ExhibitionPage.propTypes = {
  event: PropTypes.object
}

export default ExhibitionPage
