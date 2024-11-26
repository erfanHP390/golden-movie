import React from 'react'

// import icons
import { IoClose } from 'react-icons/io5'

import ResponseSideBarItem from './ResponseSideBarItem'
import ResponsiveSideBarSubMenu from './ResponsiveSideBarSubMenu'

export default function ResponseSideBar () {
  return (
    <div class='main-responsiveside position-fixed w-100 h-100 start-0 top-0'>
      <div class='sidebar-bg position-fixed w-100 h-100 start-0 top-0'>
        <IoClose />
      </div>
      <div class='responsive-sidebar position-fixed top-0 h-100'>
        <div class='top-sidebar w-100 d-flex align-items-center justify-content-between'>
          <a href='#' class='logo d-inline-block'>
            <img
              src='./images/Untitled-1 y.png'
              alt='golden movies'
              class='light w-100 d-block h-100'
              style={{marginTop: "15px"}}
            />
          </a>
        </div>
        <ul
          id='menu-%d9%81%d9%87%d8%b1%d8%b3%d8%aa-%d9%87%d8%af%d8%b1-1'
          class='menu w-100 d-block overflow-auto'
        >
          <ResponseSideBarItem
            icon={<i class='fa-solid fa-house'></i>}
            title={`خانه`}
            href={'/'}

          />
          <ResponseSideBarItem
            icon={<i class='fa-solid fa-film-simple'></i>}
            title={`فیلم ها`}
            iconArrow={<i class='fa-solid fa-angle-left'></i>}
          >
            <ul class='sub-menu w-100 d-block overflow-hidden'>
              <ResponsiveSideBarSubMenu title={`تمامی فیلم ها`} />
              <ResponsiveSideBarSubMenu title={`جدول باکس آفیس`} />
              <ResponsiveSideBarSubMenu title={`250 فیلم برتر IMDb`} />
              <ResponsiveSideBarSubMenu title={`کالکشن ها`} />
              <ResponsiveSideBarSubMenu title={`جوایز اسکار`} />
              <ResponsiveSideBarSubMenu title={`جوایز گلدن گلوب`} />
              <ResponsiveSideBarSubMenu title={`فیلم های دوبله فارسی`} />
              <ResponsiveSideBarSubMenu title={`فیلم های زیرنویس فارسی`} />
              <ResponsiveSideBarSubMenu title={`فیلم های دارای پخش آنلاین`} />
            </ul>
          </ResponseSideBarItem>
          <ResponseSideBarItem
            icon={<i class='fa-thin fa-tv-retro'></i>}
            title={`سریال ها`}
            iconArrow={<i class='fa-solid fa-angle-left'></i>}
          >
            <ul class='sub-menu w-100 d-block overflow-hidden'>
              <ResponsiveSideBarSubMenu title={`تمامی سریال ها`} />
              <ResponsiveSideBarSubMenu  title={`250 سریال برتر IMDb`}  />
              <ResponsiveSideBarSubMenu  title={`سریال های دوبله فارسی`}  />
              <ResponsiveSideBarSubMenu  title={`سریال های زیرنویس فارسی`}  />
              <ResponsiveSideBarSubMenu  title={`سریال های دارای پخش آنلاین`}  />
            </ul>
          </ResponseSideBarItem>
          <ResponseSideBarItem
            icon={<i class="fa-solid fa-masks-theater"></i>}
            title={`هنرمندان`}
            iconArrow={<i class='fa-solid fa-angle-left'></i>}
          >
            <ul class='sub-menu w-100 d-block overflow-hidden'>
              <ResponsiveSideBarSubMenu title={`ستارگان`} />
              <ResponsiveSideBarSubMenu  title={`کارگردان ها`}  />
            </ul>
          </ResponseSideBarItem>
          <ResponseSideBarItem
            icon={<i class="fa-solid fa-headset"></i>}
            title={`تماس با ما`}
          />
        </ul>
      </div>
    </div>
  )
}
