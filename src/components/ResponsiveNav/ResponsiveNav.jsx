import React from 'react'

import ResponsiveNavItem from './ResponsiveNavItem'

export default function ResponsiveNav () {
  return (
    <nav class='responsive-navigation w-100 position-fixed start-0 bottom-0 justify-content-between align-items-center'>
      <div class='item show-menu d-inline-flex justify-content-center flex-wrap text-center'>
        <i class='icon fa-solid fa-bars'></i>
        <span class='title d-block'>منو</span>
      </div>
      <ResponsiveNavItem  title={`خانه`}  icon={<i class="icon fa-solid fa-house"></i>} href={`/`} />
      <ResponsiveNavItem  title={`علاقه مندی ها`}  icon={<i class="icon fa-solid fa-floppy-disk"></i>} />
      <ResponsiveNavItem  title={`پنل`}  icon={<i class="icon fa-solid fa-user"></i>}  href={'/sign-up'} />
    </nav>
  )
}
