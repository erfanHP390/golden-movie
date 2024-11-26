import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import { CiPlay1 } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineSubtitles } from "react-icons/md";

import { movie } from '../../js/data';
import { Link } from 'react-router-dom';

export default function TopMovies() {


    const [movies , setMovies] = useState(movie)

  return (
    <section  class="top-movies-section top-slider-1 position-relative d-block w-100">
      
    <div  class="swiper-container top-movies-section-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden swiper-thumbs">
      <div  class="swiper-wrapper"  id="swiper-wrapper-c29d744304b243b0"  aria-live="polite"  style={{transitionDuration: "0ms"}}>
        {
            movie.map(item => (
                <div  class="swiper-slide"  style={{width: "1366px", opacity: "1",transform: "translate3d(0px, 0px, 0px)",transitionDuration: "0ms"}}  role="group"  aria-label="1 / 10">
                <div class="item">
                  <div class="full-item-bg"></div>
                  <div class="item-bg">
                    <div  class="bg"  style={{backgroundImage: `url(${item.poster})`}}></div>
                  </div>
                  <div class="main item-content">
                    <div class="content">
                      <span class="age">PG-13</span>
                      <h2 class="title">
                        <Link to={item.isSerial ? (`/series/${item.id}`) : (`/movies/${item.id}`)}  rel="bookmark"  title={item.title}  >{item.title}</Link>
                      </h2>
                      <div class="imdb-rate">
                        <a  href="#"  class="imdb-btn"  target="_blank"  rel="noopener nofollow"  >IMDb</a>
                        <span class="rate">{item.imdbScore}</span>
                      </div>
                    </div>
                    <div class="bottom-content">
                      <Link  to={item.isSerial ? (`/series/${item.id}`) : (`/movies/${item.id}`)}  class="play-btn">
                        <div class="icon">
                          <i class="fa-regular fa-circle-play"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
        }
      </div>
      <span  class="swiper-notification"  aria-live="assertive"  aria-atomic="true"></span>
    </div>
    <div class="main yc-relative">
      <div class="thumbs-top-movies-main">
        <div class="headline-title">
          <h3 class="main-title">برگزیده ها</h3>
          <div class="navigation">
            <span  class="next"  tabindex="0"  role="button"  aria-label="Next slide"  aria-controls="swiper-wrapper-5bac7dcae5a36c91"  ><i class="fa-solid fa-angle-right"></i></span>
            <span  class="prev"  tabindex="0"  role="button"  aria-label="Previous slide"  aria-controls="swiper-wrapper-5bac7dcae5a36c91"  ><i class="fa-solid fa-angle-left"></i></span>
          </div>
        </div>
        <div  class="swiper-container top-movies-thumbs-slider swiper-initialized swiper-horizontal swiper-pointer-events">
          <div  class="swiper-wrapper"  style={{transitionDuration: "0ms",transform: "translate3d(-1483.43px, 0px, 0px)"}} id="swiper-wrapper-5bac7dcae5a36c91"  aria-live="off">
            <div  class="swiper-slide swiper-slide-duplicate"  style={{width: "185.429px"}}  role="group"  aria-label="7 / 10"  data-swiper-slide-index="6">
              <a  href="#"  rel="bookmark"  title="Better Call Saul"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/MV5BMTMxOGM0NzItM2E0OS00YWYzLWEzNzUtODUzZTBjM2I4MTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX500-210x310.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>80%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.8</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Better Call Saul</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-duplicate"  style={{width: "185.429px"}}  role="group"  aria-label="8 / 10"  data-swiper-slide-index="7">
              <a  href="#" rel="bookmark"  title="The Boys"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="263"  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX500-210x263.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>100%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.7</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>The Boys</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-duplicate"  style={{width: "185.429px"}}  role="group"  aria-label="9 / 10"  data-swiper-slide-index="8">
              <a  href="#"  rel="bookmark"  title="Money Heist"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="206"  height="310"  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX500-206x310.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 206px) 100vw, 206px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>80%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.2</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Money Heist</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-duplicate"  style={{width: "185.429px"}}  role="group"  aria-label="10 / 10"  data-swiper-slide-index="9">
              <a href="#"  rel="bookmark"  title="Evil"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/MV5BY2RiM2FkNjEtNzZhMS00MmY4LWIyMjUtNWExMzIyNDQ2YjY4XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX500-210x310.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>91%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>7.7</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Evil</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide"  style={{width: "185.429px"}}  role="group"  aria-label="1 / 10"  data-swiper-slide-index="0">
              <a  href="#"  rel="bookmark"  title="Avengers: Endgame"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="./images/post-film/3.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>100%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.4</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>The Shawshank Redemption</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide"  style={{width: "185.429px"}}  role="group"  aria-label="2 / 10"  data-swiper-slide-index="1">
              <a  href="#"  rel="bookmark"  title="Spider-Man 2"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="288"  src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/the-godfather-poster.jpeg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>70%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>9.2</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>The Godfather</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide"  style={{width: "185.429px"}}  role="group"  aria-label="3 / 10"  data-swiper-slide-index="2">
              <a  href="#"  rel="bookmark"  title="Spider-Man 3"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="./images/post-film/2.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>84%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>9.0</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Schindler's List</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-prev"  style={{width: "185.429px"}}  role="group"  aria-label="4 / 10"  data-swiper-slide-index="3">
              <a  href="#"  rel="bookmark"  title="Forrest Gump"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaNwbILJZZrhqpXUECVrPf1m8h3mw8dQWwA&s"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>100%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.8</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Forrest Gump</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-active"  style={{width: "185.429px"}}  role="group"  aria-label="5 / 10"  data-swiper-slide-index="4">
              <a href="#"  rel="bookmark"  title="Fight Club"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="300"  src="https://media.posterlounge.com/img/products/770000/764906/764906_poster.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>88%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.8</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Fight Club</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-next"  style={{width: "185.429px"}}  role="group"  aria-label="6 / 10"  data-swiper-slide-index="5">
              <a  href="#"  rel="bookmark"  title="12 Angry Men"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://musicart.xboxlive.com/7/b7805100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>100%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>9</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>12 Angry Men</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide"  style={{width: "185.429px"}}  role="group"  aria-label="7 / 10"  data-swiper-slide-index="6">
              <a  href="#"  rel="bookmark"  title="Se7en"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnYEQx15eUJpQU1BnEsuhSJeTGX_2EBSFdQ&s"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>80%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.6</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Se7en</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide"  style={{width: "185.429px"}}  role="group"  aria-label="8 / 10"  data-swiper-slide-index="7">
              <a  href="#"  rel="bookmark"  title="Gladiator"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="263"  src="./images/post-film/1.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>100%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.5</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Gladiator</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide"  style={{width: "185.429px"}}  role="group"  aria-label="9 / 10"  data-swiper-slide-index="8">
              <a  href="#"  rel="bookmark"  title="The Silence of the Lambs"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="206"  height="310"  src="https://play-lh.googleusercontent.com/NN4OtSReaguunuEfZftynIypKWaDBwA-AqmWdl8JKO0UrE3izMM9qoKH3q2ToIsn7Zw"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 206px) 100vw, 206px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>80%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.6</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>The Silence of the Lambs</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide"  style={{width: "185.429px"}}  role="group"  aria-label="10 / 10"  data-swiper-slide-index="9">
              <a  href='#'  rel="bookmark"  title="The Irishman"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://www.uptvs.com/wp-contents/uploads/2020/01/The-Irishman-2019.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>91%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>7.8</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>The Irishman</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-duplicate"  style={{width: "185.429px"}}  role="group"  aria-label="1 / 10"  data-swiper-slide-index="0">
              <a  href="#"  rel="bookmark"  title="Avengers: Endgame"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX500-210x310.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>100%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>8.4</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Avengers: Endgame</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-duplicate"  style={{width: "185.429px"}}  role="group"  aria-label="2 / 10"  data-swiper-slide-index="1">
              <a  href="#"  rel="bookmark"  title="Spider-Man 2"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="288"  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500-210x288.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>70%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>7.4</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Spider-Man 2</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-duplicate"  style={{width: "185.429px"}}  role="group"  aria-label="3 / 10"  data-swiper-slide-index="2">
              <a  href="#"  rel="bookmark"  title="Spider-Man 3"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX500-210x310.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>84%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>6.2</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges position-absolute start-0 w-100">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Spider-Man 3</h2>
                </div>
              </a>
            </div>
            <div  class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"  style={{width: "185.429px"}}  role="group"  aria-label="4 / 10"  data-swiper-slide-index="3">
              <Link  to={movies.isSerial ? (`/series/${movies.id}`) : (`/movies/${movies.id}`)}  rel="bookmark"  title="Iron Man"  class="item">
                <div class="pic">
                  <figure>
                    <img  width="210"  height="310"  src="https://demo.novinwp.com/digimedia/wp-content/uploads/2022/06/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX500-210x310.jpg"  class="attachment-post_cover size-post_cover wp-post-image"  alt=""  decoding="async"  loading="lazy"  sizes="(max-width: 210px) 100vw, 210px"/>
                  </figure>
                  <div  class="cover-content position-absolute top-0 end-0 w-100 h-100">
                    <div  class="playicon w-100 h-100 position-absolute d-flex align-items-center justify-content-center top-0 end-0">
                    <CiPlay1  className='icon' />
                    </div>
                    <div  class="bottom-content position-absolute bottom-0 w-100 d-flex justify-content-between end-0 align-items-center">
                      <div class="popular-rate">
                        <i class="fa-solid fa-thumbs-up"></i>
                        <span>100%</span>
                      </div>
                      <div class="imdb-rate">
                        <span>7.9</span>
                        <small>/10</small>
                      </div>
                    </div>
                    <ul class="badges">
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <FaMicrophone  className='icon' />
                        <span class="title">دوبله</span>
                      </li>
                      <li  class="badge-item d-flex w-100 align-items-center">
                      <MdOutlineSubtitles className='icon' />
                        <span class="title">زیرنویس</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="title-box">
                  <h2>Iron Man</h2>
                </div>
              </Link>
            </div>
          </div>
          <span  class="swiper-notification"  aria-live="assertive"  aria-atomic="true"></span>
        </div>
      </div>
    </div>
  </section>
  )
}
