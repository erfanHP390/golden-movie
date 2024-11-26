import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <div className='body'>
      <div class='mainbox'>
        <div class='err'>4</div>
        <i class='far fa-question-circle fa-spin' aria-hidden='true'></i>
        <div class='err2'>4</div>
        <div class='msg-not'>
          شاید این صفحه جابجا شد؟ حذف شده؟ یا از اول اصلا وجود نداشت؟
          <p>
            بیا بریم<Link to={`/`}> خانه </Link>و از آنجا امتحان کنید
          </p>
        </div>
      </div>
    </div>
  )
}
