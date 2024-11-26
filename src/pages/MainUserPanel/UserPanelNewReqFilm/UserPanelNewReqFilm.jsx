import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'

import { years } from '../../../js/data'

export default function UserPanelNewReqFilm () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - افزودن درخواست </title>
      </Helmet>
      <UserPanelContent
        title={`افزودن درخواست`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`افزودن درخواست`}
        toLink2={`/my-account/new-req-film`}
      >
                  <div class="content-box">
            <section class="section_content panel-new-request new-request">
              <form  action="https://demo.novinwp.com/digimedia/panel/requests/new-request/"  method="POST"  class="form">
                <div class="loader-box none">
                  <div class="dot-loader">
                    <div class="dot-item"></div>
                    <div class="dot-item second-dot"></div>
                    <div class="dot-item third-dot"></div>
                  </div>
                </div>
                <div class="input">
                  <label for="">نام فیلم یا سریال</label>
                  <input type="text" name="title" />
                </div>
                <div class="input">
                  <label for="">سال انتشار</label>
                  <select name="release" class="nice" style={{display: "none"}}>
                    <option value="0">انتخاب</option>
                    {
                        years.map(year => (
                            <option value={years}>{years}</option>
                        ))
                    }
                  </select>
                  <div class="nice-select nice" tabindex="0">
                    <span class="current">انتخاب</span>
                    <ul class="list">
                      {
                        years.map(year => (
                            <li data-value={year} class="option">{year}</li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div class="input last">
                  <label for="">دسته بندی</label>
                  <div class="switch-item">
                    <span class="item active" data-value="movie">فیلم</span>
                    <span class="item" data-value="serie">سریال</span>
                    <input type="hidden" value="movie" name="type" />
                  </div>
                </div>
                <div class="input submit">
                  <button>ارسال درخواست</button>
                </div>
              </form>
            </section>
          </div>
      </UserPanelContent>
    </>
  )
}
