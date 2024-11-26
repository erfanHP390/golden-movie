import React from 'react'

export default function FooterBox({title , children}) {
  return (
    <div class='footerbox justify-content-start align-self-start pt-3 p-4 flex-column '>
    <h5 class='footerbox-title white-text'>
      {title}
      <div class='footerBox-title-lines d-flex align-items-center justify-content-start'>
        <hr style={{width: "20px", height: "5px"}} />
        <hr style={{width: "5px", height: "5px", marginRight: " 0.5rem"}} />
      </div>
    </h5>
    <ul class='footer-list'>
      {children}
    </ul>
  </div>
  )
}
