import React from 'react'

export default function ResponseSideBarItem ({ icon, title,href,iconArrow, children }) {
  return (
    <li class='item d-block'>
      <div class='main-title w-100 d-flex justify-content-between'>
        <a href={href} class='inner-item w-100 d-inline-flex align-items-center'>
          {icon}
          <div class='title'>
            <span class='w-100 d-block'>{title}</span>
          </div>
        </a>
        <div class='open-menu h-100 d-inline-flex align-items-center justify-content-center'>
          {iconArrow}
        </div>
      </div>
      {children}
    </li>
  )
}
