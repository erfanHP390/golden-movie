import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn () {
  return (
    <>
      <div class='main-auth-panel'>
        <div class='right-side'>
          <div class='form-box'>
            <div class='switch-auth'>
              <Link
                to={`/sign-in`}
                class='btn active'
              >
                ورود
              </Link>
              <Link to={`/sign-up`} class='btn'>
                ثبت نام
              </Link>
            </div>
            <h1>ورود به پنل کاربری</h1>
            <form action='#' class='form' method='post' data-form='login'>
              <div class='alert'></div>
              <div class='input'>
                <i class='fa-solid fa-user'></i>
                <input
                  type='text'
                  name='username'
                  placeholder='نام کاربری یا ایمیل'
                />
              </div>
              <div class='input'>
                <i class='fa-solid fa-key'></i>
                <input type='password' name='password' placeholder='رمز عبور' />
              </div>
              <div class='operations'>
                <a
                  href='https://demo.novinwp.com/digimedia/forget-password'
                  class='forget'
                >
                  رمز عبور را فراموش کرده اید؟
                </a>
                <button type='submit'>ورود به حساب کاربری</button>
              </div>
              <div class='back-site'>
                <a href='/'>
                  <div class='icon'>
                    <i class='fa-solid fa-angle-right'></i>
                  </div>
                  <span>بازگشت به صفحه اصلی</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div class='left-side'>
          <img
            src='./images/PosterYM.jpg'
            alt='login'
          />
        </div>
      </div>
    </>
  )
}
