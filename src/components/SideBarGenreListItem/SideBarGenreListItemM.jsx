import React from 'react'

import { genreListMovie } from '../../js/data'

export default function SideBarGenreListItemM() {
  return (
    <>
      {
        genreListMovie.map(genre => (
            <li class="genre d-inline-block" key={genre.id}>
            <a  class="w-100 d-flex justify-content-between align-items-center"  href="#"  rel="tag">
              <span class="title d-inline-block">{genre.title}</span>
              <samp class="count d-inline-flex align-items-center">{genre.num}</samp>
            </a>
          </li>
        ))
      }
    </>
  )
}
