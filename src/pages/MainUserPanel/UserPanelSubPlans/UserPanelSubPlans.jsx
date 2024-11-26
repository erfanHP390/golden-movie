import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'
import UserPanelSubPlanItem from '../../../components/UserPanel/UserPanelSubPlanItem/UserPanelSubPlanItem'

import { BiSolidBalloon } from 'react-icons/bi'
import { HiMiniRocketLaunch } from 'react-icons/hi2'

export default function UserPanelSubPlans () {
  return (
    <>
      <Helmet>
        <title>پنل کاربری - خرید اشتراک </title>
      </Helmet>
      <UserPanelContent
        title={`خرید اشتراک`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`خرید اشتراک`}
        toLink2={`/my-account/subs-plans`}
        btn={<a  href="#"  class="sub-link">تراکنش ها</a>}
      >
        <div class='content-box'>
          <section class='section_content panel-plans'>
            <div class='plans'>
              <UserPanelSubPlanItem
                time={`ماهه`}
                realPrice={'15,000'}
                num={`1`}
                discountPrice={`25,000`}
                icon={<i class='fa-solid fa-motorcycle'></i>}
              />
              <UserPanelSubPlanItem
                time={`ماهه`}
                realPrice={'45,000'}
                num={`3`}
                discountPrice={`55,000`}
                icon={<BiSolidBalloon />}
              />
              <UserPanelSubPlanItem
                time={`ماهه`}
                realPrice={'65,000'}
                num={`6`}
                discountPrice={`75,000`}
                icon={<i class='fa-solid fa-helicopter'></i>}
              >
                {' '}
                <div class='special'>
                  <span>پیشنهادی</span>
                </div>
              </UserPanelSubPlanItem>
              <UserPanelSubPlanItem
                time={`ساله`}
                realPrice={'115,000'}
                num={`1`}
                discountPrice={`130,000`}
                icon={<HiMiniRocketLaunch />}
              />
            </div>
          </section>
        </div>
      </UserPanelContent>
    </>
  )
}
