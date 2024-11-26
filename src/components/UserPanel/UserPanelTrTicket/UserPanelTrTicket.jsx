import React from 'react'
import { Link } from 'react-router-dom'

export default function UserPanelTrTicket ({  id,  title,  status,  dep,  dateRegistration,  timeRegistration,  dateUpdated,  timeUpdated,  desc}) {
  return (
    <>
      <tr>
        <td>{id}#</td>
        <td class='title'>
          <div class='title-box'>
            <Link to={`/my-account/ticket-list/show-ticket/${id}`} class='link-to-ticket'>
              {title}
            </Link>
            <span class='ticket-status pending'>{status}</span>
          </div>
        </td>
        <td>{dep}</td>
        <td>{timeRegistration} - {dateRegistration}</td>
        <td>{timeUpdated} - {dateUpdated}</td>
        <td>
          <div class='manage-btns'>
            <Link to={`/my-account/ticket-list/show-ticket/${id}`} href='./user-panel-ticket-show.html'>
              <i class='fa-solid fa-eye'></i>
              مشاهده
            </Link>
          </div>
        </td>
      </tr>
    </>
  )
}
