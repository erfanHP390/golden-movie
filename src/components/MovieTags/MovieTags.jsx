import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { movie } from '../../js/data';


export default function MovieTags({id}) {


    let params = useParams();
    const [smovie, setSMovie] = useState(null);
  
    useEffect(() => {
      const foundMovie = movie.find(m => m.id === parseInt(params.movieID));
      setSMovie(foundMovie);
    }, [params.movieID]);
  
  
    if (!smovie) {
      return <div>در حال بارگذاری...</div>
    }


  return (
    <div class="main-side-item movie-tags">
    <div class="headline">
      <div class="title">
        <i class="fa-solid fa-tags"></i>
        <span>برچسب ها</span>
      </div>
      <div class="open-icon">
        <i class="fa-solid fa-angles-left"></i>
      </div>
    </div>
    <div class="info">
      <Link  to={``}  rel="tag"  title="جوکر (2019)"  >{`${smovie.title}   (${smovie.year})`}</Link>
      <Link  to={``}  rel="tag"  title="دانلود فیلم"  >{`دانلود ${smovie.isSerial ? ("سریال") : ("فیلم") }`} </Link>
      <Link  to={``} rel="tag"  title="دانلود فیلم Joker"  >{`دانلود ${smovie.isSerial ? ("سریال") : ("فیلم") }  ${smovie.title}`}</Link>
    </div>
  </div>
  )
}
