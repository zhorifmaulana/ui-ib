import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledButton = styled.button`
  background: #126CC0;
  border-radius: 360px;
  box-sizing: border-box;
  border: 2px solid #126CC0;
  padding: 10px 28px;
  cursor: pointer;
  color: white;
  font-size: 16px;

  &.small {
    padding: 4px 18px;
  }

  &.orange {
    background: #E37C1D;
    border: 2px solid #E37C1D;
  }

  &.secondary {
    background: transparent;
    color: white;
  }

  &.bold {
    font-weight: bold;
  }

  &:hover {
    opacity: 0.75;
  }

  &:disabled {
    opacity: 0.75;
    cursor: unset;
  }
`

const Button = props => {
  if (props.to) {
    return (
      <Link to={props.to}>
        <StyledButton {...props}>{props.children}</StyledButton>
      </Link>
    )
  }
  if (props.href) {
    if (props.download) {
      return (
        <a href={props.href} download>
          <StyledButton {...props}>{props.children}</StyledButton>
        </a>
      )
    } else if (props.newPage) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <StyledButton {...props}>{props.children}</StyledButton>
        </a>
      )
    } else {
      return (
        <a href={props.href}>
          <StyledButton {...props}>{props.children}</StyledButton>
        </a>
      )
    }
  }
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  newPage: PropTypes.bool,
  children: PropTypes.string,
}

Button.defaultProps = {
  type: "button",
}

export default Button
