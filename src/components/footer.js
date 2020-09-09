import React from "react"
import styled from "styled-components"

import Image from "./image"

const StyledFooter = styled.footer`
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 30px;
  padding-bottom: 50px;

  h2 {
    padding-top: 20px;
    font-size: 2rem;
  }

  .sponsor-img {
    width: 200px;
    display: inline-block;
  }
`

const Footer = () => (
  <StyledFooter>
    <h2>In Collaboration</h2>
    <div>
      <div className="sponsor-img">
        <Image imgName="sponsor_dunia_dalam_desain.png" alt="Dunia dalam Desain" />
      </div>
    </div>
    <h2>Sponsored By</h2>
    <div style={{ height: "100px" }}>

    </div>
  </StyledFooter>
)

export default Footer
