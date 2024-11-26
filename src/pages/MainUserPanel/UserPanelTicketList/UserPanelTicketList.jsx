import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../../components/Header/Header'
import UserPanelSideBar from '../../../components/UserPanel/UserPanelSideBar/UserPanelSideBar'
import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'
import UserPanelTrTicket from '../../../components/UserPanel/UserPanelTrTicket/UserPanelTrTicket'

import { tickets } from '../../../js/data'

export default function UserPanelTicketList () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - لیست تیکت ها </title>
      </Helmet>

          <UserPanelContent
            title={`تیکت ها`}
            link1={`داشبورد`}
            toLink1={`/my-account`}
            link2={`تیکت ها`}
            toLink2={`/my-account/ticket-list`}
          >
          <div class="content-box">
            <section class="section_content panel-requests tickets">
              <div class="responsive-table">
                <table class="table-list">
                  <thead>
                    <tr>
                      <th>شناسه</th>
                      <th class="title">عنوان</th>
                      <th>دپارتمان</th>
                      <th>تاریخ ثبت</th>
                      <th>بروز شده</th>
                      <th>عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tickets.map(ticket => (
                        <UserPanelTrTicket {...ticket} />
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          </UserPanelContent>

    </>
  )
}
