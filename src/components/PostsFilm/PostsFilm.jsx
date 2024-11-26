import React, { useState } from 'react'
// import icons
import { FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function PostsFilm ({id, title, isSerial, time , year , imdbScore  ,country  ,director,  stars,  genre  ,quality  ,Isdubbed,  summery , IsTopFilm , img  ,poster , url}) {
  return (
    <>
        <>
          <article class='post w-100 d-flex position-realative justify-content-between'>
            <div class='right-side-post d-inline-block'>
              <div class='headline w-100 d-flex justify-content-between align-items-center'>
                <h2 class='title d-inline-flex align-items-center'>
                  <Link class='d-inline-block' to={isSerial ? (`/series/${id}`) : (`/movies/${id}`)}>
                    دانلود {title}
                  </Link>
                </h2>
                <div class='left-info d-inline-flex align-items-center'>
                  <div
                    class='notification post-notification rounded-circle d-inline-flex align-items-center justify-content-center'
                    data-post='1444'
                  >
                    <i class='fa-solid fa-bell plus'></i>
                    <i class='fa-solid fa-bell check'></i>
                  </div>
                  <span class='age d-inline-flex text-nowrap'>TV-14</span>
                </div>
              </div>
              {/* <div class='post-notif d-flex w-100 align-items-center'>
            <i class='fa-solid fa-bell d-inline-block'></i>
            <p style='margin-top: 15px'>قسمت 6 فصل 8 اضافه شد</p>
          </div> */}
              <div class='post-excerpt d-block w-100'>
                <div class='excerpt d-inline'>
                  <div class='title d-inline-block'>
                    <i class='fa-solid fa-comment-dots'></i>
                    خلاصه داستان :
                  </div>
                  <p class='desc d-inline' data-id='FA'>
                    {summery}
                  </p>
                </div>
              </div>
              <ul class='post-info w-100 d-block'>
                <li class='d-flex align-items-center w-100'>
                  <span class='title d-inline-flex text-center overflow-hidden'>
                    <div class='iconic h-100 d-inline-flex align-items-center justify-content-center position-relative'>
                      <i class='fa-regular fa-clock'></i>
                    </div>
                    <samp class='info-badge d-inline-flex align-items-center justify-content-center text-center'>
                      زمان
                    </samp>
                  </span>
                  <i class='seprator'></i>
                  <div class='info d-inline-block overflow-hidden text-nowrap text-start'>
                    {time}
                  </div>
                </li>
                <li class='d-flex align-items-center w-100'>
                  <span class='title d-inline-flex text-center overflow-hidden'>
                    <div class='iconic h-100 d-inline-flex align-items-center justify-content-center position-relative'>
                      <i class='fa-solid fa-masks-theater'></i>
                    </div>
                    <samp class='info-badge d-inline-flex align-items-center justify-content-center text-center'>
                      ژانر
                    </samp>
                  </span>
                  <i class='seprator'></i>
                  <div class='info d-inline-block overflow-hidden text-nowrap text-start'>
                  {
                    genre.map(item => (
                      <a href='#' target='_blank' rel='category tag'>
                      {item}
                    </a>
                    ))
                  }
                    {/* <a href='#' target='_blank' rel='category tag'>
                      {mItem.genre[0]}
                    </a>
                    <a href='#' target='_blank' rel='category tag'>
                      {mItem.genre[1]}
                    </a> */}
                  </div>
                </li>
                <li class='d-flex align-items-center w-100'>
                  <span class='title d-inline-flex text-center overflow-hidden'>
                    <div class='iconic h-100 d-inline-flex align-items-center justify-content-center position-relative'>
                      <i class='fa-solid fa-crown'></i>
                    </div>
                    <samp class='info-badge d-inline-flex align-items-center justify-content-center text-center'>
                      کارگردان
                    </samp>
                  </span>
                  <i class='seprator'></i>
                  <div class='info d-inline-block overflow-hidden text-nowrap text-start'>
                    <a href='#' target='_blank' rel='category tag'>
                      {director}
                    </a>
                  </div>
                </li>
                <li class='d-flex align-items-center w-100'>
                  <span class='title d-inline-flex text-center overflow-hidden'>
                    <div class='iconic h-100 d-inline-flex align-items-center justify-content-center position-relative'>
                      <i class='fa-solid fa-user'></i>
                    </div>
                    <samp class='info-badge d-inline-flex align-items-center justify-content-center text-center'>
                      ستارگان
                    </samp>
                  </span>
                  <i class='seprator'></i>
                  <div class='info d-inline-block overflow-hidden text-nowrap text-start'>
                    <a href='#' target='_blank' rel='category tag'>
                      {stars[0]}
                    </a>
                    <a href='#' target='_blank' rel='category tag'>
                      {stars[2]}
                    </a>
                  </div>
                </li>
                <li class='d-flex align-items-center w-100'>
                  <span class='title d-inline-flex text-center overflow-hidden'>
                    <div class='iconic h-100 d-inline-flex align-items-center justify-content-center position-relative'>
                      <i class='fa-solid fa-globe'></i>
                    </div>
                    <samp class='info-badge d-inline-flex align-items-center justify-content-center text-center'>
                      محصول
                    </samp>
                  </span>
                  <i class='seprator'></i>
                  <div class='info d-inline-block overflow-hidden text-nowrap text-start'>
                    <a href='#' target='_blank' rel='category tag'>
                      {country}
                    </a>
                  </div>
                </li>
                <li class='d-flex align-items-center w-100'>
                  <span class='title d-inline-flex text-center overflow-hidden quality'>
                    <div class='iconic h-100 d-inline-flex align-items-center justify-content-center position-relative'>
                      <i class='fa-solid fa-tv'></i>
                    </div>
                    <samp class='info-badge d-inline-flex align-items-center justify-content-center text-center'>
                      کیفیت ها
                    </samp>
                  </span>
                  <i class='seprator'></i>
                  <div class='info d-inline-block overflow-hidden text-nowrap text-start'>
                  {
                    quality.map(item => (
                      <span class='quality-item'>{item}</span>
                    ))
                  }
                  </div>
                </li>
                <li class='d-flex align-items-center w-100'>
                  <span class='title d-inline-flex text-center overflow-hidden'>
                    <div class='iconicsvg h-100 d-inline-flex align-items-center justify-content-center position-relative'></div>
                    <samp class='info-badge d-inline-flex align-items-center justify-content-center text-center'>
                      سال
                    </samp>
                  </span>
                  <i class='seprator'></i>
                  <div class='info d-inline-block overflow-hidden text-nowrap text-start'>
                    {year}
                  </div>
                </li>
                <li class='d-flex align-items-center w-100'>
                  <div class='awards d-flex align-items-center'>
                    <p class='desc d-inline-block'>
                      95 بار برنده جایزه و 185 بار نامزد دریافت جایزه
                    </p>
                  </div>
                </li>
              </ul>
              <div class='bottom-post d-flex w-100'>
                <Link to={isSerial ? (`/series/${id}`) : (`/movies/${id}`)} class='more d-inline-flex align-items-center'>
                  ادامه
                  <span class='d-inline-flex align-items-center h-100'>
                    دانلود
                  </span>
                </Link>
                <ul class='badges d-inline-flex text-nowrap flex-wrap'>
                  <li class='badge microphone position-relative d-inline-flex justify-content-between align-items-center'>
                    {Isdubbed && (
                      <>
                        <span class='title'>دوبله فارسی</span>
                        <div class='icon h-100 position-relative text-center d-inline-flex align-items-center justify-content-center'>
                          <i class='fa-solid fa-microphone'></i>
                        </div>
                      </>
                    )}
                  </li>
                  <li class='badge top'>
                    <span class='title'>جزو 250 سریال برتر با رتبه</span>
                    <div class='icon h-100 position-relative text-center d-inline-flex align-items-center justify-content-center'>
                      {' '}
                      22
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class='left-side-post position-relative d-inline-flex align-items-center'>
              <div
                class='post-bg position-absolute start-0 top-0 w-100 bottom-0'
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <div class='content position-relative w-100 d-block'>
                <div class='imdb text-center'>
                  <span class='imdb-rate'>{imdbScore}</span>
                  <a
                    href='#'
                    class='imdb-btn position-relative d-inline-block'
                    target='_blank'
                    rel='noopener nofollow'
                  >
                    IMDb
                  </a>
                </div>
                <a href='#' class='thumb w-100 d-block'>
                  <div class='serie-bg'>
                    <div
                      class='bg first-bg'
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                    <div
                      class='bg second-bg'
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </div>
                  <div class='post-image w-100 d-block position-relative overflow-hidden'>
                    <img
                      width='207'
                      height='310'
                      src={img}
                      class='attachment-post_cover size-post_cover wp-post-image w-100 h-100 d-block'
                      alt=''
                      loading='lazy'
                      sizes='(max-width: 207px) 100vw, 207px'
                    />
                    <div class='img-cover position-absolute top-0 end-0 w-100 h-100 d-block overflow-hidden'>
                      <Link to={isSerial ? (`/series/${id}`) : (`/movies/${id}`)} class='playicon w-100 h-100 top-0 end-0 d-flex align-items-center justify-content-center position-absolute'>
                        <i class='fa-solid fa-play icon'></i>
                      </Link>
                      <div class='bottom-content w-100 position-absolute bottom-0 end-0 d-flex justify-content-between align-items-center'>
                        <div class='popular-rate d-flex'>
                          <i class='fa-solid fa-thumbs-up'></i>
                          <span>100%</span>
                        </div>
                        <div class='imdb-rate'>
                          <span>{imdbScore}</span>
                          <small>/10</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='watchlist-slid w-100 d-flex justify-content-center position-relative'>
                    <div
                      class='watchlist-btn d-inline-flex align-items-center justify-content-center'
                      data-post='1444'
                    >
                      <i class='fa-solid fa-bookmark light'></i>
                      <i class='fa-solid fa-bookmark solid'></i>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </article>
        </>
    </>
  )
}
