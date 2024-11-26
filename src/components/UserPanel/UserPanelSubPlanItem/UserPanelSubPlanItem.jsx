import React from 'react'

export default function UserPanelSubPlanItem({icon, num , time , discountPrice, realPrice, children}) {
  return (
    <article class='plan-item'>
        {children}
    <div class='icon'>
      {icon}
    </div>
    <div class='time'>
      <span>{num}</span>
      {` `}
      {time}
    </div>
    <div class='price'>
      <span class='discount-price'>{discountPrice}</span>
      <span class='real-price'>{realPrice}</span>
      <small class='desc'>تومان</small>
    </div>
    <a
      href='#'
      class='buy-btn'
    >
      خرید و ادامه
    </a>
  </article>
  )
}
