import React from 'react'

export default function NotifItem({ title, desc, time }) {
  return (
    <>
            <li className='read-notification item w-100 d-block' data-id='36'>
        <span className='title w-100 d-flex align-items-center'>
          <i className='fa-sharp fa-solid fa-bell'></i> {title}
        </span>
        <p className='description w-100 d-block text-end'>{desc}</p>
        <div className='info w-100 d-flex justify-content-between'>
          <span className='time'>{time}</span>
        </div>
      </li>
    </>
  )
}
