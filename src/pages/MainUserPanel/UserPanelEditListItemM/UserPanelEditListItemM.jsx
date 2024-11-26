import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'
import { Link } from 'react-router-dom'

export default function UserPanelEditListItemM () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - ویرایش آیتم های لیست تماشا </title>
      </Helmet>
      <UserPanelContent
        title={`ویرایش  آیتم های لیست تماشا`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`ویرایش آیتم های لیست تماشا`}
        toLink2={`/my-account/list-movies-user/edit-items`}
      >
        <div class='content-box'>
          <section class='section_content panel-public-list edit-items'>
            <div class='loader-box none'>
              <div class='dot-loader'>
                <div class='dot-item'></div>
                <div class='dot-item second-dot'></div>
                <div class='dot-item third-dot'></div>
              </div>
            </div>
            <div class='edit-items-head'>
              <div
                class='headline-choose'
                data-active='true'
                data-type='movies'
              >
                <span class='title'>نام فیلم</span>
                <input type='text' class='input' />
                <button class='btn'>جستجو</button>
                <ul class='result-list none'></ul>
              </div>
              <div class='save-items'>
                <button class='save' data-list='23'>
                  ذخیره اطلاعات
                </button>
              </div>
            </div>

            <div class='edit-items-body'>
              <ul class='list'></ul>
            </div>
          </section>
        </div>
      </UserPanelContent>
    </>
  )
}
