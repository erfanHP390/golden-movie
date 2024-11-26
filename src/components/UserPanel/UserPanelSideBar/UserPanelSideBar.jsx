import React from 'react'

import UserPanelSideBarItem from '../UserPanelSideBarItem/UserPanelSideBarItem'
import { Link } from 'react-router-dom'

export default function UserPanelSideBar () {
    
    
    

  return (
    <>
      <aside class='panel-sidebar'>
        <div class='sidebar-bg'></div>
        <div class='inner-side'>
          <div class='user-pic'>
            <figure class='profile'>
              <img
                alt=''
                src='https://secure.gravatar.com/avatar/d7a1e14b32549086d191e5a050315af9?s=50&amp;d=mm&amp;r=g'
                class='avatar avatar-50 photo'
                height='50'
                width='50'
                decoding='async'
              />
            </figure>
          </div>
          <div class='name'>کاربر</div>
          <ul class='panelside-menu'>
            <UserPanelSideBarItem  title={`داشبورد`}
              style={`item`}
              icon={<i class='fa-solid fa-grip'></i>}
              href={`/my-account`}
            ></UserPanelSideBarItem>
            <UserPanelSideBarItem  title={`لیست تماشا`}
              style={`item has_child none`}
              openIcon={
                <span class='open-icon'>
                  <i class='fa-solid fa-angle-left'></i>
                </span>
              }
              icon={<i class='fa-solid fa-heart'></i>}
              href={``}
            >
              <ul class='sub-menu' style={{ display: 'none' }}>
                <li class='item'>
                  <Link to={`/my-account/collection-list`}>لیست تماشا خصوصی</Link>
                </li>
                <li class='item'>
                  <Link to={`/my-account/list-movies-user`}>لیست تماشا سفارشی</Link>
                </li>
              </ul>
            </UserPanelSideBarItem>
            <UserPanelSideBarItem  title={`خرید اشتراک`}
              style={`item`}
              icon={<i class='fa-solid fa-wand-sparkles'></i>}
              href={`/my-account/subs-plans`}
            />
            <UserPanelSideBarItem  title={`دیدگاه ها`}
              style={`item`}
              icon={<i class='fa-solid fa-comments'></i>}
              href={`/my-account/comments-user`}
            />
            <UserPanelSideBarItem  title={`تیکت ها`}
              style={`item has_child none  `}
              icon={<i class='fa-solid fa-ticket'></i>}
              href={``}
            >
              <ul class='sub-menu' style={{ display: 'none' }}>
                <li class='item'>
                  <Link  to={`/my-account/create-ticket`}>تیکت جدید</Link>
                </li>
                <li class='item'>
                  <Link to={`/my-account/ticket-list`}>لیست تیکت ها</Link>
                </li>
              </ul>
            </UserPanelSideBarItem>
            <UserPanelSideBarItem  title={`درخواست فیلم و سریال`}
              style={`item has_child none  `}
              icon={<i class='fa-solid fa-circle-plus'></i>}
              href={``}
            >
              <ul class='sub-menu' style={{ display: 'none' }}>
                <li class='item'>
                  <Link to={`/my-account/new-req-film`}>درخواست جدید</Link>
                </li>
                <li class='item'>
                  <Link to={`/my-account/list-req`}>لیست درخواست ها</Link>
                </li>
              </ul>
            </UserPanelSideBarItem>
            <UserPanelSideBarItem  title={`ویرایش پروفایل`}
              style={`item`}
              icon={<i class='fa-solid fa-user-pen'></i>}
              href={`/my-account/edit-profile`}
            />
            <UserPanelSideBarItem  title={`خروج`}
              style={`item`}
              icon={<i class='fa-solid fa-power-off'></i>}
              href={``}
            />
          </ul>
        </div>
      </aside>
    </>
  )
}
