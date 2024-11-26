import React from 'react'
import { Link } from 'react-router-dom';



// import icons
import { FaPlay } from "react-icons/fa";

// import data 

export default function SideBarActionItem ({imdbScore , img , isSerial , id}) {
  return (
    <div
      class='swiper-slide'
      style={{width: "167px", marginLeft: "1px"}}
      role='group'
      aria-label='1 / 10'
    >
      <a
        href='#'
        class='main-item w-100 d-block overflow-hidden position-relative'
      >
        <img
          width='207'
          height='310'
          src={img}
          class='attachment-post_cover size-post_cover wp-post-image w-100 d-block h-100'
          alt=''
          decoding='async'
          sizes='(max-width: 207px) 100vw, 207px'
        />
        <Link to={isSerial ? (`/series/${id}`) : (`/movies/${id}`)} class='img-cover w-100 h-100 position-absolute start-0 top-0'>
          <div  class='playicon w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center position-absolute'>
            <FaPlay className='icon' />
          </div>
          <div class='popular-rate d-flex position-absolute'>
            <i class='fa-solid fa-thumbs-up'></i>
            <span>100%</span>
          </div>
          <div class='imdb-rate'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              className='ipc-logo'
              version='1.1'
              viewBox='0 0 64 32'
            >
              <rect width='100%' height='100%' fill='#F5C518' rx='4'></rect>
              <g transform='translate(8 7)'>
                <path d='M0 18L5 18 5 0 0 0z'></path>
                <path d='M15.673 0l-1.12 8.408-.695-4.573A126.174 126.174 0 0013.278 0H7v18h4.242l.016-11.886L13.044 18h3.02l1.694-12.148L17.771 18H22V0h-6.327zM24 18V0h7.805A3.185 3.185 0 0135 3.177v11.646A3.185 3.185 0 0131.805 18H24zm5.832-14.76c-.198-.108-.577-.16-1.13-.16v11.811c.73 0 1.178-.13 1.346-.404.168-.27.254-1 .254-2.2v-6.98c0-.813-.03-1.333-.086-1.563a.736.736 0 00-.384-.504zM44.43 4.507h.32c1.795 0 3.25 1.406 3.25 3.138v7.217C48 16.595 46.545 18 44.75 18h-.32a3.282 3.282 0 01-2.658-1.332l-.288 1.1H37V0h4.784v5.78a3.387 3.387 0 012.646-1.273zm-1.024 8.777V9.02c0-.705-.046-1.167-.14-1.38-.094-.213-.47-.35-.734-.35s-.671.111-.75.299v7.219c.09.206.478.32.75.32.271 0 .666-.11.75-.32.082-.209.124-.719.124-1.523z'></path>
              </g>
            </svg>
            <span>{imdbScore}</span>
            <small>/10</small>
          </div>
        </Link>
      </a>
    </div>
  )
}
