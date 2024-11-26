import React from 'react'

export default function MovieBodyItemBox ({ id  ,title,icon,style, children}) {
  return (
    <div class={style}>
      <h3 class='title'>
        {icon}
        <span>{title}</span>
        <i class='seprator'></i>
      </h3>
      {children}
    </div>
  )
}
