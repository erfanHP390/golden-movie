import React from 'react'

export default function SideBarBox ({ title, iconColor, icon, href, hrefClass, children }) {
  return (
    <>
      <div class='sidebar-box d-block w-100'>
        <div class='box-headline w-100 d-flex justify-content-between align-items-center'>
          <div class='title d-inline-flex align-items-center'>
            <div class={iconColor}>{icon}</div>
            <div class='content'>
              <span class='d-block'>{title}</span>
              {/* <samp class="d-block">Updated Series</samp> */}
            </div>
          </div>
          <div class={hrefClass}>{href}</div>
        </div>
        <div class='box-content d-block position-relative'>
            {children}
        </div>
      </div>
    </>
  )
}
