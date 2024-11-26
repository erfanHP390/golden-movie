import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar () {
  const [isShowSidebar, setIsShowSidebar] = useState(false)

  const closeSideBar = () => {
    setIsShowSidebar(false)
  }

  return (
    <>
      {isShowSidebar ? (
        <div id='sideBar' className='sideBar   dark-bg   box-bg'>
          <div class='closeDiv align-self-start'>
            <button class='closeBtn box-bg' onClick={() => closeSideBar()}>
              <i class='fa-solid fa-xmark'></i>
            </button>
          </div>
          <div class='AdminDetails'>
            <div class='adminImg blue-bg'>
              <lord-icon
                src='https://cdn.lordicon.com/kdduutaw.json'
                trigger='hover'
                stroke='bold'
                state='hover-looking-around'
                colors='primary:#29b6f6,secondary:#29b6f6'
                style={{ width: '50px', height: '50px' }}
              ></lord-icon>
            </div>
            <div class='adminName'>
              <h5 class='blue-text'>AdminName</h5>
            </div>
          </div>
          <div class='AdminPages  ' id='AdminPages'>
            <div class='SideBarLink  '>
              <Link to={``} class='SideBarBtn box-bg '></Link>
              <Link to={`/p-admin`} class='SideBarBtn box-bg '>
                <span class='white-text SideBarSpan '>داشبورد</span>
                <lord-icon
                  src='https://cdn.lordicon.com/fcyboqbm.json'
                  trigger='hover'
                  stroke='bold'
                  colors='primary:#29b6f6,secondary:#29b6f6'
                  style={{ width: '30px', height: '30px', paddingTop: '11px' }}
                ></lord-icon>
              </Link>
            </div>
            <div class='SideBarLink '>
              <Link to={`/p-admin/add-film`} class='SideBarBtn box-bg '>
                <span class='white-text SideBarSpan'>افزودن فیلم</span>
                <lord-icon
                  src='https://cdn.lordicon.com/ogjpwrxe.json'
                  trigger='hover'
                  stroke='bold'
                  colors='primary:#29b6f6,secondary:#29b6f6'
                  style={{ width: '30px', height: '30px', paddingTop: '11px' }}
                ></lord-icon>
              </Link>
            </div>
            <div class='SideBarLink '>
              <Link
                to={`/p-admin/list-film`}
                class='SideBarBtn box-bg '
                onclick='showAddMovieBtn()'
              >
                <span class='white-text SideBarSpan'>مدیریت محتوا</span>
                <lord-icon
                  src='https://cdn.lordicon.com/ogjpwrxe.json'
                  trigger='hover'
                  stroke='bold'
                  colors='primary:#29b6f6,secondary:#29b6f6'
                  style={{ width: '30px', height: '30px', paddingTop: '11px' }}
                ></lord-icon>
              </Link>
            </div>
            <div class='dropdownLinks ' id='MediaBtn'>
              <div class='SideBarLink '>
                <button class='SideBarBtn box-bg '>
                  <span class='white-text SideBarSpan'>
                    افزودن فیلم و سریال
                  </span>
                </button>
              </div>
              <div class='SideBarLink '>
                <button class='SideBarBtn box-bg '>
                  <span class='white-text SideBarSpan'>
                    لیست فیلم ها و سریال ها
                  </span>
                </button>
              </div>
            </div>

            <div class='SideBarLink w-100 mt-3 mb-2 d-flex flex-column align-items-end justify-content-center'>
              <Link to={`/p-admin/tickets`} class='SideBarBtn box-bg p-2'>
                <span class='white-text SideBarSpan'>تیکت ها</span>
                <lord-icon
                  src='https://cdn.lordicon.com/jdgfsfzr.json'
                  trigger='hover'
                  stroke='bold'
                  state='hover-conversation-alt'
                  colors='primary:#29b6f6,secondary:#29b6f6'
                  style={{ width: '30px', height: '30px', paddingTop: '11px' }}
                ></lord-icon>
              </Link>
            </div>
            <div class='SideBarLink '>
              <Link to={`/p-admin/users`} class='SideBarBtn box-bg '>
                <span class='white-text SideBarSpan'> کاربران</span>
                <lord-icon
                  src='https://cdn.lordicon.com/knzzcfyy.json'
                  trigger='hover'
                  stroke='bold'
                  colors='primary:#29b6f6,secondary:#29b6f6'
                  style={{ width: '30px', height: '30px', paddingTop: '11px' }}
                ></lord-icon>
              </Link>
            </div>
            <div class='SideBarLink w-100 mt-3 mb-4 d-flex flex-column align-items-end justify-content-center'>
              <Link to={`/p-admin/edit-info`} class='SideBarBtn box-bg p-2'>
                <span class='white-text SideBarSpan'>ویرایش اطلاعات</span>
                <lord-icon
                  src='https://cdn.lordicon.com/exymduqj.json'
                  trigger='hover'
                  stroke='bold'
                  state='hover-line'
                  colors='primary:#29b6f6,secondary:#29b6f6'
                  style={{ width: '30px', height: '30px', paddingTop: '11px' }}
                ></lord-icon>
              </Link>
            </div>
            <div class='SideBarLink '>
              <a href='/' class='SideBarBtn box-bg '>
                <span class='white-text SideBarSpan'>برگشت به صفحه اصلی</span>
                <lord-icon
                  src='https://cdn.lordicon.com/shcfcebj.json'
                  trigger='hover'
                  stroke='bold'
                  colors='primary:#29b6f6,secondary:#29b6f6'
                  style={{ width: '30px', height: '30px', paddingTop: '11px' }}
                ></lord-icon>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button
          class='closeBtn box-bg'
          onClick={() => {
            setIsShowSidebar(true)
          }}
        >
          <i class='fa-solid fa-bars'></i>
        </button>
      )}
    </>
  )
}
