import styled from "styled-components"

export const Styles = styled.div`
  max-width: 850px;
  margin: auto;

  .faq-row-wrapper > section > section {
    padding: 0;
    border: none;
    margin-bottom: 15px;
  }

  section > div[role=button] {
    padding-left: 28px !important;
    padding-right: 28px !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    border-radius: 40px;
    color: ${props => props.theme.eventColor};
    border: 2px solid ${props => props.theme.eventColor};
    background: transparent;
  }

  section:first-of-type > div[role=button] {
    background: ${props => props.theme.eventColor};
    color: white;
  }

  section > div[role=button][aria-expanded=true] {
    border-radius: 22px 22px 0 0;
    border-bottom: none;
  }

  section > div[role=region] {
    padding-left: 30px !important;
    padding-right: 30px !important;
    padding-top: 8px;
    padding-bottom: 10px;
    background: #F3F3F3;
    border-radius: 0px 0px 22px 22px;
  }

  section > div[role=region][aria-expanded=false] {
    padding: 0;
  }
`