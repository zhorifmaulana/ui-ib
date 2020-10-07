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
          <div className="big-desc">The biggest UX competition for college students</div>
          <Button className="orange">Register</Button>
        </div>
      </div>
      <div className="layout">
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
              Innovation Battlefield 2.0 merupakan kompetisi UX sekaligus ajang cari jodoh bagi para UX designer dengan company yang sedang membutuhkan talent ini. Rangkaian acara terdiri atas Masterclass, Battlefield, dan Exhibition yang diadakan dalam kurun waktu kurang lebih 1,5 bulan. Innovation Battlefield 2.0 akan diisi oleh para expertise dari Dunia Dalam Desain yang akan menjadi mentor sekaligus pengisi materi selama kompetisi dan kelas UX berlangsung.
            </p>
            <p>
              Tidak hanya diperuntukkan kepada UX Talents, Innovation Battlefield 2.0 juga dapat diikuti oleh peserta umum yang hendak belajar UX tetapi tidak ingin mengikuti perlombaannya. Mereka dapat menyaksikan sekaligus belajar bersama peserta UX competition yang sedang bertanding. Innovation Battlefield 2.0 diselenggarakan dengan total 8 episode. Kompetisi ini akan mengeliminasi 2 tim tiap minggu hingga tersisa 2 tim di final.
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
              <Button href="https://www.instagram.com/openinnovation.magz/" className="orange">
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
