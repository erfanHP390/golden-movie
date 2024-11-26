import React from 'react'

export default function DropdownMenu ({img , children}) {
  return (
    <>
      <div className='dropdown-menu-m position-absolute w-100'>
        <div className='inner-drop d-flex justify-content-between'>
          <ul className='dropdown-list w-100 d-inline-block'>
            {children}
          </ul>
          <div className='dropdown-pic d-inline-block position-relative'>
            <img
              src={img}
              alt='هنرمندان'
              className='d-block w-100 position-absolute object-fit-contain bottom-0'
            />
          </div>
        </div>
      </div>
    </>
  )
}
