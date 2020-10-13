import React from "react"
import { Link } from "gatsby"

import Button from "../Button"
import Image from "../image"

import { Styles } from "./style"

export default function LandingPage() {
  return (
    <Styles>
      <div className="top-landing">
        <div className="top-land-content">
          <div className="big-logo-wrapper">
            <div className="big-logo">
              <Image imgName="IB_Logo_Big.png" alt="Innovation Battlefield" />
            </div>
            <div>
              <h1>Innovation Battlefield</h1>
              <div className="powered-by">Powered by <b>VORMENT</b></div>
            </div>
          </div>
          <div className="big-desc">Bring the innovation fire and set the night alight!</div>
          <Button className="orange" to="#events">Main Event</Button>
        </div>
      </div>
      <div className="layout">
        <div id="events" style={{ position: "relative", bottom: "80px" }} />
        <div className="lp-events">
          <Link to="/battlefield" className="event-one">
            <h2>Battlefield</h2>
          </Link>
          <Link to="/masterclass" className="event-two">
            <h2>Masterclass</h2>
          </Link>
          <Link to="/exhibition" className="event-three">
            <h2>Exhibition</h2>
          </Link>
        </div>
        <div className="about-section">
          <div>
            <h2>About Innovation Battlefield</h2>
            <p>
              Innovation Battlefield 2.0 merupakan kompetisi desain UX dengan rangkaian acara yang terdiri dari <b>Masterclass, Battlefield, dan Exhibition.</b><br/>
              <br/>
              Kompetisi ini dapat diikuti oleh UX Researcher, UX Designer, UX Writer, dan UI Designer level pemula yang baru ingin memulai karirnya di dunia <i>product design.</i><br/>
              <br/>
              Dengan juri dan mentor dari para <i>expert</i> dari <i>company</i> paing adaptif dan berdampak di Indonesia, Innovation Battlefield akan menjadi ajang pertempuran untuk menemukan <b>Innovation Army</b> terbaik yang pernah ada!
            </p>
          </div>
          <div>
            <Image imgName="landing_about.png" alt="event innovation battlefield" />
          </div>
        </div>
        <div className="last-events">
          <h2>Our Last Event</h2>
          <div className="flex">
            <div className="lastevent-big">
              <Image imgName="landing_last_1.png" alt="last event 1" />
            </div>
            <div className="flex-small">
              <div className="lastevent-small">
                <Image imgName="landing_last_2.png" alt="last event 2" />
              </div>
              <div className="lastevent-small">
                <Image imgName="landing_last_3.png" alt="last event 3" />
              </div>
              <div className="lastevent-small">
                <Image imgName="landing_last_4.png" alt="last event 4" />
              </div>
              <div className="lastevent-small">
                <Image imgName="landing_last_5.png" alt="last event 5" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-section innovation-magazine">
          <div>
            <h2>Open Innovation Magazine</h2>
            <p>
              Open Innovation Magazine merupakan literatur digital mengenai startup yang bertujuan untuk mengedukasi, menstimulasi, dan menginspirasi pelajar dan mahasiswa untuk lebih dini dalam berkarya.
            </p>
            <p>
              Kami berbagi cerita, melakukan validasi ide, dan mempertemukan pembaca dengan founder terbaik.  Kami percaya, dengan berbagi cerita akan membawa kami ke dunia yang lebih dekat.
            </p>
            <p>
              <Button href="https://www.instagram.com/openinnovation.magz/" className="orange" newPage>
                Read on Instagram
              </Button>
            </p>
          </div>
          <div>
            <Image imgName="landing_innovation_magazine.png" alt="innovation magazine" />
          </div>
        </div>
      </div>
    </Styles>
  )
}
