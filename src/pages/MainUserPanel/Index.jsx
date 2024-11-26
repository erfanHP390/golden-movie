import React from 'react'

import Header from '../../components/Header/Header'
import UserPanelSideBar from '../../components/UserPanel/UserPanelSideBar/UserPanelSideBar'

import { Outlet } from 'react-router-dom'

export default function Index () {
  return (
    <>
      <Header
        children={
          <div class='open-panelmenu'>
            <span class='title'>پنل منو</span>
          </div>
        }
      />
      <main class='main'>
        <div class='main-userpanel'>
          <UserPanelSideBar />
          <Outlet />
        </div>
      </main>

    </>
  )
}
