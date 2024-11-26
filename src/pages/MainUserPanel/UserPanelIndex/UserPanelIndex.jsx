import React from 'react'

import UserPanelSideBar from '../../../components/UserPanel/UserPanelSideBar/UserPanelSideBar'
import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'
import UserPanelFeatureItem from '../../../components/UserPanel/UserPanelFeatureItem/UserPanelFeatureItem'
import { Helmet } from "react-helmet"



export default function UserPanelIndex () {
  return (
    <>
        <Helmet>
        <title>پنل کاربری - داشبورد</title>
    </Helmet>

          <UserPanelContent
            title={`پیشخوان کاربری`}
            link1={`داشبورد`}
            toLink1={`/my-account`}
          >
            <section class='panel-dashboard'>
              <div class='top-features'>
                <UserPanelFeatureItem
                  title={`درخواستی ها`}
                  num={0}
                  href={``}
                  style={`icon purple`}
                  icon={<i class='fa-solid fa-circle-plus'></i>}
                />
                <UserPanelFeatureItem
                  title={`علاقه مندی ها`}
                  style={`icon blue`}
                  num={1}
                  href={``}
                  icon={<i class='fa-solid  fa-heart'></i>}
                />
                <UserPanelFeatureItem
                  title={`لیست سفارشی`}
                  style={`icon green`}
                  num={2}
                  icon={<i class='fa-solid fa-list-check'></i>}
                  href={``}
                />
                <UserPanelFeatureItem
                  title={`دیدگاه ها`}
                  style={`icon yellow`}
                  num={1}
                  icon={<i class='fa-solid fa-comments'></i>}
                  href={``}
                />
              </div>

              <div class='main-info'>
                <div class='right-side'>
                  <div class='about-box'>
                    <div class='headline'>
                      <h4 class='title'>اطلاعات</h4>
                      <i class='seprator'></i>
                    </div>
                    <ul class='info'>
                      <li>
                        <h3 class='title'>
                          <i class='fa-solid fa-wand-sparkles'></i>
                          <span>اشتراک ویژه:</span>
                        </h3>
                        <span class='desc red'>غیرفعال است !</span>
                      </li>
                      <li>
                        <h3 class='title'>
                          <i class='fa-solid fa-calendar-days'></i>
                          <span>تاریخ عضویت:</span>
                        </h3>
                        <span class='desc'>۱۴۰۳/۰۷/۰۹</span>
                      </li>
                      <li>
                        <h3 class='title'>
                          <i class='fa-light fa-mobile-signal'></i>
                          <span>آیپی شما:</span>
                        </h3>
                        <span class='desc'>172.233.51.108</span>
                      </li>
                      <li>
                        <h3 class='title'>
                          <i class='fa-solid fa-business-time'></i>
                          <span>آخرین فعالیت شما:</span>
                        </h3>
                        <span class='desc'>۱۴۰۳/۰۷/۰۹</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class='left-side'>
                  <div class='about-vip'>
                    <div class='half-circle-progress'>
                      <div class='barOverflow'>
                        <div
                          class='bar'
                          style={{ transform: 'rotate(45deg)' }}
                        ></div>
                      </div>
                      <span>0</span>%
                    </div>
                    <div class='description'>
                      <span class='title'>فاقد اشتراک</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </UserPanelContent>

    </>
  )
}
