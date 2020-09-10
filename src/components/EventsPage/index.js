import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import Image from "../image"
import Button from "../Button"
import MyFAQ from "../MyFAQ"

import { Styles } from "./style"

function EventsPage({ event }) {
  return (
    <Styles>
      <div className="top-section">
        <div className="big-logo-wrapper">
          <div className="big-logo">
            <Image imgName="IB_Logo_Big.png" alt="Innovation Battlefield" />
          </div>
          <div>
            <h1 className="innov-battle">Innovation Battlefield</h1>
            <h1 style={{ color: event.color }}>{event.name}</h1>
            <div>powered by <b>VORMENT</b></div>
          </div>
        </div>
        <div className="big-desc">{event.shortdesc}</div>
      </div>
      <div className="desc-section">
        <div className="long-desc">{event.longdesc}</div>
        <div className="learn-more-register">
          <div>CLICK HERE TO LEARN MORE AND REGISTER</div>
          <div className="btn-learn-register">
            <Button>Register</Button>
            <Button to={event.guidebookPath} className="secondary">Guidebook</Button>
          </div>
          <div className="watch-video">
            <Link to="/">
              Watch the videos
              <div className="video-logo">
                <Image imgName="event_video_play.jpg" alt="play" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="timeline-section">
        <h1 className="colored">Timeline</h1>
        <div className="timeline">
          <Image imgName={event.timelineImage} alt={`timeline ${event.name}`} />
        </div>
      </div>
      <div className="why-section">
        <h1 className="colored">Why you should join the battlefield?</h1>
        <div className="why-list">
          {event.whyDesc.map(({ photo, desc }, index) => (
            <div key={index} className="one-why">
              <div className="why-image">
                <Image imgName={photo} alt={`why you should join #${index}`} />
              </div>
              <h2>{desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="faq-section">
        <h1 className="colored">Frequently Asked Question</h1>
        <div>
          <MyFAQ faqList={event.faqList} />
        </div>
      </div>
    </Styles>
  )
}

EventsPage.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventsPage
