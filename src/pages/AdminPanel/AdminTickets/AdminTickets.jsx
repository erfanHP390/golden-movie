import React from 'react'
import { Helmet } from 'react-helmet'


export default function AdminTickets () {
  return (
    <>
        <Helmet>
      <title>مدیریت پنل - لیست تیکت ها</title>
    </Helmet>
      <div class='tickets p-5 w-100 d-flex justify-content-center align-items-center flex-column'>
        <h5 class='light-Gray-text'>لیست تیکت ها</h5>
        <hr class='w-75 mb-5' />
        <table class='ticketsList w-100 d-flex flex-column box-bg pt-4 p-3'>
          <tr class='ticket d-flex  align-items-center justify-content-around'>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              شماره
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              نام کاربری
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              محتوای تیکت
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              درجه
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                مشاهده
              </button>
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                پاسخ
              </button>
            </td>
          </tr>
          <tr class='ticket d-flex align-items-center justify-content-around'>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              1
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              hosieni21
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              درخواست فیلم
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              معمولی
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                مشاهده
              </button>
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                پاسخ
              </button>
            </td>
          </tr>
          <tr class='ticket d-flex align-items-center justify-content-around'>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              2
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              rezaee
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              گزارش خرابی
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              مهم
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                مشاهده
              </button>
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                پاسخ
              </button>
            </td>
          </tr>
          <tr class='ticket d-flex align-items-center justify-content-around'>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              3
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              mohammadi33
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              درخواست قسمت جدید
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              معمولی
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                مشاهده
              </button>
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                پاسخ
              </button>
            </td>
          </tr>
          <tr class='ticket d-flex align-items-center justify-content-around'>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              4
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              king0
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              درخواست فیلم
            </td>
            <td class='ticket-detail light-Gray-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
              معمولی
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                مشاهده
              </button>
            </td>
            <td class='BtnTd'>
              <button class='ticketbtn box-bg blue-text col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-center'>
                پاسخ
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}
