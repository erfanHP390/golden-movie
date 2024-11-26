import React from 'react'

// import icons
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaCloudSun } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { PiHouseLineLight } from "react-icons/pi";
import { FaFilm } from "react-icons/fa6";
import { TbDeviceTvOld } from "react-icons/tb";
import { FaTheaterMasks } from "react-icons/fa";
import { TbHeadset } from "react-icons/tb";

// import components
import NavLinkItem from '../NavLinkItem/NavLinkItem';
import NotifItem from '../NotifItem/NotifItem';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownMenuItem from '../DropdownMenuItem/DropdownMenuItem';
import { Link } from 'react-router-dom';

export default function Header ({children}) {
  return (
    <header className='site-header w-100 d-block position-relative'>
      <div className='header-bg position-absolute w-100 h-100'>
        <div className='pic position-absolute w-100 h-100'></div>
      </div>
      <div className="main-header-user position-absolute w-100 h-100">
        <div className="head-user-side w-100 position-absolute text-end">
            <div className="main d-flex align-items-center">
                <div className="switch-mode">
                <BsFillMoonStarsFill />
                <FaCloudSun />
                </div>
                {children}
                <div className="notifications d-inline-flex align-items-center justify-content-center position-relative">
                    <a href="#" className="icon d-flex align-items-center justify-content-center position-relative">
                        <FaBell />
                        <span  className="count-unread position-absolute d-flex align-items-center justify-content-center"  >2</span>
                    </a>
                    <div className="list position-absolute text-start">
                        <NotifItem title={`جوکر 2 : جنون مشترک`}  desc={`جوکر و هارلی کویینزل ، قسمت دوم جوکر رسید از دستش نده!`}  time={`2 روز قبل`}  />
                        <NotifItem  title={`قسمت جدید سریال شوگان`}  desc={`قسمت هشتم از فصل اول رسید`}  time={`17 ساعت پیش`} />
                        <a  href="#"  class="show-all w-100 d-block text-center"  >مشاهده همه</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="main-header-side position-absolute w-100">
        <div className="main h-100">
          <div className="header-info d-flex w-100 align-items-center h-100">
            <div className="site-logo position-relative d-inline-block h-100">
              <a  href="/"  title="دیجی مدیا"  className="w-100 d-flex align-items-center justify-content-center h-100">
                <img  src="../images/Untitled-1 y.png"  alt="دیجی مدیا"  className="dark d-block"  style={{height: "50px"}}/>
              </a>
            </div>
            <nav  className="header-nav-info h-100 d-flex align-items-center justify-content-between position-relative">
              <ul  id="menu-%d9%81%d9%87%d8%b1%d8%b3%d8%aa-%d9%87%d8%af%d8%b1"  className="header-menu d-flex position-relative">
                <NavLinkItem title={`خانه`}  icon={<PiHouseLineLight />}  href={`/`} ></NavLinkItem>
                <NavLinkItem title={`فیلم ها`}  icon={<FaFilm />} >
                <DropdownMenu  img={`/images/The-Avengers-Iron-Man-poster.png`} >
                <DropdownMenuItem  title={`تمامی فیلم ها`} />                
                <DropdownMenuItem  title={`250 فیلم برتر imdb`} />
                <DropdownMenuItem  title={`جوایز اسکار`} />
                <DropdownMenuItem  title={`فیلم های دوبله فارسی`} />
                <DropdownMenuItem  title={`فیلم های دارای پخش آنلاین`} />
                <DropdownMenuItem  title={`جدول باکس آفیس`} />
                <DropdownMenuItem  title={`کالکشن ها`} />
                <DropdownMenuItem  title={`جوایز گلدن گلوب`} />
                <DropdownMenuItem  title={`فیلم های زیرنویس فارسی`} />
                </DropdownMenu>
                </NavLinkItem>
                <NavLinkItem title={`سریال ها`}  icon={<TbDeviceTvOld />} >
                <DropdownMenu  img={`/images/The-Penguin.png`}>
                <DropdownMenuItem  title={`تمامی سریال ها`} />
                <DropdownMenuItem  title={`سریال های دوبله فارسی`} />
                <DropdownMenuItem  title={`سریال های دارای پخش آنلاین`} />
                <DropdownMenuItem  title={`250 سریال برتر imdb`} />
                <DropdownMenuItem  title={`سریال های زیرنویس فارسی`} />
                </DropdownMenu>
                </NavLinkItem>
                <NavLinkItem title={`هنرمندان`}  icon={<FaTheaterMasks />} >
                <DropdownMenu img={`images/81DDYM8OE4L.png`}>
                <DropdownMenuItem  title={`ستارگان`} />
                <DropdownMenuItem  title={`کارگردان ها`} />
                </DropdownMenu>
                </NavLinkItem>
                <NavLinkItem title={`تماس با ما`}  icon={<TbHeadset />} ></NavLinkItem>
              </ul>
              <div className="search-box d-inline-block position-relative">
                <form  action=""  data-active="true"  className="w-100 d-flex align-items-center justify-content-between">
                  <input  type="text"  placeholder="جستجو..."  name="s"  autocomplete="off"  className="border-0"/>
                  <button  type="submit"  className="border-0 d-inline-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="user-panel position-absolute d-inline-block">
                <div className="login-register w-100 d-block">
                  <Link to={'/sign-in'}  title="ورود/عضویت"  className="btn d-flex align-items-center text-nowrap">
                    {/* <!-- <i className="fa-regular fa-user-pen"></i> --> */}
                    <svg  stroke="currentColor"  fill="currentColor"  stroke-width="0"  viewBox="0 0 640 512"  height="20px"  width="20px"  xmlns="http://www.w3.org/2000/svg">
                      <path  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"></path>
                    </svg>
                    {/* <!-- <i className="fa-solid fa-user-pen"></i> --> */}
                    <span className="title d-inline-block">ورود/عضویت</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
