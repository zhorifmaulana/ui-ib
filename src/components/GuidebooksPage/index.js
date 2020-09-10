import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import Image from "../image"
import Button from "../Button"

import { Styles } from "./style"

function EventsPage({ guidebook }) {
  return (
    <Styles>
      <div className="top-section">
        <h1>{guidebook.title}</h1>
        <div>{guidebook.shortdesc}</div>
      </div>
      <div className="guidebook-layout">
        <iframe title={guidebook.title} src={`/content/${guidebook.filename}`} />
        <div className="hadiah-list">
          <h1>Hadiah Pemenang</h1>
          <div className="hadiah">
            {guidebook.hadiahList.map(({ imgName }, index) => (
              <div key={index}>
                <Image imgName={imgName} alt={`hadiah ${index}`} />
              </div>
            ))}
          </div>
          <h1>Mengapa kami menyelenggarakan Innovation Battlefield?</h1>
          <p>Faktanya UX Designer menjadi salah satu orang yang paling diburu oleh company karena penggunaan User Experience dalam suatu aplikasi atau website mempengaruhi citra perusahaan secara langsung. Disinilah kamu bisa bertanding menguji skillmu dan juga mendapatkan berbagai ilmu-ilmu baru dari expertise.</p>
        </div>
      </div>
    </Styles>
  )
}

EventsPage.propTypes = {
  guidebook: PropTypes.object.isRequired
}

export default EventsPage
