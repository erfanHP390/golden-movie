import React from 'react'
import Chart from '../../../components/Admin/Chart/Chart'
import { Helmet } from 'react-helmet'

export default function AminPanelIndex() {
  return (
    <>
    <Helmet>
      <title>مدیریت پنل - داشبورد</title>
    </Helmet>
      {/* <!-- dashboardPage --> */}
      <div class="dashboardPage w-100 h-100 gray-bg pt-4 pb-4 ">
        
        <div class="box-bg pt-2 p-3  mt-2 m-4 d-flex flex-column" >
          {/* <!-- sidebarBtn --> */}
          <div class="sidebarShowBtn d-none justify-content-end align-items-center " id="hamburgerbtn" >
            <button class="sidebarbtn p-2" onclick="showSidebar()" >
             <img src="./assets/png_hrrys.png" alt=""/>
            </button>
         </div>
             {/* <!-- statistics --> */}
        <div
          class="MediasNums  d-flex justify-content-around align-items-center"
        >
          {/* <!-- movies --> */}
          <div
            class="MediaBox m-2 custom-box-shadow d-flex flex-column align-items-center box-bg p-4"
          >
            <h5 class="blue-text m-1">:تعداد فیلم ها</h5>
            <h2 class="white-text">321</h2>
          </div>
          {/* <!-- series --> */}
          <div
            class="MediaBox  m-2 custom-box-shadow d-flex flex-column align-items-center box-bg p-4"
          >
            <h6 class="blue-text m-1">:تعداد سریال ها</h6>
            <h2 class="white-text">240</h2>
          </div>
          {/* <!-- users --> */}
          <div
            class="MediaBox  m-2 custom-box-shadow d-flex flex-column align-items-center box-bg p-4"
          >
            <h5 class="blue-text m-1">:تعداد کاربران</h5>
            <h2 class="white-text">825</h2>
          </div>
        </div>
        {/* <!-- userEntranceChart --> */}
        <div
          class="userEnters custom-box-shadow d-flex align-items-center justify-content-center box-bg  pt-4 pb-4 m-3"
        >
          <Chart />
        </div>
        {/* <!-- new users and mediasChart  --> */}
        <div
          class="dashboard-footer  mt-5 d-flex justify-content-around align-items-center"
        >
          {/* <!-- new users list --> */}
          <div class="NewUsersList custom-box-shadow box-bg  p-md-5 p-xl-5 p-lg-5 p-xxl-5 pt-3 d-flex flex-column align-items-center justify-content-start" >
            <h3 class="white-text">کاربران جدید</h3>
            <hr class="mb-3 mt-2"/>
            <div class="NewUsers w-100" id="NewUserList" >
              
            </div>
            
          </div>
          
        </div>
        </div>
     
      </div>
    </>
  )
}
