import React, { Component } from "react"
import PropTypes from 'prop-types'
import Faq from "react-faq-component";

import { Styles } from "./style"

const faqStyles = {
  bgColor: "transparent",
  titleTextColor: "#F3F3F3",
  rowTitleColor: "#F3F3F3",
  rowContentColor: "#01081F",
  arrowColor: "#F3F3F3",
}

const faqConfig = {
  animate: true,
}

class MyFAQ extends Component {
  render() {
    const { faqList } = this.props

    const data = {
      rows: faqList
    }

    return (
      <Styles>
        <Faq data={data} styles={faqStyles} config={faqConfig} />
      </Styles>
    )
  }
}

MyFAQ.propTypes = {
  faqList: PropTypes.array
}

export default MyFAQ
