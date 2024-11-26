import React from 'react'
import { Link } from 'react-router-dom'

export default function UserPanelFeatureItem ({title ,style ,  num ,href, icon}) {
  return (
    <div class='feature-item'>
      <div class='top'>
        <div class={style}>
          {icon}
        </div>
        <div class='content'>
          <span class='count'>{num}</span>
          <h2 class='title'>{title}</h2>
        </div>
      </div>
      <div class='bottom'>
        <Link to={href}  className='btn show-all'>
          مشاهده همه
        </Link>
      </div>
    </div>
  )
}
