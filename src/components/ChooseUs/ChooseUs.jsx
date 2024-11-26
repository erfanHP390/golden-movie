import React from 'react'

export default function ChooseUs () {
  return (
    <>
      <div class='choose-us  d-flex p-5 pb-3'>
        {/* <!-- choose-us-right --> */}
        <div class='choose-us-right d-flex flex-column mb-5'>
          {/* <!-- choose-us-title --> */}
          <div class='mb-3 align-self-start'>
            <h5 class='blue-text'>چرا ما را انتخاب کنید ؟</h5>
            {/* <!--  --> */}
            <h2 class='white-text'>
              ما به رضایت {` `}
              <span class='blue-text'>{`   `}مشتریان</span>
              {` `}خود اهمیت می دهیم 
            </h2>
          </div>
          <p class='grey-text mb-5'>
            انواع مختلفی از معابر موجود است اما اکثریت آن ها را دارند با تزریق
            طنز واژگان تصادفی به شکلی دچار تغییر شده است که اینطور نیست نگاه حتی
            تمایل به تکرار از پیش تعریف شده کمی باورپذیر است.
          </p>
          {/* <!--streaming  --> */}
          <div class='streaming d-flex align-items-center justify-content-end gap-2 pb-5'>
            <div
              class='chooseIcon  justify-content-center align-items-center'
              style={{width: "18%", height: "auto"}}
            >
              <lord-icon
                src='https://cdn.lordicon.com/trkmlure.json'
                trigger='loop'
                delay='5000'
                stroke='light'
                colors='primary:#ffffff,secondary:#ffffff'
                class='chooseIconImg'
              ></lord-icon>
            </div>
            {/* <!--  --> */}
            <div class='streamingText'>
              <h4 class='white-text'>بهترین پلتفرم استریمینگ</h4>
              <p class='grey-text'>
                تنوع زیادی از معابر در دسترس اکثریت وجود دارد دچار تغییر شوخ
                طبعی تزریق شده اند.
              </p>
            </div>
          </div>
          {/* <!-- noneStopPlay--> */}
          <div class='noneStopPlay d-flex  align-items-center justify-content-end gap-2 pt-5'>
            <div
              class='chooseIcon  justify-content-center align-items-start'
              style={{width: "18%", height: "auto"}}
            >
              <lord-icon
                src='https://cdn.lordicon.com/sdrxeanh.json'
                trigger='loop'
                delay='5000'
                colors='primary:#ffffff,secondary:#ffffff'
                class='chooseIconImg'
              ></lord-icon>
            </div>
            {/* <!--  --> */}
            <div class='noneStopText'>
              <h4 class='white-text'>پخش جریانی بدون وقفه</h4>
              <p class='grey-text'>
                تنوع زیادی از معابر در دسترس اکثریت وجود دارد دچار تغییر شوخ
                طبعی تزریق شده اند.
              </p>
            </div>
          </div>
        </div>
        {/* <!--choose-us-left  --> */}
        <div class='choose-us-left col-lg-6 p-5'>
          <div class='choose-us-img d-flex p-3'>
            <img src='./images/01_3.jpg' alt='choose-us-img' />
          </div>
        </div>
      </div>
    </>
  )
}
