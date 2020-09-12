import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronLeft'

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

    .logo-flex:hover {
      opacity: 1;
    }

    .navbar-right {
      display: flex;
      align-items: center;

      a {
        display: inline-block;
        margin-right: 16px;
        margin-left: 16px;
      }
    }
    
    .navbar-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar-flex {
      padding-right: 6px;

      .navbar-right {
        display: none;
      }

      .navbar-mobile {
        display: block;

        .MuiButtonBase-root {
          margin-bottom: 2px;
        }
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

const Header = () => {
  const [drawerOpen, setDrawer] = useState(false)

  return (
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
          <Button to="/signin" className="small">Sign In</Button>
        </div>
        <div className="navbar-mobile">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(false)}
        className="navbar-overlay"
      >
        <div>
          <IconButton
            aria-label="close drawer"
            onClick={() => setDrawer(false)}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navList.map(({ to, name }, index) => (
            <Link to={to} key={index}>
              <ListItem button>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <Link to="/signin">
          <ListItem button>
            <ListItemText primary="Sign In" />
          </ListItem>
        </Link>
      </SwipeableDrawer>
    </StyledHeader>
  )
}

export default Header
