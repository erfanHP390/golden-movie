import React from 'react'
import { Helmet } from 'react-helmet'

import UserPanelContent from '../../../components/UserPanel/UserPanelContent/UserPanelContent'

export default function UserPanelCollectionList() {
  return (
    <>
            <Helmet>
        <title>پنل کاربری - لیست تماشا </title>
      </Helmet>
      <UserPanelContent
        title={`لیست تماشا`}
        link1={`داشبورد`}
        toLink1={`/my-account`}
        link2={`لیست تماشا`}
        toLink2={`/my-account/collection-list`}
      >
          <div class="content-box">
            <section class="section_content main-watchlist fill">
              <article class="item">
                <a
                  href="#"
                  class="thumb"
                  title="Sherlock"
                >
                  <img
                    width="207"
                    height="310"
                    src="../images/best-movies/images.jpg"
                    class="attachment-post_cover size-post_cover wp-post-image"
                    alt=""
                    decoding="async"
                    fetchpriority="high"
                    sizes="(max-width: 207px) 100vw, 207px"
                  />
                  <div class="actions">
                    <span class="btn remove" data-post="1444" data-active="true" ><i class="fa-solid fa-trash"></i></span>
                  </div>
                  <div class="recovery">
                    <div class="content">
                      <span class="info">از علاقه مندی حذف شد !</span>
                      <p>اگر قصد بازگردانی دارید روی دکمه زیر کلیک کنید</p>
                      <div class="recover-box">
                        <span
                          class="recover-btn"
                          data-post="1444"
                          data-active="true"
                          >بازگردانی</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a  href="https://demo.novinwp.com/digimedia/series/tt1475582/"  class="title"  >Forrest Gump</a>
              </article>
              </section>
              </div>
      </UserPanelContent>
    </>
  )
}
