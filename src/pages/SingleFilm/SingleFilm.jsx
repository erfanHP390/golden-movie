import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import LandingInfo from '../../components/LandingInfo/LandingInfo'
import MovieBody from '../../components/MovieBody/MovieBody'
import MovieBodyItemBox from '../../components/MovieBodyItemBox/MovieBodyItemBox'
import MainSideItemMovie from '../../components/MainSideItemMovie/MainSideItemMovie'
import DownloadBoxMovies from '../../components/DownloadBoxMovies/DownloadBoxMovies'
import DownloadBoxSeries from '../../components/DownloadBoxSeries/DownloadBoxSeries'
import SideBarBox from '../../components/SideBarBox/SideBarBox'
import SingleListFilm from '../../components/SingleListFilm/SingleListFilm'
import MovieTags from '../../components/MovieTags/MovieTags'
import RelatedMovies from '../../components/RelatedMovies/RelatedMovies'
import CommentBox from '../../components/CommentBox/CommentBox'
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav"
import ResponsiveSideBar from "../../components/ResponseSideBar/ResponseSideBar"
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn"
import ChooseUs from "../../components/ChooseUs/ChooseUs"
import Footer from "../../components/Footer/Footer"
import FreePlan from "../../components/FreePlan/FreePlan"



import { movie } from '../../js/data'

export default function SingleFilm () {
  let params = useParams()

  const [smovie, setSMovie] = useState(null)

  useEffect(() => {
    const foundMovie = movie.find(m => m.id === parseInt(params.movieID))
    setSMovie(foundMovie)
  }, [params.movieID])

  // console.log(params.movieID);

  return (
    <>
      <Header />
      <main class='main-site'>
        <div class='main-single'>
          <LandingInfo id={params.movieID} />
          <div class='trailer-link-box'>
            <div class='bg'></div>
            <video controls='' preload='none'>
              <source
                src='https://demo.novinwp.com/digimedia2/wp-content/uploads/2024/09/trailer.mp4'
                type='video/mp4'
              />
              عدم ساپورت توسط مرورگر شما، لطفا از گوگل کروم استفاده کنید.
            </video>
          </div>
          <section class='movies-body'>
            <div class='main'>
              <MovieBody id={params.movieID} />
            </div>
            <div class='main'>
              <MainSideItemMovie
                title={`باکس دانلود`}
                icon={
                  <i
                    class='fa-solid fa-download'
                    style={{
                      fontSize: '15px',
                      marginLeft: '5px',
                      color: '#29B6F6'
                    }}
                  ></i>
                }
                style={`main-side-item download-box movies`}
                desc={
                  <div class='desc'>
                    <i class='icon-nim fa-solid fa-star'></i>
                    دانلود شما بصورت
                    <span class='item'>تمام بها</span>
                    محاسبه میشود
                  </div>
                }
              >
                <DownloadBoxMovies id={params.movieID} />
              </MainSideItemMovie>
                <SingleListFilm />
                <MovieTags  id={params.movieID} />
            </div>
            <RelatedMovies />
            <div className="main">
              <CommentBox  />
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollTopBtn />
      <ResponsiveNav />
      <ResponsiveSideBar />
    </>
  )
}
