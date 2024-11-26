import React, { useEffect, useState } from 'react';




import PostsFilm from '../PostsFilm/PostsFilm'
import SideBarBox from '../SideBarBox/SideBarBox'
import SideBarSeriesListItem from '../SideBarSeriesListItem/SideBarSeriesListItem'
import SideBarGenreListItemM from '../SideBarGenreListItem/SideBarGenreListItemM'
import SideBarGenreListItemS from '../SideBarGenreListItem/SideBarGenreListItemS'
import SideBarBestMoviesItem from '../SideBarBestItem/SideBarBestMoviesItem'
import SideBarActionItem from '../SideBarActionItem/SideBarActionItem'
import TopMovies from '../TopMovies/TopMovies'
import AdSearch from '../AdSearch/AdSearch'

import { bestMovie, bestSerials, movie } from '../../js/data'
import { useParams } from 'react-router-dom'


export default function Main () {
  

  const [movies, setMovies] = useState(movie)
  const [currentPage , setCurrentPage] = useState(1)
  const [paginatedMovie , setPaginatedMovie] = useState([])

  let pageSize = 5;
  let pagesNumber;


  useEffect(() => {
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let showMovie = movies.slice(startIndex , endIndex)
    setPaginatedMovie(showMovie)
  } , [currentPage])

  const changePaginate = (newPage) => {
    setCurrentPage(newPage)
  }

  const pagesCount = Math.ceil(movies.length / pageSize)
  pagesNumber = Array.from(Array(pagesCount).keys())

  return (
    <>
      <main className='main-site'>
        <TopMovies />
        <AdSearch />
        <div className='main'>
          <div className='main-index d-flex justify-content-between'>
            <div className='right-side d-inline-block'>
              <section className='site-posts d-block w-100'>
                <div id='movies'>
                  {
                    paginatedMovie.map((item => (
                      <PostsFilm {...item} />
                    )))
                  }
                  {/* {movie.map(item => (
                    <PostsFilm {...item} />
                  ))} */}
                </div>
              </section>
              <section class="site-posts d-block w-100">
              <div class="pagination  w-100  d-flex  flex-wrap  justify-content-center  ">
                {
                  pagesNumber.map((pageNumber) => (
                    <a
                    style={{ cursor: "pointer" }}
                    className={
                      pageNumber + 1 === currentPage
                        ? "page-numbers current  d-inline-flex   align-items-center   justify-content-center active"
                        : "page-numbers current  d-inline-flex   align-items-center   justify-content-center"
                    }
                    key={pageNumber + 1}
                    onClick={() => changePaginate(pageNumber + 1)}
                  >
                    <span className="page-link">{pageNumber + 1}</span>
                  </a>
                  ))
                }
              </div>
            </section>
            </div>
            <aside class='mainSite-sidebar d-inline-block'>
              <SideBarBox
                title={`سریال های بروز شده`}
                iconColor={`icon red d-inline-flex align-items-center justify-content-center`}
                icon={<i class='fa-solid fa-pen-nib'></i>}
                hrefClass={`info`}
                href={
                  <a
                    href='https://demo.novinwp.com/digimedia/series/'
                    class='btn text-nowrap'
                  >
                    تمام سریال ها
                  </a>
                }
              >
                <ul class='series-list w-100 d-block'>
                  <SideBarSeriesListItem />
                </ul>
              </SideBarBox>
              <SideBarBox
                title={`انتخاب ژانر`}
                iconColor={`icon blue d-inline-flex align-items-center justify-content-center`}
                icon={<i class='fa-solid fa-masks-theater'></i>}
                hrefClass={`info switchable-btn d-inline-flex`}
                href={
                  <>
                    <span
                      class='sbtn d-inline-flex align-items-center justify-content-center position-relative text-nowrap active'
                      data-id='movies'
                    >
                      فیلم ها
                    </span>
                    <span
                      class='sbtn d-inline-flex align-items-center justify-content-center position-relative text-nowrap'
                      data-id='series'
                    >
                      سریال ها
                    </span>
                  </>
                }
              >
                <ul
                  class='genre-list w-100 flex-wrap justify-content-between top-0 end-0'
                  data-list='movies'
                >
                  <SideBarGenreListItemM />
                </ul>
                <ul
                  class='genre-list w-100 flex-wrap justify-content-between top-0 end-0'
                  data-list='series'
                  style={{ display: 'none' }}
                >
                  <SideBarGenreListItemS />
                </ul>
              </SideBarBox>
              <SideBarBox
                title={`250 فیلم برتر IMDb`}
                iconColor={`icon yellow imdb d-inline-flex align-items-center justify-content-center`}
                icon={<i class='imdb-icon'></i>}
                hrefClass={`info`}
                href={
                  <a href='#' class='btn text-nowrap'>
                    مشاهده همه
                  </a>
                }
              >
                <ul class='topmovies-list d-block w-100'>
                  {movie.map(
                    item =>
                      item.IsTopFilm && <SideBarBestMoviesItem {...item} />
                  )}
                </ul>
              </SideBarBox>
              <SideBarBox
                title={`250 سریال برتر IMDb`}
                iconColor={`icon yellow imdb d-inline-flex align-items-center justify-content-center`}
                icon={<i class='imdb-icon'></i>}
                hrefClass={`info`}
                href={
                  <a href='#' class='btn text-nowrap'>
                    مشاهده همه
                  </a>
                }
              >
                <ul class='topmovies-list d-block w-100'>
                  {bestSerials.map(movie => (
                    <>
                      <SideBarBestMoviesItem {...movie} />
                    </>
                  ))}
                </ul>
              </SideBarBox>
              <SideBarBox
                title={`درام ها`}
                iconColor={`icon orange d-inline-flex align-items-center justify-content-center`}
                icon={<i class='fa-regular fa-star'></i>}
                hrefClass={`info`}
                href={``}
              >
                <div class='post-slider one_half_slider'>
                  <div class='swiper-container sidebar-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden'>
                    <div
                      class='swiper-wrapper'
                      style={{
                        transitionDuration: '0ms',
                        transform: 'translate3d(1092px, 0px, 0px)'
                      }}
                      id='swiper-wrapper-a0cf471def17d42b'
                      aria-live='off'
                    >
                      {movie.map(item =>
                        item.genre.map(
                          genre =>
                            genre === 'درام' && <SideBarActionItem {...item} />
                        )
                      )}
                    </div>
                    <span
                      class='swiper-notification'
                      aria-live='assertive'
                      aria-atomic='true'
                    ></span>
                  </div>
                  <div class='slider-navigation w-100 h-100 d-flex position-absolute start-0 top-0 align-items-center justify-content-between'>
                    <span
                      class='prev position-relative d-inline-flex justify-content-center align-items-center'
                      tabindex='0'
                      role='button'
                      aria-label='Previous slide'
                      aria-controls='swiper-wrapper-a0cf471def17d42b'
                      ariaDisabled='false'
                    >
                      <i class='fa-solid fa-angle-right'></i>
                    </span>
                    <span
                      class='next position-relative d-inline-flex justify-content-center align-items-center'
                      tabindex='0'
                      role='button'
                      aria-label='Next slide'
                      aria-controls='swiper-wrapper-a0cf471def17d42b'
                      aria-disabled='false'
                    >
                      <i class='fa-solid fa-angle-left'></i>
                    </span>
                  </div>
                  <div class='slider-pagination'></div>
                </div>
              </SideBarBox>
              <SideBarBox
                title={`فیلم های جنایی`}
                iconColor={`icon orange d-inline-flex align-items-center justify-content-center`}
                icon={<i class='fa-regular fa-star'></i>}
                hrefClass={`info`}
                href={``}
              >
                <div class='post-slider three_in_line_slider'>
                  <div class='swiper-container sidebar-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl swiper-backface-hidden'>
                    <div
                      class='swiper-wrapper'
                      style={{
                        transform: 'translate3d(208px, 0px, 0px)',
                        transitionDuration: '0ms'
                      }}
                      id='swiper-wrapper-10613334ed51bf6810'
                      aria-live='off'
                    >
                      {movie.map(item =>
                        item.genre.map(
                          genre =>
                            genre === 'جنایی' && <SideBarActionItem {...item} />
                        )
                      )}
                    </div>
                    <span
                      class='swiper-notification'
                      aria-live='assertive'
                      aria-atomic='true'
                    ></span>
                  </div>
                  <div class='slider-navigation'>
                    <span class='prev'>
                      <i class='fa-light fa-angle-right'></i>
                    </span>
                    <span class='next'>
                      <i class='fa-light fa-angle-left'></i>
                    </span>
                  </div>
                  <div class='slider-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal d-flex w-100 justify-content-center'>
                    <span
                      class='swiper-pagination-bullet'
                      tabindex='0'
                      role='button'
                      aria-label='Go to slide 1'
                    ></span>
                    <span
                      class='swiper-pagination-bullet'
                      tabindex='0'
                      role='button'
                      aria-label='Go to slide 2'
                    ></span>
                    <span
                      class='swiper-pagination-bullet swiper-pagination-bullet-active'
                      tabindex='0'
                      role='button'
                      aria-label='Go to slide 3'
                      aria-current='true'
                    ></span>
                    <span
                      class='swiper-pagination-bullet'
                      tabindex='0'
                      role='button'
                      aria-label='Go to slide 4'
                    ></span>
                    <span
                      class='swiper-pagination-bullet'
                      tabindex='0'
                      role='button'
                      aria-label='Go to slide 5'
                    ></span>
                    <span
                      class='swiper-pagination-bullet'
                      tabindex='0'
                      role='button'
                      aria-label='Go to slide 6'
                    ></span>
                  </div>
                </div>
              </SideBarBox>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
