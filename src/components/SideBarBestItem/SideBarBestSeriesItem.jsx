import React from 'react'

// import icons
import { CiPlay1 } from "react-icons/ci";

export default function SideBarBestSeriesItem({id , title , genre , img}) {
    return (
      <>
          <li
            key={id}
            class='top-item w-100 d-flex justify-content-between align-items-center'
          >
            <a href='#' class='thumb d-inline-block overflow-hidden'>
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
            </a>
            <div class='content d-inline-block overflow-hidden text-nowrap'>
              <a
                class='title d-inline-block'
                href='#'
                rel='bookmark'
                title={title}
              >
                {title}
              </a>
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
            <a
              class='showmore overflow-hidden d-inline-flex align-items-center justify-content-center'
              href='#'
            >
              <CiPlay1  className="icon" />
            </a>
          </li>
      </>
    )
}
