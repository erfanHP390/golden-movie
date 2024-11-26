import React from 'react'
import { Helmet } from 'react-helmet'

export default function AdminAddFilm() {
  return (
    <>
        <Helmet>
    <title>مدیریت سایت - افزودن فیلم </title>
  </Helmet>
    <div class="dashboardPage w-100 h-100 gray-bg p-5 pt-3">
    <div class="box-bg p-2">     
        <div
          class="addFormRow1 mb-3 p-4 d-flex flex-row-reverse w-100  align-items-center flex-wrap custom-box-shadow "
        >
          <div class="form__group field addFormElem">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">نام فیلم</label>
          </div>
          <div class="form__group field  addFormElem">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">مدت فیلم به دقیقه</label>
          </div>
          <div class="form__group field  addFormElem">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">سال ساخت</label>
          </div>
          <div class="form__group field  addFormElem">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">محصول کشور </label>
          </div>
          <div class="form__group field  addFormElem">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">کارگردان</label>
          </div>
          <div class="form__group field  addFormElem">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">imdb امتیاز </label>
          </div>
          <div class="addFormUrl form__group field ">
            <input
              type="input"
              class="form__field"
              placeholder="MovieURL"
              name="MovieURL"
              id="MovieURL"
              required
            />
            <label for="MovieURL" class="form__label">URL</label>
          </div>
          <div class="actorsForm actor1 d-flex align-items-center justify-content-around">
          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="actor1"
              name="actor1"
              id="actor1"
              required
            />
            <label for="actor1" class="form__label">بازیگر نقش اول</label>
          </div>
          <div class="form__group field  ">
            <input
              type="file"
              class="form__field"
              placeholder="actor1-img"
              name="actor1-img"
              id="actor1-img"
              required
            />
            <label for="actor1-img" class="form__label">بازیگر اول</label>
          </div>
          </div>
          <div class="actorsForm actor2 d-flex align-items-center justify-content-around">
            <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="actor2"
              name="actor2"
              id="actor2"
              required
            />
            <label for="actor2" class="form__label">بازیگر نقش مکمل</label>
          </div>
          <div class="form__group field  ">
            <input
              type="file"
              class="form__field"
              placeholder="actor2-img"
              name="actor2-img"
              id="actor-img"
              required
            />
            <label for="actor2-img" class="form__label">بازیگر مکمل</label>
          </div>
          </div>          
           <div class="actorsForm actor3 d-flex align-items-center justify-content-around">
            <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="actor3"
              name="actor3"
              id="actor3"
              required
            />
            <label for="actor3" class="form__label">بازیگر نقش مکمل</label>
          </div>
          <div class="form__group field  ">
            <input
              type="file"
              class="form__field"
              placeholder="actor2-img"
              name="actor3-img"
              id="actor-img"
              required
            />
            <label for="actor3-img" class="form__label">بازیگر مکمل</label>
          </div>
           </div>
        </div>
        <div
          class="mb-3 p-4 d-flex flex-row-reverse w-100 justify-content-start align-items-center flex-wrap custom-box-shadow "
        >
          <div
            class="ChooseGenre d-flex flex-column justify-content-around w-100 mt-3"
          >
            <h5 class="light-Gray-text align-self-center">
              ژانر را انتخاب کنید
            </h5>
            <div
              dir="rtl"
              class="genres p-4 d-flex flex-row flex-wrap row-cols-5 justify-content-around align-items-center"
            >
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">درام</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">اکشن</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">کمدی</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">ماجراجویی</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">اجتماعی</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">هیجان‌انگیز</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">علمی-تخیلی</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">عاشقانه</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">وحشت</div>
              </label>
              <label class="mcui-checkbox">
                <input type="checkbox" />
                <div>
                  <svg
                    class="mcui-check"
                    viewBox="-2 -2 35 35"
                    aria-hidden="true"
                  >
                    <title>checkmark-circle</title>
                    <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
                  </svg>
                </div>
                <div class="light-Gray-text">خانوادگی</div>
              </label>
            </div>
          </div>
        </div>        
        <div
          class="mb-3 p-4 d-flex flex-row-reverse w-100 justify-content-around align-items-center flex-wrap custom-box-shadow "
        >
          <div class="FormRadioElem d-flex ">
            <h5 class="light-Gray-text align-self-center">
                 آیا جزء 250 فیلم برتراست؟
            </h5>
            <div class="form-check m-2">
              <input
                type="radio"
                class="form-check-input"
                id="topImdbTrue"
                name="topImdb"
              />
              <label class="form-check-label light-Gray-text" for="true"
                >بله</label>
            </div>
            <div class="form-check m-2">
              <input
                type="radio"
                class="form-check-input"
                id="topImdbFalse"
                name="topImdb"
              />
              <label class="form-check-label light-Gray-text" for="false"
                >خیر</label>
            </div>
          </div>
          <div class=" FormRadioElem d-flex ">
            <h5 class="light-Gray-text align-self-center">
              زبان فیلم کدام است؟
            </h5>
            <div class="form-check m-2">
              <input
                type="radio"
                class="form-check-input"
                id="orginalLan"
                name="dubbed"
              />
              <label class="form-check-label light-Gray-text" for="true"
                >غیر فارسی</label>
            </div>
            <div class="form-check m-2">
              <input
                type="radio"
                class="form-check-input"
                id="PersianLan"
                name="dubbed"
              />
              <label class="form-check-label light-Gray-text" for="false"
                >فارسی</label >
            </div>
          </div>

        </div>
       <div
        class="mb-3 p-4 d-flex flex-column w-100 justify-content-around align-items-center flex-wrap custom-box-shadow "
      >
        <h4 class="light-Gray-text">:خلاصه فیلم </h4>
        <textarea name="MovieSummery" id="MovieSummery" class="MovieSummery"></textarea>
      </div>
        <div
        class=" mb-3 p-4 d-flex flex-row-reverse w-100 align-items-center flex-wrap custom-box-shadow "
      >
       <div class="form__group field w-100 ">
        <input
          type="file"
          class="form__field"
          placeholder="moviePoster"
          name="moviePoster"
          id="moviePoster"
          required
        />
        <label for="moviePoster" class="form__label">پوستر فیلم</label>
      </div>
       <div class="form__group field w-100 ">
         <input
         type="file"
         class="form__field"
         placeholder="movieBackGround"
         name="movieBackGround"
         id="movieBackGround"
         required
       />
       <label for="movieBackGround" class="form__label">پس زمنیه فیلم</label>
       </div>


      </div>
       <div class="movie-btn-container d-flex align-items-center justify-content-center m-5">
        <button class="qualitiesBtn p-2 m-2">
         بارگزاری کیفیت های مختلف
       </button> 
        <button class="qualitiesBtn m-2 p-2 ">
          پاک کردن فرم
       </button> 
       <button class="qualitiesBtn p-2 m-2">
         افزودن فیلم
       </button> 
       </div>
      
    </div>
  </div>
    </>
  )
}
