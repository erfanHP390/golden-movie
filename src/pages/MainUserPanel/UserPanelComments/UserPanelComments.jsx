import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'

export default function UserPanelComments () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - دیدگاه ها </title>
      </Helmet>
      <UserPanelContent
        title={`دیدگاه ها`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`دیدگاه ها`}
        toLink2={`/my-account/comments-user`}
      >
        <div class='content-box'>
          <section class='section_content profile-comments-list'>
            <div class='is_empty'>
              <div class='content'>
                {/* <img src='#' alt='دیدگاه ها' /> */}
                <h2 class='title'>لیست شما خالی است</h2>
                <p class='desc'>لیست دیدگاه های شما خالی می باشد</p>
              </div>
            </div>
          </section>
        </div>
      </UserPanelContent>
    </>
  )
}
