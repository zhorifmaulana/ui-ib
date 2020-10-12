import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import Image from "../image"
import Button from "../Button"
import MyFAQ from "../MyFAQ"
import EventTopLanding from "./EventTopLanding"
import MentorSection from "./MentorSection"

import { Styles } from "./style"

function EventsPage({ event }) {
  let clickHereDesc = ""
  let theButtons = <></>
  if (event.registerUrl && event.guidebookPath) {
    clickHereDesc = "CLICK HERE TO LEARN MORE AND REGISTER"
    theButtons = (
      <>
        <Button href={event.registerUrl} newPage>Register</Button>
        <Button to={event.guidebookPath} className="secondary">Guidebook</Button>
      </>
    )
  } else if (event.registerUrl) {
    clickHereDesc = "REGISTER HERE"
    theButtons = <Button href={event.registerUrl} newPage>Register</Button>
  } else if (event.guidebookPath) {
    clickHereDesc = "CLICK HERE TO LEARN MORE"
    theButtons = <Button to={event.guidebookPath}>Guidebook</Button>
  }

  return (
    <Styles>
      <EventTopLanding
        name={event.name}
        color={event.color}
        shortdesc={event.shortdesc}
        longdesc={event.longdesc}
      />
      <div className="desc-section">
        <div className="learn-more-register">
          <div>{clickHereDesc}</div>
          <div className="btn-learn-register">
            {theButtons}
          </div>
          {event.video ?
            <div className="watch-video">
              <Link href={event.video}>
                Watch the videos
                <div className="video-logo">
                  <Image imgName="event_video_play.jpg" alt="play" />
                </div>
              </Link>
            </div>
          : <></>}
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
      {event.mentors ?
        <MentorSection mentors={event.mentors} />
      : <></>}
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
