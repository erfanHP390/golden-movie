import React from 'react'
import { Helmet } from 'react-helmet'


export default function AdminEditInfo () {
  return (
    <>
        <Helmet>
      <title>مدیریت پنل - ویریاش اطلاعات</title>
    </Helmet>
          <div
        class="infoForm w-100 d-flex justify-content-center align-items-center flex-column"
      >
        <h5 class="light-Gray-text">مشخصات فردی</h5>
        <hr class="w-75 mb-5" />
        <div class="userInfoForm  box-bg d-flex flex-column">         
        <div class="userNameBox  d-flex flex-column justify-content-center align-items-center pb-3 p-1 ">
          <div class="form__group field ReformInput ">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="username"
              id="username"
              required
            />
            <label for="username" class="form__label">نام کاربری</label>
          </div>
        </div>
        <div class="userEmailBox  d-flex flex-column justify-content-center align-items-center pb-3 p-1 ">
          <div class="form__group field ReformInput">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="userEmail"
              id="userEmail"
              required
            />
            <label for="userEmail" class="form__label">email </label>
          </div>
        </div>
        <div class="userPasswordBox  d-flex flex-column justify-content-center align-items-center pb-5 p-1 m-1">
          <div class="form__group field ReformInput  m-2">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="userPass"
              id="name"
              required
            />
            <label for="userPass" class="form__label">رمز فعلی</label>
          </div>
          <div class="form__group field ReformInput  m-2">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="userNewPass"
              id="name"
              required
            />
            <label for="userNewPass" class="form__label">رمز جدید را وارد کنید</label>
          </div>
          <div class="form__group field ReformInput  m-2">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="userNewPassRepeat"
              id="name"
              required
            />
            <label for="userNewPassRepeat" class="form__label">رمز جدید را تکرار کنید</label>
          </div>
        </div>
        </div>
        
      </div>
    </>
  )
}
