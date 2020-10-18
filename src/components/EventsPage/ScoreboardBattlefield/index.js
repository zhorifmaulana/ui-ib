import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { getScoreboard } from "../../../services/util"

const Styles = styled.div`
  width: 100%;
  padding-bottom: 4rem;

  h1 {
    text-align: center;
    margin-top: 0;
  }

  .match-table {
    overflow-x: auto;
    width: 100%;

    table {
      border-spacing: 0;
      background: #F6F6F6;
      border-radius: 15px;
      margin: auto;
      letter-spacing: 1px;
    }

    tr {
      th {
        text-align: center;
        padding: 15px;
        background: linear-gradient(90deg, #31B057 32.96%, #3BCB66 69.99%);
        border-radius: 15px 15px 0px 0px;
      }

      td {
        padding: 5px 10px;
        color: #868382;
      }

      td:first-of-type {
        font-weight: bold;
        text-align: center;
        padding-left: 20px;
      }

      td:last-of-type {
        padding-right: 20px;
      }
    }

    tr:nth-of-type(2) {
      td:first-of-type {
        font-weight: normal;
      }
    }

    tr:nth-of-type(3) {
      td {
        border-top: 1px solid #31B057;
        border-bottom: 1px solid #31B057;
      }
    }
  }
`

const HIDE_DULU = true

function ScoreboardBattlefield() {
  const [scoreboard, setScoreboard] = useState([])

  let numberOfMatch = 0
  const tableHeaders = ["Pos", "Team"]

  scoreboard.forEach((person) => {
    numberOfMatch = Math.max(numberOfMatch, person.score.length)
  })

  for (let i = 1; i < numberOfMatch; ++i) {
    let toAdd = String(i)
    if (i === 1) {
      toAdd += "st"
    } else if (i === 2) {
      toAdd += "nd"
    } else if (i === 3) {
      toAdd += "rd"
    } else {
      toAdd += "th"
    }
    tableHeaders.push(toAdd)
  }
  tableHeaders.push("Skor")

  useEffect(() => {
    getScoreboard().then(data => {
      data.forEach((person) => {
        person.score.sort((a, b) => {
          return a.match - b.match
        })
        person.score.push({
          match: "Skor",
          value: person.score.map((x) => {
            return x.value
          }).reduce((total, value) => {
            return total + value
          })
        })
      })
      data.sort((a, b) => {
        return b.score[b.score.length - 1].value - a.score[a.score.length - 1].value
      })
      setScoreboard(data)
    })
  }, [])
  
  return HIDE_DULU || scoreboard.length === 0 ? <></> : (
    <Styles>
      <h1 className="colored">Battlefield Standings</h1>
      <div className="match-table">
        <table>
          <tr>
            <th colspan="20">MATCH</th>
          </tr>
          <tr>
            {tableHeaders.map((val, index) => (
              <td key={index}>
                {val}
              </td>
            ))}
          </tr>
          {scoreboard.map((person, idxRow) => (
            <tr key={idxRow}>
              <td>{idxRow + 1}</td>
              <td>{person.name}</td>
              {person.score.map((score, idxCol) => (
                <td key={idxCol}>{score.value}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </Styles>
  )
}

export default ScoreboardBattlefield
