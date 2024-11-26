import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import LandingInfoSeries from '../../components/LandingInfoSeries/LandingInfoSeries'
import SideBarBox from '../../components/SideBarBox/SideBarBox'
import SideBarActionItem from '../../components/SideBarActionItem/SideBarActionItem'
import SideBarBestMoviesItem from '../../components/SideBarBestItem/SideBarBestMoviesItem'
import SideBarGenreListItemM from '../../components/SideBarGenreListItem/SideBarGenreListItemM'
import SideBarGenreListItemS from '../../components/SideBarGenreListItem/SideBarGenreListItemS'
import SideBarSeriesListItem from '../../components/SideBarSeriesListItem/SideBarSeriesListItem'
import DownloadBoxSeries from '../../components/DownloadBoxSeries/DownloadBoxSeries'
import CommentBox from '../../components/CommentBox/CommentBox'
import RelatedSeries from '../../components/RelatedSeries/RelatedSeries'
import ResponsiveNav from '../../components/ResponsiveNav/ResponsiveNav'
import ResponsiveSideBar from '../../components/ResponseSideBar/ResponseSideBar'
import Footer from '../../components/Footer/Footer'
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn"
import { Helmet } from 'react-helmet'


import { bestMovie, bestSerials, movie } from '../../js/data'

export default function SingleSeries () {
  let params = useParams()
  const [smovie, setSMovie] = useState(null)

  useEffect(() => {
    const foundMovie = movie.find(m => m.id === parseInt(params.movieID))
    setSMovie(foundMovie)
  }, [params.movieID])

  if (!smovie) {
    return <div>در حال بارگذاری...</div>
  }

  return (
    <>
        <Helmet>
      <title>{`سریال ${smovie && smovie.title}`}</title>
    </Helmet>
      <Header />
      <div className='main-site'>
        <div className='main-single'>
          <div className='main'>
            <section className='siteSingle-movie'>
              <div className='right-side'>
                <nav className='breadcrumbs'>
                  <i className='bread-icon fa-light fa-location-dot'></i>
                  <Link to={`/`}>خانه</Link>
                  <Link to={`/`}>سریال ها</Link>
                  {smovie ? (
                    <a href='#' rel='tag'>
                      {smovie.title}
                    </a>
                  ) : (
                    <div>در حال بارگذاری...</div>
                  )}
                </nav>
                {<LandingInfoSeries {...smovie} />}
                <DownloadBoxSeries id={params.movieID} />
                <RelatedSeries />
                <CommentBox />
              </div>
              <aside className='mainSite-sidebar'>
                <SideBarBox
                  title={`سریال های بروز شده`}
                  iconColor={`icon red d-inline-flex align-items-center justify-content-center`}
                  icon={<i class='fa-solid fa-pen-nib'></i>}
                  hrefClass={`info`}
                  href={
                    <a href='#' class='btn text-nowrap'>
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
                              genre === 'درام' && (
                                <SideBarActionItem {...item} />
                              )
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
                              genre === 'جنایی' && (
                                <SideBarActionItem {...item} />
                              )
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
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTopBtn />
      <ResponsiveNav />
      <ResponsiveSideBar />
    </>
  )
}
