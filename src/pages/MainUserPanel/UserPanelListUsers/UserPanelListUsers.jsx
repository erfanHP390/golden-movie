import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'
import { Link } from 'react-router-dom'

export default function UserPanelListUsers () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - لیست تماشا </title>
      </Helmet>
      <UserPanelContent
        title={`لیست تماشا`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`لیست تماشا`}
        toLink2={`/my-account/list-movies-user`}
        btn={<Link to={`/my-account/create-list`}  class="sub-link"  >لیست جدید</Link>}
      >
        <div class='content-box'>
          <section class='section_content panel-public-list'>
            <div class='responsive-table'>
              <table class='table-list'>
                <thead>
                  <tr>
                    <th>عنوان</th>
                    <th>نوع</th>
                    <th>تعداد آیتم</th>
                    <th>تاریخ ایجاد</th>
                    <th>عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>فیلم های جنایی</td>
                    <td>فیلم</td>
                    <td>0</td>
                    <td>۱۰ آذر ۱۴۰۳</td>
                    <td>
                      <div class='operations'>
                        <Link
                          to={`/my-account/list-movies-user/edit`}
                          class='edit'
                        >
                          ویرایش اطلاعات
                        </Link>
                        <Link
                          to={`/my-account/list-movies-user/edit-items`}
                          class='edit'
                        >
                          ویرایش آیتم ها
                        </Link>
                        <a
                          href='#'
                          onclick="return confirm('از حذف این لیست اطمینان دارید؟')"
                          class='delete'
                        >
                          حذف
                        </a>
                        <a
                          href='#'
                          target='_blank'
                          class='show'
                        >
                          مشاهده
                        </a>
                      </div>
                    </td>
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
