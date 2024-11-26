import React from 'react'
import { Link } from 'react-router-dom'

export default function ResponsiveNavItem({icon , title,href}) {
  return (
    <Link  to={href} class="item d-inline-flex justify-content-center flex-wrap text-center">
    {icon}
    <span class="title w-100 d-block">{title}</span>
  </Link>
  )
}
