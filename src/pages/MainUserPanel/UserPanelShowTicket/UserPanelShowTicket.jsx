import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'

import { tickets } from '../../../js/data'
import { useParams } from 'react-router-dom'

import { CiPaperplane } from "react-icons/ci";

export default function UserPanelShowTicket () {
  const params = useParams()
  const [ticket, setTicket] = useState(null)

  useEffect(() => {
    const findTicket = tickets.find(
      item => item.id === parseInt(params.ticketID)
    )
    setTicket(findTicket)
  }, [params.ticketID])

  console.log(ticket)

  if(!ticket) {
    return <div className='text-danger'>تیکت شما وجود ندارد</div>
  }

  return (
    <>
      <Helmet>
        <title>پنل کاربری - مشاهده تیکت </title>
      </Helmet>
      <UserPanelContent
        title={`نمایش تیکت`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`تیکت ها`}
        toLink2={`/my-account/ticket-list`}
      >
        <div class='content-box'>
          <section class='section_content show-ticket'>
            <div class='headline-title'>
              <h2>{ticket.title}</h2>
              <ul class='ticket-info'>
                <li class='item'>
                  <div class='icon'>
                    <i class='fa-solid fa-folder'></i>
                  </div>
                  <span>{ticket.dep}</span>
                </li>
                <li class='item'>
                  <div class='icon'>
                  <i class="fa-solid fa-signal"></i>
                  </div>
                  <span>{ticket.status}</span>
                </li>
                <li class='item'>
                  <div class='icon'>
                    <i class='fa-solid fa-clock'></i>
                  </div>
                  <span>{ticket.dateRegistration} - {ticket.timeRegistration}</span>
                </li>
                <li class='item'>
                  <div class='icon'>
                    <i class='fa-solid fa-arrow-rotate-right'></i>
                  </div>
                  <span>{ticket.dateUpdated} - {ticket.timeUpdated}</span>
                </li>
              </ul>
            </div>
            <div class='ticket-body'>
              <ul class='messages'>
                <li class='msg-item'>
                  <figure class='pic'>
                    <img
                      alt=''
                      src='https://secure.gravatar.com/avatar/d7a1e14b32549086d191e5a050315af9?s=50&amp;d=mm&amp;r=g'
                      srcset='    https://secure.gravatar.com/avatar/d7a1e14b32549086d191e5a050315af9?s=100&amp;d=mm&amp;r=g 2x  '
                      class='avatar avatar-50 photo'
                      height='50'
                      width='50'
                      decoding='async'
                    />
                  </figure>
                  <div class='msg-body'>
                    <div class='content-info'>
                      <p class='content'>{ticket.title}</p>
                      <div class='bottom-ticket-info'>
                        <div class='display_name'>{ticket.desc}</div>
                        <span class='time'>2 روز قبل</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <form action='' class='send-reply'>
                <input type='hidden' name='ticket_id' value='9' />
                <div class='loader-box none'>
                  <div class='dot-loader'>
                    <div class='dot-item'></div>
                    <div class='dot-item second-dot'></div>
                    <div class='dot-item third-dot'></div>
                  </div>
                </div>
                <textarea
                  name='content'
                  id='content'
                  placeholder='پیام خود را بنویسید ...'
                ></textarea>
                <button type='submit' class='send-btn'>
                <CiPaperplane style={{transform: "rotate(180deg)"}} />
                </button>
              </form>
            </div>
          </section>
        </div>
      </UserPanelContent>
    </>
  )
}
