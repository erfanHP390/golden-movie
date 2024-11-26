import React from 'react'
import { Link } from 'react-router-dom'


export default function UserPanelContent ({title , link1  ,link2 , toLink1 , toLink2 ,btn, children}) {
  return (
    <div class='panel-content'>
      <div class='headline-title'>
        <nav class='breadcrumbs'>
          <Link to={toLink1}>{link1}</Link>
          <Link to={toLink2}>{link2}</Link>
        </nav>
        <div class='title-box'>
          <h1 class='title'>{title}</h1>
          {btn}
        </div>
      </div>
        {children}
    </div>
  )
}
