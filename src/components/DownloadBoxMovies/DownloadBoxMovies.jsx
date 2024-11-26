import React, { useEffect, useState } from 'react'

import { movie } from '../../js/data'


export default function DownloadBoxMovies({id}) {


    const [smovie, setSMovie] = useState(null)

  useEffect(() => {
    const foundMovie = movie.find(m => m.id === parseInt(id))
    setSMovie(foundMovie)
  }, [id])


  return (
    <div class='dl-box'>
    <ul
      class='type-list'
      data-type='sub'
      style={{display: "block"}}
    >
        {
            smovie && smovie.quality.map(item => (
                <li class="item-type">
                <div class="side">
                  <span class="q-info type sub">زیرنویس</span>
                  <span class="q-info">کیفیت : {item}</span>
                  <span class="q-info">حجم : 1.54 گیگابایت</span>
                  <span class="q-info">انکودر : GalaxyRG</span>
                  <span class="q-info sub-type">SoftSub</span>
                </div>
                <div class="side">
                  <a  href=""  target="_blank"  class="btn dllink">
                    <i class="fa-light fa-arrow-down-to-arc"></i>
                    <span>لینک دانلود</span>
                  </a>
                </div>
              </li>
            ))
        }
    </ul>
  </div>
  )
}
