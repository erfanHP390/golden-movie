import React from 'react'
import { useState } from 'react'
import "../../styles/admin-styles.css"
import Sidebar from '../../components/Admin/Sidebar/Sidebar'

import { Outlet } from 'react-router-dom'

export default function Index () {

  const [isSidebarOpen, setSidebarOpen] = useState(false); 
  const toggleSidebar = () => { setSidebarOpen(!isSidebarOpen); };

  return (
    <>
      <main class='main-admin d-flex  flex-lg-row-reverse flex-xl-row-reverse'>
        <Sidebar   />
        <Outlet />
      </main>
    </>
  )
}
