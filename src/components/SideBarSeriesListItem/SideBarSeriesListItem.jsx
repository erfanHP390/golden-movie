import React from 'react'

import { seriesList } from '../../js/data'

export default function SideBarSeriesListItem ({title , desc , img}) {
  return (
    <>
    {
        seriesList.map(serie => (
            <li key={serie.id}>
            <a
              class='item w-100 d-block position-relative overflow-hidden'
              href='#'
              title={serie.title}
              rel='bookmark'
            >
              <img
                class='w-100 h-100 d-block'
                src={serie.img}
                alt={serie.title}
              />
              <p class='desc w-100 d-block position-absolute overflow-hidden text-nowrap'>
                {' '}
                {serie.desc}
              </p>
            </a>
          </li>
        ))
    }
    </>
  )
}
