import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'
import { Link } from 'react-router-dom'

export default function UserPanelReqList () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - لیست درخواست ها </title>
      </Helmet>
      <UserPanelContent
        title={`لیست درخواست ها`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`لیست درخواست ها`}
        toLink2={`/my-account/list-req`}
        btn={<Link  to={`/my-account/new-req-film`}  class="sub-link"  >درخواست جدید</Link>}
      >
                  <div class="content-box">
            <section class="section_content panel-requests">
              <div class="responsive-table">
                <table class="table-list">
                  <thead>
                    <tr>
                      <th>شناسه</th>
                      <th>درخواست</th>
                      <th>وضعیت</th>
                      <th>لینک ارجاع</th>
                      <th>پیام</th>
                      <th>تاریخ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1#</td>
                      <td>سریال های ایرانی</td>
                      <td>
                        <span class="status ">در حال بررسی</span>
                      </td>
                      <td>
                        <span class="not">ندارد</span>
                      </td>
                      <td><span class="msg">لطفا سریال های ایرانی هم به سایت اضافه کنید</span></td>
                      <td>۱۰ مهر ۱۴۰۳</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
      </UserPanelContent>
    </>
  )
}
