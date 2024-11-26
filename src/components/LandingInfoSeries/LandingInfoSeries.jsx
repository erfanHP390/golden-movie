import React, { useEffect, useState } from 'react'
import { movie } from '../../js/data'

export default function LandingInfoSeries ({ id }) {
  const [smovie, setSMovie] = useState(null)

  useEffect(() => {
    const foundMovie = movie.find(m => m.id === parseInt(id))
    setSMovie(foundMovie)
  }, [id])

  if (!smovie) {
    return <div>در حال بارگذاری...</div>
  }

  return (
    <section class='single-header'>
      <div class='head-hero'>
        <div class='main-head-cover'>
          <div
            class='head-cover'
            style={{ backgroundImage: `url(${smovie.poster})` }}
          ></div>
        </div>
        <div class='top-info'>
          <figure class='thumb'>
            <div class='post-image'>
              <img
                width='210'
                height='310'
                src={smovie.img}
                class='attachment-post_cover size-post_cover wp-post-image'
                alt=''
                decoding='async'
                fetchpriority='high'
                sizes='(max-width: 210px) 100vw, 210px'
              />
              <a href='#' target='_blank' class='trailer-link'>
                <div class='content'>
                  <div class='play-icon'>
                    <i class='fa-solid fa-play'></i>
                  </div>
                  <span class='text'>مشاهده تریلر</span>
                </div>
              </a>
            </div>
          </figure>
          <div class='content-hero'>
            <div class='top-data'>
              <h1 class='title'>دانلود سریال {smovie.title}</h1>
              <div class='imdb-scores'>
                <div class='item imdb '>
                  <span class='icon'>
                    <a
                      href='https://www.imdb.com/title/tt15398776/'
                      class='imdb-btn'
                      target='_blank'
                      rel='noopener nofollow'
                    >
                      IMDb
                    </a>
                  </span>
                  <div class='cntnt'>
                    <div class='hd-title'>
                      <span class='imdb-sc'>{smovie.imdbScore}</span>/10
                    </div>
                    <small class='desc'>774,603</small>{' '}
                  </div>
                </div>
                <div class='item metacritic'>
                  <span class='icon'>90</span>
                  <div class='cntnt'>
                    <div class='hd-title'>امتیاز منتقدین</div>
                  </div>
                </div>
              </div>
              <div class='post-releases'>
                <div class='item'>
                  <span class='tit'>
                    <i class='fa-solid fa-calendar-day'></i>
                    سال تولید:
                  </span>
                  <div class='desc'>
                    <a href='#' rel='tag'>
                      {smovie.year}
                    </a>
                  </div>
                </div>
                <div class='item'>
                  <span class='tit'>
                    <i class='fa-solid  fa-globe'></i>
                    محصول:
                  </span>
                  <div class='desc'>
                    <a href='#' rel='tag'>
                      {smovie.country}
                    </a>
                  </div>
                </div>
                <div class='item'>
                  <span class='tit'>
                    <i class='fa-solid fa-folder-open'></i>
                    ژانر:
                  </span>
                  <div class='desc'>
                    {smovie.genre.map(item => (
                      <a
                        href='https://demo.novinwp.com/digimedia/genre/%d8%af%d8%b1%d8%a7%d9%85/'
                        rel='category tag'
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {smovie.isDubbed && (
                <div class='post-metadatas'>
                  <span class='item dub'>
                    <i class='fa-solid fa-microphone'></i>
                    همراه با نسخه دوبله فارسی
                  </span>
                </div>
              )}
            </div>
            <div class='post-btns'>
              <div class='top'>
                <a
                  href='https://demo.novinwp.com/digimedia/play/1108'
                  target='_blank'
                  class='onlineplay-btn'
                >
                  <i class='fa-solid fa-play'></i>
                  پخش آنلاین
                </a>
                <div class='post-notification ' data-post='1108'>
                  <i class='fa-solid fa-bell plus'></i>
                  <span class='data'>
                    <div class='status'>
                      <span class='activate'>فعال</span>
                      <span class='deactivate'>غیرفعال</span>
                    </div>{' '}
                    کردن اعلان فیلم{' '}
                  </span>
                </div>
              </div>
              <div class='bottom'>
                <div class='post-rating' data-post='1108'>
                  <span class='bt like' data-type='like'>
                    <div class='bt-icon'>
                      <i class='fa-solid fa-thumbs-up'></i>
                    </div>
                    <span class='bt-title'>1</span>
                  </span>
                  <span class='bt dislike' data-type='dislike'>
                    <span class='bt-title'>0</span>
                    <div class='bt-icon'>
                      <i class='fa-solid fa-thumbs-up'></i>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class='post-excerpt'>
          {smovie.summery}
        </p>
      </div>

      <div class='header-body'>
        <ul class='meta-info'>
          <li class='meta-item duration'>
            <strong>
              <i class='fa-solid fa-clock'></i>
              زمان
            </strong>
            {smovie.time}
          </li>
          <li class='meta-item age'>
            <strong>
              <i class='fa-solid fa-user-plus'></i>
              {'  '}رده سنی
            </strong>
            R{' '}
          </li>
          <li class='meta-item country'>
            <strong>
              <i class='fa-solid fa-globe'></i>
              {'  '}محصول
            </strong>
            <a href='#' rel='tag'>
              {smovie.country}
            </a>
          </li>
          <li class='meta-item release'>
            <strong>
              <i class='fa-solid fa-calendar-day'></i> سال تولید
            </strong>
            <a href='#' rel='tag'>
              {smovie.year}
            </a>
          </li>
          <li class='meta-item language'>
            <strong>
              <i class='fa-solid fa-calendar-day'></i>
              {'  '}زبان
            </strong>
            <a href='#' rel='tag'>
              English
            </a>
          </li>
        </ul>

        <div class='post-content'></div>

        <div class='bottom-post'>
          <ul class='b-info'>
            <li class='item'>
              <i class='fa-solid fa-comments'></i>0 دیدگاه
            </li>
            <li class='item'>
              <i class='fa-solid fa-eye'></i>
              139 بازدید{' '}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
