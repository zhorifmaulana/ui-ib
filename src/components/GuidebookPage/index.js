import React from 'react'
import PropTypes from 'prop-types'

import Image from "../image"
import { Styles, SmallGap } from "./style"

function GuidebookPage({ whyList }) {
  return (
    <Styles>
      <div className="top-section">
        <h1>Guidebook</h1>
        <div>We all met to come up with our vision, mission, statement, goals, and challenges.</div>
      </div>
      <div className="guidebook-layout">
        <div className="guidebook-btn-list">
          <div className="guidebook-btn">
            <div>
              Syarat &amp; Ketentuan
            </div>
          </div>
          <div className="guidebook-btn">
            <div>
              Mekanisme
            </div>
          </div>
        </div>
        <p className="guidebook-content">
          <ul>
            <li>Peserta mendaftar secara individu</li>
            <li>Peserta dapat berasal dari background:<br/><b><SmallGap/>UI Designer<br/><SmallGap/>UX Designer<br/><SmallGap/>UX Researcher<br/><SmallGap/>UX Writer</b></li>
            <li>Pendaftaran dibuka tanggal 14 September - 26 September 2020 melalui website resmi Innovation Battlefield 2.0 dan juga dapat di akses di link pendaftaran: bit.ly/IB20-Form</li>
            <li>File pengiriman pendaftaran:<br/><SmallGap/>Resume dan Portofolio</li>
            <li>Selanjutnya peserta yang lolos ke 24 besar akan dimasukkan ke dalam 6 tim. Masing-masing tim terdiri atas 4 anggota.</li>
            <li>Lomba akan diadakan dengan format tim dan detail anggota tim akan diumumkan tanggal 7 Oktober 2020 melalui email dan/atau media sosial Innovation Battlefield</li>
            <li>Setelah pengumuman, peserta diminta untuk melakukan pembayaran pendaftaran sebesar Rp 2.940.000 yang dapat dicicil selama tiga kali pembayaran.</li>
            <li>Innovation Battlefield akan dilaksanakan menggunakan aplikasi Zoom Webinar</li>
            <li>6 (enam) tim yang telah terbentuk akan mendapatkan kesempatan bersaing di Battlefield dengan sistem kompetisi yang terdiri dari 7 episode, yaitu <b>Emphatize, Define, Ideate, Wireframe, UX Writing, Prototype, dan Validate.</b></li>
            <li>Kompetisi dilaksanakan mulai tanggal 12 Oktober - 30 November 2020 pukul 19.00 - 22.00 setiap hari Senin dan Kamis.</li>
            <li>Sebelum <b>Battlefield</b> dilaksanakan, peserta wajib mengikuti sesi <b>Masterclass</b> dari mentor.</li>
            <li><b>Battlefield</b> dilaksanakan dalam 7 episode dengan sistem klasemen.</li>
            <li>Dalam satu minggu diadakan 1 episode dengan 2 rangkaian acara, <b>Masterclass dan Battlefield</b></li>
            <li>Dari setiap <b>Battlefield</b>, setiap tim akan dinilai oleh para juri. Tim dengan perolehan nilai tertinggi dan memuncaki klasemen akan memenangkan perlombaan</li>
          </ul>
        </p>
        <div className="deskripsi-tambahan">
          <h1>Who We Are</h1>
          <p>Innovation Battlefield merupakan kompetisi UI/UX dengan rangkaian acara terdiri dari <b>Masterclass, Battlefield, dan Exhibition.</b> Innovation Battlefield akan dipandu oleh para expertise dari <b>Dunia Dalam Desain</b> yang akan menjadi mentor sekaligus pengisi materi selama kompetisi berlangsung.</p>
          <h1>UI UX Competition</h1>
          <p>Innovation Battlefield dapat diikuti oleh <b>UX Researcher, UX Designer, UX Writer, UI Designer,</b> pelajar, karyawan, hingga veteran (minimal usia 17 tahun). Innovation Battlefield cocok bagi kamu yang masih level pemula dan ingin memulai karir di dunia <b>product design.</b></p>
          <h1>Why We Held The Innovation Battlefield</h1>
          <p>
            Pesatnya perkembangan teknologi di dunia, termasuk Indonesia, memunculkan profesi baru di bidang teknologi. Salah satunya adalah <b>UX Designer</b> yang menjadi <i>role play</i> bagi perusahaan untuk memenuhi ekspetasi pengguna dalam suatu aplikasi atau website.<br/>
            <br/>
            Dengan juri dan mentor dari para <i>expert</i> dari <i>company</i> paling adaptif dan berdampak di Indonesia, Innovation Battlefield akan menjadi ajang pertempuran untuk menemukan <b>Innovation Army</b> terbaik yang pernah ada!
          </p>
        </div>
        <div className="why-section">
          <h1>Why You Should Join Innovation Battlefield</h1>
          <div className="why-list">
            {whyList.map(({ photo, desc }, index) => (
              <div key={index} className="one-why">
                <div className="why-image">
                  <Image imgName={photo} alt={`why you should join #${index}`} />
                </div>
                <h2>{desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Styles>
  )
}

GuidebookPage.propTypes = {
  whyList: PropTypes.array
}

export default GuidebookPage
