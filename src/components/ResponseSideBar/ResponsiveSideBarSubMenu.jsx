import React from 'react'

export default function ResponsiveSideBarSubMenu ({title}) {
  return (
    <li class='sub-item w-100 d-block'>
      <a
        class='d-inline-flex align-items-center'
        href='#'
      >
        {title}
      </a>
    </li>
  )
}
