import React from 'react'

export default function NavLinkItem ({icon , title , children,href }) {
  return (
    <>
      <li className='d-inline-block'>
        <a href={href} className='item d-flex align-items-center text-nowrap'>
          <div className='icon d-inline-block'>
            {icon}
          </div>
          <div className='title d-inline-block'>
            <span className='w-100 d-block'>{title}</span>
            {/* <samp className='w-100 d-block'>HOME</samp> */}
          </div>
        </a>
        {children}
      </li>
    </>
  )
}
