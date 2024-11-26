import React from 'react'

export default function FooterBoxItem({title}) {
  return (
    <li class='footerbox-item mb-2'>
    <a href='#' class='white-text white-space-nowrap'>
      {' '}
      {title}{' '}
    </a>
  </li>
  )
}
