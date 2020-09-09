import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Image from "./image"
import Button from "./Button"

const StyledHeader = styled.header`
  .navbar-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1150px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 15px;
    margin: auto;

    .logo-flex {
      display: flex;
      align-items: center;
      color: white;

      .small-logo {
        width: 24px;
        display: inline-block;
        margin-right: 10px;
        padding-bottom: 10px;
      }
    }

    .navbar-right {
      display: flex;
      align-items: center;

      a {
        display: inline-block;
        margin-right: 15px;
        margin-left: 15px;
      }

      button {
        margin-left: 20px;
      }
    }
  }
`

const navList = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Battlefield & Masterclass",
    to: "/battlefield-masterclass"
  },
  {
    name: "Exhibition",
    to: "/exhibition"
  },
]

const Header = () => (
  <StyledHeader>
    <div className="navbar-flex">
      <Link to="/" className="logo-flex">
        <div className="small-logo">
          <Image imgName="IB_Logo_Transparent.png" alt="Innovation Battlefield" />
        </div>
        <h3>Innovation Battlefield</h3>
      </Link>
      <div className="navbar-right">
        {navList.map(({ name, to }, index) => (
          <Link to={to} key={index}>
            {name}
          </Link>
        ))}
        <Button className="small">Sign In</Button>
      </div>
    </div>
  </StyledHeader>
)

export default Header
