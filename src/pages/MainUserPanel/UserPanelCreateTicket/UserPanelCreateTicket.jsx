import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'

import { MdKeyboardArrowDown } from "react-icons/md";

export default function UserPanelCreateTicket () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - ایجاد تیکت </title>
      </Helmet>
      <UserPanelContent
        title={`ایجاد تیکت`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`تیکت ها`}
        toLink2={`/my-account/ticket-list`}
      >
        <div class='content-box'>
          <section class='section_content panel-new-request new-ticket'>
            <form
              action=''
              method='POST'
              class='form'
            >
              <div class='loader-box none'>
                <div class='dot-loader'>
                  <div class='dot-item'></div>
                  <div class='dot-item second-dot'></div>
                  <div class='dot-item third-dot'></div>
                </div>
              </div>
              <div class='input'>
                <label for='title'>موضوع</label>
                <input type='text' name='title' id='title' />
              </div>
              <div class='input'>
                <label for='department'>دپارتمان</label>
                <select
                  name='department'
                  id='department'
                  class='nice'
                  style={{display: "none"}}
                >
                  <option value='0'>انتخاب</option>
                  <option value='1'>واحد مالی</option>
                  <option value='2'>پشتیبانی فنی</option>
                  <option value='3'>سوالات قبل از خرید</option>
                </select>
                <div class='nice-select nice' tabindex='0'>
                  <span class='current'>سوالات قبل از خرید</span>
                  <ul class='list'>
                    <li data-value='1' class='option'>
                      واحد مالی
                    </li>
                    <li data-value='2' class='option focus'>
                      پشتیبانی فنی
                    </li>
                    <li data-value='3' class='option selected'>
                      {' '}
                      سوالات قبل از خرید
                    </li>
                  </ul>
                  <MdKeyboardArrowDown className='icon-nice-select' />
                </div>
              </div>
              <div class='input last'>
                <label for='content'>توضیحات</label>
                <textarea name='content' id='content'></textarea>
              </div>
              <div class='input submit'>
                <button>ارسال تیکت</button>
              </div>
            </form>
          </section>
        </div>
      </UserPanelContent>
    </>
  )
}
