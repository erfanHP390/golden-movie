import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'
import { Link } from 'react-router-dom'

export default function UserPanelCreateList () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - ایجاد لیست </title>
      </Helmet>
      <UserPanelContent
        title={`ایجاد لیست`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`ایجاد لیست`}
        toLink2={`/my-account/create-list`}
        btn={<Link to={`/my-account/list-movies-user`}  class="sub-link"  >لیست ها</Link>}
      >
                  <div class="content-box">
            <section class="section_content panel-public-list">
              <form  action=""  method="POST"  class="form new-list-form">
                <div class="loader-box none">
                  <div class="dot-loader">
                    <div class="dot-item"></div>
                    <div class="dot-item second-dot"></div>
                    <div class="dot-item third-dot"></div>
                  </div>
                </div>
                <div class="input">
                  <label for="title">عنوان لیست</label>
                  <input type="text" name="title" id="title" />
                </div>
                <div class="input">
                  <label for="content">توضیحات</label>
                  <textarea name="content" id="content"></textarea>
                </div>
                <div class="input multiple">
                  <div class="right-box">
                    <div class="switch-select">
                      <label for="type">نوع لیست</label>
                      <div class="switch-items">
                        <span class="item active" data-value="movies"  >فیلم</span>
                        <span class="item" data-value="series">سریال</span>
                        <span class="item" data-value="actors">افراد</span>
                        <input type="hidden" name="type" value="movies" />
                      </div>
                    </div>
                  </div>

                  <div class="left-box">
                    <button class="submit" type="submit">ایجاد لیست</button>
                  </div>
                </div>
              </form>
            </section>
          </div>
      </UserPanelContent>
    </>
  )
}
