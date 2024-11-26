import React from 'react'

export default function SingleFilmPicture ({title, img , children }) {
  return (
    <div class='picture'>
      <img
        src={img}
        alt={`دانلود فیلم ${title}`}
      />
      {children}
    </div>
  )
}
