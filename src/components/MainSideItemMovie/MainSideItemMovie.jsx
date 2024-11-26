import React from 'react'

export default function MainSideItemMovie ({title,icon,desc,style, children }) {
  return (
    <div className={style}>
      <div class='headline-title'>
        <h3 class='title'>
          {icon}
          <span>{title}</span>
          <i class='seprator'></i>
        </h3>
        {/* <div class='desc'>
          <i class='icon-nim fa-solid fa-star'></i>
          دانلود شما بصورت
          <span class='item'>تمام بها</span>
          محاسبه میشود
        </div> */}
        {desc}
      </div>
      {children}
    </div>
  )
}
