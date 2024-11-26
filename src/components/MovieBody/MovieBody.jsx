import React, { useEffect, useState } from 'react'

import { movie } from '../../js/data'
import { Link } from 'react-router-dom'

import MovieBodyItemBox from '../MovieBodyItemBox/MovieBodyItemBox'

export default function MovieBody ({ id }) {
  const [smovie, setSMovie] = useState(null)

  useEffect(() => {
    const foundMovie = movie.find(m => m.id === parseInt(id))
    setSMovie(foundMovie)
  }, [id])

  return (
    <>
      {!smovie ? (
        <>
          <div>در حال براگزری</div>
        </>
      ) : (
        <>
          <ul class='main-side-item main-post-metas'>
            <li class='item'>
              <span class='title'>
                <i class='fa-light fa-closed-captioning'></i> زیرنویس :
              </span>
              <div class='item-info'>ندارد</div>
            </li>
            <li class='item'>
              <span class='title'>
                <i class='fa-light fa-microphone'></i> دوبله :
              </span>
              <div class='item-info'>{smovie.isDubbed ? 'دارد' : 'ندارد'}</div>
            </li>
            <li class='item'>
              <span class='title'>
                <i class='fa-light fa-alarm-clock'></i> زمان :
              </span>
              <div class='item-info'>{smovie.time} دقیقه</div>
            </li>
            <li class='item country'>
              <span class='title'>
                <i class='fa-light fa-globe'></i> محصول :
              </span>
              <div class='item-info'>
                <a href='#' rel='tag'>
                  {smovie.country}
                </a>
              </div>
            </li>
            <li class='item'>
              <span class='title'>
                <i class='fa-light fa-user-plus'></i> رده سنی :
              </span>
              <div class='item-info'>R</div>
            </li>
            <li class='item'>
              <span class='title'>
                <i class='fa-light fa-calendar-day'></i> سال تولید :
              </span>
              <div class='item-info'>
                <a href='' rel='tag'>
                  {smovie.year}
                </a>
              </div>
            </li>
          </ul>
          <div class='main-side-item main-post-excerpt'>
            <p>{smovie.summery}</p>
          </div>
          <div class='main-side-item main-post-info'>
            <MovieBodyItemBox
              title={`بازیگران`}
              icon={<i class='icon fa-solid fa-users'></i>}
              style={`item-box`}
            >
              <div class='main-list-slider act-sld'>
                <div class='s-nav'>
                  <span
                    class='next swiper-button-disabled'
                    tabindex='-1'
                    role='button'
                    aria-label='Next slide'
                    aria-controls='swiper-wrapper-4070ea989c771437'
                    aria-disabled='true'
                  >
                    <i class='fa-solid fa-arrow-left'></i>
                  </span>
                  <span
                    class='prev swiper-button-disabled'
                    tabindex='-1'
                    role='button'
                    aria-label='Previous slide'
                    aria-controls='swiper-wrapper-4070ea989c771437'
                    aria-disabled='true'
                  >
                    <i class='fa-solid fa-arrow-right'></i>
                  </span>
                </div>
                <div class='swiper-container acts-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden'>
                  <div
                    class='swiper-wrapper'
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                    id='swiper-wrapper-4070ea989c771437'
                    aria-live='polite'
                  >
                    {smovie.stars.map(item => (
                      <div
                        class='swiper-slide swiper-slide-active'
                        style={{ width: '123.667px', marginLeft: '10px' }}
                        role='group'
                        aria-label='1 / 3'
                      >
                        <a href='#' rel='tag' target='_blank' class='item'>
                          <figure class='pic'>
                            <img
                              src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png'
                              alt={item}
                            />
                          </figure>
                          <div class='list-content'>
                            <h2 class='name'>{item}</h2>
                            <span class='desc'>ستاره</span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                  <span
                    class='swiper-notification'
                    aria-live='assertive'
                    aria-atomic='true'
                  ></span>
                </div>
              </div>
            </MovieBodyItemBox>
            <MovieBodyItemBox
              title={`کارگردان`}
              icon={<i class='icon fa-solid fa-user'></i>}
              style={`item-box`}
            >
              <div class='main-list-slider dirct-sld'>
                <div class='s-nav'>
                  <span
                    class='next swiper-button-disabled'
                    tabindex='-1'
                    role='button'
                    aria-label='Next slide'
                    aria-controls='swiper-wrapper-4070ea989c771437'
                    aria-disabled='true'
                  >
                    <i class='fa-solid fa-arrow-left'></i>
                  </span>
                  <span
                    class='prev swiper-button-disabled'
                    tabindex='-1'
                    role='button'
                    aria-label='Previous slide'
                    aria-controls='swiper-wrapper-4070ea989c771437'
                    aria-disabled='true'
                  >
                    <i class='fa-solid fa-arrow-right'></i>
                  </span>
                </div>
                <div class='swiper-container acts-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden'>
                  <div
                    class='swiper-wrapper'
                    style={{ transform: 'translate3d(0px, 0px, 0px)' }}
                    id='swiper-wrapper-4070ea989c771437'
                    aria-live='polite'
                  >
                    <div
                      class='swiper-slide swiper-slide-active'
                      style={{ width: '123.667px', marginLeft: '10px' }}
                      role='group'
                      aria-label='1 / 3'
                    >
                      <a href='#' rel='tag' target='_blank' class='item'>
                        <figure class='pic'>
                          <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png'
                            alt={smovie.director}
                          />
                        </figure>
                        <div class='list-content'>
                          <h2 class='name'>{smovie.director}</h2>
                          <span class='desc'>کارگردان</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span
                    class='swiper-notification'
                    aria-live='assertive'
                    aria-atomic='true'
                  ></span>
                </div>
              </div>
            </MovieBodyItemBox>
            <MovieBodyItemBox
              title={`امتیازات`}
              icon={<i class='icon fa-solid fa-trophy'></i>}
              style={`item-box awards`}
            >
              <ul class='list'>
                {smovie.isTopFilm ? (<>
                  <li class="list-item">
                    <div class="info-item awards">
                      <h5 class="title">جوایز</h5>
                      <div class="content">
                        120 بار برنده جایزه و 245 بار نامزد دریافت جایزه
                      </div>
                    </div>
                  </li>
                  <li class="list-item">
                    <div class="info-item imdb-rate">
                      <h5 class="title">رتبه</h5>
                      <div class="content">
                        <span class="desc">جزو 250 فیلم برتر با رتبه</span>
                        <span class="imdb-rate-id">83</span>
                      </div>
                    </div>
                  </li>
                </>) : (<>
                  <li class="list-item">
                    <div class="info-item imdb-rate">
                      <span class="title">تا بحال جایزه ای دریافت نکرده است</span>
                    </div>
                  </li>
                </>)}
              </ul>
            </MovieBodyItemBox>
          </div>
        </>
      )}
    </>
  )
}
