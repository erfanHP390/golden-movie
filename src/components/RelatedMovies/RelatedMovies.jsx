import React from 'react'

import { movie } from '../../js/data'

export default function RelatedMovies () {
  return (
    <div class='main-side-item related-movies'>
      <div class='main'>
        <div class='heading'>
          <i class='icon fa-light fa-face-smile-relaxed'></i>
          <h4 class='title'>پیشنهاد میکنیم تماشا کنید</h4>
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="180"
    height="65"
    viewBox="0 0 180 65"
  >
    <script></script>
    <path
      fill="#29B6F6"
      d="M-870 60.36H52.255c48.145 0 77.582-60 125.275-60h629.53c30.635 0 0 0 55.47 8.09l-10 2114.458H75.47C44.835 231 0 227.377 0 222.908V68.45"
    ></path>
  </svg>
        </div>
        <div class='pagination-related-movies swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal'>
          <span
            class='swiper-pagination-bullet swiper-pagination-bullet-active'
            tabindex='0'
            role='button'
            aria-label='Go to slide 1'
            aria-current='true'
          ></span>
        </div>
        <div class='swiper-container slider-box swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden'>
          <div
            class='swiper-wrapper'
            id='swiper-wrapper-a767295adeae5999'
            aria-live='off'
            style={{ transform: 'translate3d(0px, 0px, 0px)' }}
          >
            {
                movie.slice(1 , 12).map(item => (
                    item.isSerial ? (null) : (                    <div  class="swiper-slide swiper-slide-active"  style={{width: "208.429px"}} role="group"  aria-label="1 / 5">
                        <a  href="#"  class="item"  title="Oppenheimer"  rel="bookmark">
                          <figure>
                            <img  width="210"  height="310"  src={item.img}  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                          </figure>
                          <div class="title-box">
                            <h2>Oppenheimer</h2>
                          </div>
                          <div class="cover-content">
                            <div class="playicon">
                              {/* <svg class="icon">
                                <use xlink:href="#playb_icon"></use>
                              </svg> */}
                            </div>
                            <div class="bottom-content">
                              <div class="popular-rate">
                                <i class="fa-light fa-thumbs-up"></i>
                                <span>100%</span>
                              </div>
                              <div class="imdb-rate">
                                <span>{item.imdbScore}</span>
                                <small>/10</small>
                              </div>
                            </div>
                            <ul class="badges">
                              <li class="badge-item">
                                {/* <svg class="icon">
                                  <use xlink:href="#microphone_icon"></use>
                                </svg> */}
                                <span class="title">دوبله</span>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>)
                ))
            }
          </div>
          <span
            class='swiper-notification'
            aria-live='assertive'
            aria-atomic='true'
          ></span>
        </div>
      </div>
    </div>
  )
}
