import React from 'react'

export default function DropdownMenuItem ({title}) {
  return (
    <>
      <li className='item d-inline-flex position-realative align-items-center'>
        <a href='#' className='link'>
          {title}
        </a>
      </li>
    </>
  )
}
