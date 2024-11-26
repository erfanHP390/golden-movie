import React from 'react'

import SingleFilmPicture from './SingleFilmPicture'

import { movie } from '../../js/data'

export default function SingleListFilm() {
  return (
    <div class="main-side-item single-lists">
    <h3 class="title">
      <i class="fa-solid fa-table"></i>
      <span>لیست های مرتبط کاربران</span>
      <i class="seprator"></i>
    </h3>
    <ul class="user-list-listed">
      <li class="list-item">
        <a
          href="#"
          target="_blank"
          class="thumbs"
        >
            {
                movie.slice(0 , 4).map(item => (
                    <SingleFilmPicture {...item} />
                ))
            }
        </a>
        <a  href="#"  class="title">
          <h2 class="list-title">فیلم هایی که دیدم</h2>
        </a>
        <div class="bottom-content">
          <span class="creator">
            <i class="fa-solid fa-user"></i>
            توسط: کاربر
          </span>
          <samp class="date">۱۴۰۳ / ۰۵ / ۰۸</samp>
        </div>
      </li>
    </ul>
  </div>
  )
}
