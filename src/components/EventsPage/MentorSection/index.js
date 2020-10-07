import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from '../../image'

const Styles = styled.div`
  max-width: 950px;
  margin: auto;
  padding-bottom: 4rem;

  h1 {
    text-align: center;
    margin-top: 1rem;
  }

  .mentor-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .mentor {
      width: 27%;
      padding: 3%;
      text-align: center;

      .photo-wrapper {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      h3 {
        margin-bottom: .5rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .mentor-list {
      .mentor {
        width: 44%;
      }
    }
  }
`

function MentorSection({ mentors }) {
  return (
    <Styles>
      <h1 className="colored">Our Mentor and Judges</h1>
      <div className="mentor-list">
        {mentors.map(({ photo, name, position }, index) => (
          <div className="mentor" key={index}>
            <div className="photo-wrapper">
              <Image imgName={photo} alt={name}/>
            </div>
            <h3>{name}</h3>
            <div>{position}</div>
          </div>
        ))}
      </div>
    </Styles>
  )
}

MentorSection.propTypes = {
  mentors: PropTypes.array
}

export default MentorSection
