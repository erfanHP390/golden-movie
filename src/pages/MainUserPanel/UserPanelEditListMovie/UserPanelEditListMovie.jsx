import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'
import { Link } from 'react-router-dom'

export default function UserPanelEditListMovie () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - ویرایش لیست تماشا </title>
      </Helmet>
      <UserPanelContent
        title={`ویرایش لیست تماشا`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`ویرایش لیست تماشا`}
        toLink2={`/my-account/list-movies-user/edit`}
      >
        <div class='content-box'>
          <section class='section_content panel-public-list'>
            <form action='' method='POST' class='form edit-list-form'>
              <input type='hidden' value='23' name='list_id' />
              <div class='loader-box none'>
                <div class='dot-loader'>
                  <div class='dot-item'></div>
                  <div class='dot-item second-dot'></div>
                  <div class='dot-item third-dot'></div>
                </div>
              </div>
              <div class='input'>
                <label for='title'>عنوان لیست</label>
                <input type='text' name='title' id='title' />
              </div>
              <div class='input'>
                <label for='content'>توضیحات</label>
                <textarea name='content' id='content'></textarea>
              </div>
              <div class='input multiple'>
                <div class='left-box'>
                  <button class='submit' type='submit'>
                    ویرایش لیست
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </UserPanelContent>
    </>
  )
}
