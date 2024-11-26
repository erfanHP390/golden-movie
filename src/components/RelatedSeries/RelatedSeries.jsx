import React from 'react'

import { movie } from '../../js/data'

export default function RelatedSeries () {
  return (
    <section class='rltd-posts'>
      <div class='headline'>
        <div class='title'>
          <i class='fa-light fa-face-smile-relaxed'></i>
          پیشنهاد میکنیم تماشا کنید
        </div>
        <div class='pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal'>
          <span
            class='swiper-pagination-bullet'
            tabindex='0'
            role='button'
            aria-label='Go to slide 1'
          ></span>
          <span
            class='swiper-pagination-bullet swiper-pagination-bullet-active'
            tabindex='0'
            role='button'
            aria-label='Go to slide 2'
            aria-current='true'
          ></span>
        </div>
      </div>
      <div class='main-slider'>
        <div class='swiper-container rltd-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden'>
          <div
            class='swiper-wrapper'
            id='swiper-wrapper-f676826d8196c814'
            aria-live='polite'
            style={{transform: "translate3d(93.5455px, 0px, 0px)",transitionDuration: "0ms"}}
          >
            {movie.map(item =>
              item.isSerial ? (
                <div
                  class='swiper-slide  swiper-slide-active'
                  style={{ width: '177.091px', marginLeft: '10px' }}
                  role='group'
                  aria-label='1 / 6'
                >
                  <a href='#' class='item' title={item.title} rel='bookmark'>
                    <figure>
                      <img
                        width='210'
                        height='310'
                        src={item.img}
                        class='attachment-post_cover size-post_cover wp-post-image'
                        alt=''
                        decoding='async'
                        loading='lazy'
                        sizes='(max-width: 210px) 100vw, 210px'
                      />
                    </figure>
                    <div class='title-box'>
                      <h2>{item.title}</h2>
                    </div>
                    <div class='cover-content'>
                      <div class='playicon'></div>
                      <div class='bottom-content'>
                        <div class='popular-rate'>
                          <i class='fa-light fa-thumbs-up'></i>
                          <span>67%</span>
                        </div>
                        <div class='imdb-rate'>
                          <span>{item.imdbScore}</span>
                          <small>/10</small>
                        </div>
                      </div>
                      <ul class='badges'>
                        {item.Isdubbed ? (
                          <li class='badge-item'>
                            <span class='title'>دوبله</span>
                          </li>
                        ) : null}
                        <li class='badge-item'>
                          <span class='title'>زیرنویس</span>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              ) : null
            )}
          </div>
          <span
            class='swiper-notification'
            aria-live='assertive'
            aria-atomic='true'
          ></span>
        </div>
      </div>
    </section>
  )
}
