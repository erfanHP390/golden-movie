import React from 'react'

import FooterBox from './FooterBox/FooterBox'
import FooterBoxItem from './FooterBoxItem/FooterBoxItem'

export default function Footer () {
  return (
    <footer class='p-5 d-flex flex-column justify-content-start align-items-center'>
      {/* <!-- row1 --> */}
      <div class='footer-row1 d-flex justify-content-start justify-content-sm-around align-items-center flex-row'>
        <div class='footerlogo justify-content-center align-items-center align-self-start flex-column  p-4 pt-3'>
          <a href='#'>
            <img
              src='../images/Untitled-1 y.png'
              alt='footerlogo'
              class='footerlogo-img mb-2'
            />{' '}
          </a>
          <p class=' white-text'>
            گلدن موویز مرجع رسمی دانلود فیلم ها و سریال های خارجی{' '}
          </p>
        </div>
        {/* <!-- columns --> */}
        <FooterBox title={`فیلم ها`}>
          <FooterBoxItem title={`تمامی فیلم ها`} />
          <FooterBoxItem title={`جوایز اسکار`} />
          <FooterBoxItem title={`فیلم های دوبله فارسی`} />
          <FooterBoxItem title={`کالکشن ها`} />
          <FooterBoxItem title={`فیلم های برتر`} />
          <FooterBoxItem title={`جوایز اسکار`} />
        </FooterBox>
        <FooterBox title={`سریال ها`}>
          <FooterBoxItem title={`تمامی سریال ها`} />
          <FooterBoxItem title={`سریال های دوبله فارسی`} />
          <FooterBoxItem title={`سریال های برتر`} />
          <FooterBoxItem title={`سریال های دوبله فارسی`} />
        </FooterBox>
        {/* <!--  --> */}
        <FooterBox title={`ژانر ها`}>
          <FooterBoxItem title={`اکشن`} />
          <FooterBoxItem title={`ترسناک`} />
          <FooterBoxItem title={`جنایی`} />
          <FooterBoxItem title={`علمی تخیلی`} />
          <FooterBoxItem title={`درام`} />
          <FooterBoxItem title={`عاشقانه`} />
        </FooterBox>

        {/* <!--  --> */}
        {/* <!-- user email form --> */}
        <div class='footer-widget d-flex justify-content-start align-self-start pt-3 p-4 flex-column'>
          <h5 class='footerbox-title white-text'>
            خبرنامه
            <div class='footerBox-title-lines d-flex align-items-center justify-content-start'>
              <hr style={{ width: '20px', height: '5px' }} />
              <hr
                style={{ width: '5px', height: '5px', marginRight: ' 0.5rem' }}
              />
            </div>
          </h5>
          <p class='white-text'>
            برای دریافت آخرین به روز رسانی و اخبار، در خبرنامه ما مشترک شوید
          </p>
          <div class='form-join w-100'>
            <input
              type='email'
              name='userEmail'
              autocomplete='off'
              dir='ltr'
              required=''
            />
            <label for='text' class='label-name'>
              <span class='content-name white-text w-100'> نشانی ایمیل </span>
            </label>
          </div>
          <div class='d-flex justify-content-center align-items-center'>
            <button
              type='submit'
              class='footer-widget-btn mt-4 p-2 w-75 white-text redbtn'
            >
              عضویت
            </button>
          </div>
        </div>
      </div>
      {/* <!-- row2 --> */}
      <div class='footer-top-link d-flex justify-content-start align-items-center flex-wrap mt-4'>
        <a href='#'>IMDB برتر</a>
        <a href='#'>شبکه خانگی</a>
        <a href='#'>نمایش‌های تلویزیونی</a>
        <a href='#'>فانتزی</a>
        <a href='#'>انیمیشن</a>
        <a href='#'>موزیکال</a>
        <a href='#'>وحشتناک</a>
        <a href='#'>جنایی</a>
        <a href='#'>ورزشی</a>
        <a href='#'>درام</a>
        <a href='#'>بیوگرافی</a>
        <a href='#'>شو کمدی</a>
        <a href='#'>کمدی </a>
        <a href='#'>حادثه ای</a>
        <a href='#'>جنگی</a>
        <a href='#'>تاریخی</a>
        <a href='#'>علمی تخیلی</a>
        <a href='#'>وسترن</a>
      </div>
      {/* <!-- socialmediaLinks --> */}
      <div class='socialmediaLinks d-flex justify-content-md-end align-items-end justify-content-sm-center w-100 mt-3'>
        <a href='#' class='d-flex align-content-center p-1'>
          <lord-icon
            src='https://cdn.lordicon.com/iqagrlso.json'
            trigger='hover'
            stroke='light'
            state='hover-roll'
            colors='primary:#29b6f6,secondary:#29b6f6'
            style={{ width: '30px', height: '30px' }}
          ></lord-icon>
        </a>
        <a href='#' class='d-flex align-content-center p-1'>
          <lord-icon
            src='https://cdn.lordicon.com/lhscugaw.json'
            trigger='hover'
            stroke='light'
            state='hover-draw'
            colors='primary:#29b6f6,secondary:#29b6f6'
            style={{ width: '30px', height: '30px' }}
          ></lord-icon>
        </a>
        <a href='#' class='d-flex align-content-center p-1'>
          <lord-icon
            src='https://cdn.lordicon.com/gewhxiwb.json'
            trigger='hover'
            stroke='light'
            colors='primary:#29b6f6,secondary:#29b6f6'
            style={{ width: '30px', height: '30px' }}
          ></lord-icon>
        </a>
        <a href='#' class='d-flex align-content-center p-1'>
          <lord-icon
            src='https://cdn.lordicon.com/ewswvzmw.json'
            trigger='hover'
            stroke='light'
            state='hover-rotate'
            colors='primary:#29b6f6,secondary:#29b6f6'
            style={{ width: '30px', height: '30px' }}
          ></lord-icon>
        </a>
      </div>
    </footer>
  )
}
