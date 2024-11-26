import React from 'react'

export default function AdSearch () {
  return (
    <section class='ad-search-section w-100 d-block'>
      <div class='main'>
        <form action='' class='desk-adv w-100 d-block position-relative'>
          <input type='hidden' name='ad-s' value='1' />
          <div class='mobile-headline w-100 justify-content-between align-items-center'>
            <span class='title d-inline-block'>جستجوی پیشرفته</span>
            <div class='close-icon d-inline-flex align-items-center justify-content-center'>
              <i class='fa-solid fa-xmark'></i>
            </div>
          </div>
          <div class='data w-100 d-flex align-items-center justify-content-between h-100'>
            <div class='input-box input-radio d-inline-flex justify-content-between'>
              <span
                class='radio_type d-inline-flex align-items-center active'
                data-value='all'
              >
                همه
              </span>
              <span
                class='radio_type d-inline-flex align-items-center'
                data-value='movies'
              >
                فیلم
              </span>
              <span
                class='radio_type d-inline-flex align-items-center'
                data-value='series'
              >
                سریال
              </span>
              <input type='hidden' value='all' name='type' />
            </div>
            <div class='input-box input-select d-inline-flex align-items-center justify-content-center'>
              <label for=''>ژانر</label>
              <select name='genr' class='nice' style={{ display: 'none' }}>
                <option value='0'>ژانر</option>
                <option value='all'>همه</option>
                <option value='اکشن'>اکشن</option>
                <option value='بیوگرافی'>بیوگرافی</option>
                <option value='تاریخی'>تاریخی</option>
                <option value='جنایی'>جنایی</option>
                <option value='درام'>درام</option>
                <option value='علمی تخیلی'>علمی تخیلی</option>
                <option value='فانتزی'>فانتزی</option>
                <option value='ماجراجویی'>ماجراجویی</option>
                <option value='هیجان انگیز'>هیجان انگیز</option>
              </select>
              <div class='nice-select nice' tabindex='0'>
                <span class='current' id='genr-btn'>
                  ژانر
                </span>
                <ul class='list' id='genr-list'>
                  <li data-value='all' class='option'>
                    همه
                  </li>
                  <li data-value='اکشن' class='option'>
                    اکشن
                  </li>
                  <li data-value='بیوگرافی' class='option'>
                    بیوگرافی
                  </li>
                  <li data-value='تاریخی' class='option'>
                    تاریخی
                  </li>
                  <li data-value='جنایی' class='option'>
                    جنایی
                  </li>
                  <li data-value='درام' class='option'>
                    درام
                  </li>
                  <li data-value='علمی تخیلی' class='option'>
                    علمی تخیلی
                  </li>
                  <li data-value='فانتزی' class='option'>
                    فانتزی
                  </li>
                  <li data-value='ماجراجویی' class='option'>
                    ماجراجویی
                  </li>
                  <li data-value='هیجان انگیز' class='option'>
                    هیجان انگیز
                  </li>
                </ul>
              </div>
            </div>
            <div class='input-box input-check d-inline-flex align-items-center justify-content-center'>
              <label for='hasdub'>دوبله فارسی</label>
              <input type='checkbox' name='hasdub' />
              <div class='checkbox'></div>
            </div>
            <div class='input-box input-check d-inline-flex align-items-center justify-content-center'>
              <label for='hassub'>زیرنویس فارسی</label>
              <input type='checkbox' name='hassub' />
              <div class='checkbox'></div>
            </div>
            <div class='input-box input-check d-inline-flex align-items-center justify-content-center'>
              <label for='hasplay'>پخش آنلاین</label>
              <input type='checkbox' name='hasplay' />
              <div class='checkbox'></div>
            </div>
            <div class='input-box input-more d-inline-flex align-items-center justify-content-center'>
              <button class='more-filter d-flex align-items-center'>
                <span class='title d-inline-block text-nowrap'>
                  فیلتر های بیشتر
                </span>
                {/* <i class="fa-solid fa-bars"></i> */}
              </button>
            </div>
            <button type='submit' class='submit-btn'>
              جستجو
            </button>
          </div>
          <div class='more-data '>
            <div class='input-box input-select'>
              <select name='countr' class='nice' style={{ display: 'none' }}>
                <option value='0'>کشور</option>
                <option value='all'>همه</option>
                <option value='آلمان'>آلمان</option>
                <option value='آمریکا'>آمریکا</option>
                <option value='اسپانیا'>اسپانیا</option>
                <option value='استرالیا'>استرالیا</option>
                <option value='انگلستان'>انگلستان</option>
                <option value='چين'>چين</option>
                <option value='فرانسه'>فرانسه</option>
                <option value='کانادا'>کانادا</option>
                <option value='کره جنوبی'>کره جنوبی</option>
                <option value='مالت'>مالت</option>
                <option value='مراکش'>مراکش</option>
                <option value='نیوزلند'>نیوزلند</option>
              </select>
              <div class='nice-select nice' tabindex='0'>
                <span class='current'>کشور</span>
                <ul class='list' style={{ right: 0 }}>
                  <li data-value='all' class='option'>
                    همه
                  </li>
                  <li data-value='آلمان' class='option'>
                    آلمان
                  </li>
                  <li data-value='آمریکا' class='option'>
                    آمریکا
                  </li>
                  <li data-value='اسپانیا' class='option'>
                    اسپانیا
                  </li>
                  <li data-value='استرالیا' class='option'>
                    استرالیا
                  </li>
                  <li data-value='انگلستان' class='option'>
                    انگلستان
                  </li>
                  <li data-value='چين' class='option'>
                    چين
                  </li>
                  <li data-value='فرانسه' class='option'>
                    فرانسه
                  </li>
                  <li data-value='کانادا' class='option'>
                    کانادا
                  </li>
                  <li data-value='کره جنوبی' class='option'>
                    کره جنوبی
                  </li>
                  <li data-value='مالت' class='option'>
                    مالت
                  </li>
                  <li data-value='مراکش' class='option'>
                    مراکش
                  </li>
                  <li data-value='نیوزلند' class='option'>
                    نیوزلند
                  </li>
                </ul>
              </div>
            </div>
            <div class='input-box input-select'>
              <select name='age' class='nice' style={{ display: 'none' }}>
                <option value='0'>رده سنی</option>
                <option value='all'>همه</option>
                <option value='R'>R</option>
                <option value='Not Rated'>Not Rated</option>
                <option value='PG-13'>PG-13</option>
                <option value='PG'>PG</option>
                <option value='TV-MA'>TV-MA</option>
                <option value='TV-14'>TV-14</option>
                <option value='TV-PG'>TV-PG</option>
                <option value='G'>G</option>
                <option value='Unrated'>Unrated</option>
                <option value='Passed'>Passed</option>
                <option value='Approved'>Approved</option>
                <option value='TV-G'>TV-G</option>
                <option value='TV-Y7'>TV-Y7</option>
                <option value='TV-Y'>TV-Y</option>
                <option value='TV-Y7-FV'>TV-Y7-FV</option>
                <option value='GP'>GP</option>
                <option value='NC-17'>NC-17</option>
                <option value='X'>X</option>
                <option value='M'>M</option>
                <option value='MA-17'>MA-17</option>
                <option value='T'>T</option>
                <option value='TV-13'>TV-13</option>
                <option value='AO'>AO</option>
              </select>
              <div class='nice-select nice' tabindex='0'>
                <span class='current'>رده سنی</span>
                <ul class='list'>
                  <li data-value='all' class='option'>
                    همه
                  </li>
                  <li data-value='R' class='option'>
                    R
                  </li>
                  <li data-value='Not Rated' class='option'>
                    Not Rated
                  </li>
                  <li data-value='PG-13' class='option'>
                    PG-13
                  </li>
                  <li data-value='PG' class='option'>
                    PG
                  </li>
                  <li data-value='TV-MA' class='option'>
                    TV-MA
                  </li>
                  <li data-value='TV-14' class='option'>
                    TV-14
                  </li>
                  <li data-value='TV-PG' class='option'>
                    TV-PG
                  </li>
                  <li data-value='G' class='option'>
                    G
                  </li>
                  <li data-value='Unrated' class='option'>
                    Unrated
                  </li>
                  <li data-value='Passed' class='option'>
                    Passed
                  </li>
                  <li data-value='Approved' class='option'>
                    Approved
                  </li>
                  <li data-value='TV-G' class='option'>
                    TV-G
                  </li>
                  <li data-value='TV-Y7' class='option'>
                    TV-Y7
                  </li>
                  <li data-value='TV-Y' class='option'>
                    TV-Y
                  </li>
                  <li data-value='TV-Y7-FV' class='option'>
                    TV-Y7-FV
                  </li>
                  <li data-value='GP' class='option'>
                    GP
                  </li>
                  <li data-value='NC-17' class='option'>
                    NC-17
                  </li>
                  <li data-value='X' class='option'>
                    X
                  </li>
                  <li data-value='M' class='option'>
                    M
                  </li>
                  <li data-value='MA-17' class='option'>
                    MA-17
                  </li>
                  <li data-value='T' class='option'>
                    T
                  </li>
                  <li data-value='TV-13' class='option'>
                    TV-13
                  </li>
                  <li data-value='AO' class='option'>
                    AO
                  </li>
                </ul>
              </div>
            </div>
            <div class='input-box duble-input'>
              <input type='text' placeholder='سال' />
              <span>تا</span>
              <input type='text' placeholder='سال' />
            </div>
            <div class='input-box duble-input'>
              <input type='text' placeholder='امتیاز IMDb' />
              <span>تا</span>
              <input type='text' placeholder='امتیاز IMDb' />
            </div>
          </div>
          <button type='submit' class='mobile-submit-btn'>
            جستجو
          </button>
        </form>
        <button class='mobile-adv-search-btn w-100 justify-content-between position-relative align-items-center'>
          <div class='icon d-inline-flex align-items-center justify-content-center'>
            <i class='fa-solid fa-angle-down'></i>
          </div>
          <span class='title'>جستجوی پیشرفته</span>
          <div class='icon filter'>
            <i class='fa-solid fa-filter'></i>
          </div>
        </button>
      </div>
    </section>
  )
}
