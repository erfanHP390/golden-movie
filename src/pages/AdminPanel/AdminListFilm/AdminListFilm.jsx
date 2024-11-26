import React from 'react'
import { Helmet } from 'react-helmet'


import { movie } from '../../../js/data'

export default function AdminListFilm () {
  return (
    <>
        <Helmet>
      <title>مدیریت پنل - لیست فیلم ها</title>
    </Helmet>
      <div class='dashboardPage w-100 h-100 gray-bg p-5 pt-3'>
        <div
          id='MoviesList'
          class='usersList box-bg p-5 d-flex align-items-center flex-column custom-box-shadow '
        >
          <h5 class='light-Gray-text mb-4'>مشخصات فیلم ها</h5>
          <hr class='w-75' />
          <div class='MoviesList' id='MoviesList'>
            {
                movie.map(item => (
          <div  class="movieElem mt-4 d-flex flex-md-row custom-box-shadow p-4 w-100  row-cols-3 " >
                    <div class="movieImg d-flex justify-content-center align-items-center ">
                        <img src={item.img} alt="moviePic"/>
                    </div>
                    <div class="MovieTitle m-4 d-flex  justify-content-center align-items-center">
                        <h3 class="light-Gray-text">{item.title}</h3>
                    </div>
                     <div class="MovieBtn d-flex flex-md-row justify-content-center align-items-center">
                        <button  id="deleteMovieBtn" class="userbtn blue-text p-2 pb-3 m-2  d-flex justify-content-center align-items-center"><span>حذف </span></button>
                        <button  class="userbtn blue-text p-2 pb-3  m-2 d-flex justify-content-center align-items-center"  ><span>ویرایش اطلاعات</span></button>
                     </div>
                    
    
                </div>
                ))
            }


          </div>
        </div>
      </div>
    </>
  )
}
