import React from 'react'


// import icons
import { CiPlay1 } from "react-icons/ci";
import { Link } from 'react-router-dom';

export default function SideBarBestMoviesItem ({id , isSerial , title , time , year , imdbScore  ,country  ,director,  stars,  genre  ,quality  ,Isdubbed,  summery , IsTopFilm , img  ,poster , url}) {
  return (
    <>
        <li
          class='top-item w-100 d-flex justify-content-between align-items-center'
        >
          <Link to={isSerial ? (`/series/${id}`) : (`/movies/${id}`)} class='thumb d-inline-block overflow-hidden'>
            <img
              width='210'
              height='310'
              src={img}
              class='attachment-post_cover size-post_cover wp-post-image w-100 h-100 d-block'
              alt=''
              decoding='async'
              loading='lazy'
              sizes='(max-width: 210px) 100vw, 210px'
            />
          </Link>
          <div class='content d-inline-block overflow-hidden text-nowrap'>
            <Link
              class='title d-inline-block'
              to={isSerial ? (`/series/${id}`) : (`/movies/${id}`)}
              rel='bookmark'
              title={title}
            >
              {title}
            </Link>
            <div class='post-genres d-flex overflow-hidden w-100 text-nowrap'>
              {genre.map(genre => (
                <>
                  <a href='#' rel='tag'>
                    {genre}
                  </a>
                </>
              ))}
            </div>
          </div>
          <Link
            class='showmore overflow-hidden d-inline-flex align-items-center justify-content-center'
            to={isSerial ? (`/series/${id}`) : (`/movies/${id}`)}
          >
            <CiPlay1  className="icon" />
          </Link>
        </li>
    </>
  )
}
