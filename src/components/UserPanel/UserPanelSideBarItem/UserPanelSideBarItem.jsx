import React from 'react'
import { Link } from 'react-router-dom'

export default function UserPanelSideBarItem ({
  title,
  href,
  icon,
  style,
  children
}) {
  return (
    <li class={style}>
      <div class='headline-title'>
        {children ? (
          <>
            <div class='title'>
              {icon}
              <span>{title}</span>
            </div>
            <span class='open-icon'>
              <i class='fa-solid fa-angle-left'></i>
            </span>
          </>
        ) : (
          <Link to={href} class='title'>
            {icon}
            <span>{title}</span>
          </Link>
        )}
      </div>
      {children}
    </li>
  )
}
