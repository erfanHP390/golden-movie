import React, { useEffect, useState } from 'react'

import { movie } from '../../js/data'
import { Link } from 'react-router-dom'

export default function DownloadBoxSeries ({ id }) {
  const [smovie, setSMovie] = useState(null)

  useEffect(() => {
    const foundMovie = movie.find(m => m.id === parseInt(id))
    setSMovie(foundMovie)
  }, [id])

  if (!smovie) {
    return <div>در حال بارگذاری...</div>
  }

  return (
    <section class='postbox-information'>
      <div class='postbox-tabs'>
        <ul class='tab-list'>
          <li class='tab-item active' data-id='dlbox'>
            باکس دانلود
          </li>
          <li class='tab-item' data-id='actors'>
            بازیگران و امتیازات
          </li>
        </ul>
      </div>
      <div class='postbox-sec'>
        <div class='sect' data-id='dlbox' style={{ display: 'block' }}>
          <div class='dlb-series'>
            <div class='main-links'>
              <div class='dl-taarefe'>
                <i class='icon-nim fa-solid fa-star'></i>
                دانلود شما بصورت
                <span class='item'>تمام بها</span>
                محاسبه میشود
              </div>

              <ul class='season-list' style={{ display: 'block' }}>
                <li class='s-item'>
                  <div class='headline-s'>
                    <div class='side-info'>
                      <span class='inf name'>فصل اول</span>
                      <span class='inf count'>تعداد قسمت : 6</span>
                    </div>
                    <div class='open-icon'>
                      <i class='fa-solid fa-angle-left'></i>
                    </div>
                  </div>

                  <div class='body-links'>
                    <ul class='episode-list'>
                      <div class='switch-type'>
                        <span class='sub active' data-id='sub'>
                          زیرنویس
                        </span>
                        <span class='dub' data-id='dub'>
                          دوبله
                        </span>
                      </div>
                      <div
                        class='type-list sub'
                        data-type='sub'
                        style={{ display: 'block' }}
                      >
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 1</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 1080p</span>
                                <span class='q-info'>حجم : 456 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991932-0-1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 720p</span>
                                <span class='q-info'>حجم : 353 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991930-0-720.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 2</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 1080p</span>
                                <span class='q-info'>حجم : 456 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991932-0-1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 720p</span>
                                <span class='q-info'>حجم : 353 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991930-0-720.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 3</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 1080p</span>
                                <span class='q-info'>حجم : 456 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991932-0-1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 720p</span>
                                <span class='q-info'>حجم : 353 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991930-0-720.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 4</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 1080p</span>
                                <span class='q-info'>حجم : 456 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991932-0-1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 720p</span>
                                <span class='q-info'>حجم : 353 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991930-0-720.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 6</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 1080p</span>
                                <span class='q-info'>حجم : 456 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991932-0-1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 720p</span>
                                <span class='q-info'>حجم : 353 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991930-0-720.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 5</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : WEB-DL 720p</span>
                                <span class='q-info'>حجم : 353 مگابایت</span>
                                <span class='q-info sub-type'>SoftSub</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991930-0-720.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </div>
                      <div class='type-list dub' data-type='dub'>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 1</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : BluRay 1080p</span>
                                <span class='q-info'>حجم : 1 گیگابایت</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991928-0-HQ_1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 2</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : BluRay 1080p</span>
                                <span class='q-info'>حجم : 1 گیگابایت</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991928-0-HQ_1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 3</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : BluRay 1080p</span>
                                <span class='q-info'>حجم : 1 گیگابایت</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991928-0-HQ_1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 4</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : BluRay 1080p</span>
                                <span class='q-info'>حجم : 1 گیگابایت</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991928-0-HQ_1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 5</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : BluRay 1080p</span>
                                <span class='q-info'>حجم : 1 گیگابایت</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991928-0-HQ_1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class='e-item'>
                          <div class='headline'>
                            <div class='right'>
                              <i class='fa-thin fa-arrow-down-to-arc'></i>
                              <span class='item-info'>قسمت 6</span>
                            </div>
                            <div class='open-icon'>
                              <i class='fa-solid fa-angle-left'></i>
                            </div>
                          </div>

                          <ul class='e-links'>
                            <li class='item'>
                              <div class='side info'>
                                <span class='q-info'>کیفیت : BluRay 1080p</span>
                                <span class='q-info'>حجم : 1 گیگابایت</span>
                              </div>
                              <div class='side btns'>
                                <a
                                  href='https://digimedia.upera.tv/2991928-0-HQ_1080.mp4?ref=tcKw'
                                  target='_blank'
                                  class='btn dllink'
                                >
                                  <i class='fa-light fa-arrow-down-to-arc'></i>
                                  <span>دانلود</span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class='sect' data-id='actors'>
          <div class='postmeta-scores'>
            {smovie.IsTopFilm && (
              <div class='item'>
                <div class='title'>
                  <div class='icon green'>
                    <i class='fa-light fa-trophy'></i>
                  </div>
                  <div class='content'>
                    <span>امتیازات</span>
                    <samp>Awards</samp>
                  </div>
                </div>
                <ul class='list awards'>
                  <li class='item'>
                    <div class='icon'>جوایز</div>
                    <span class='desc'>
                      95 بار برنده جایزه و 185 بار نامزد دریافت جایزه
                    </span>
                  </li>
                  <li class='item top-imdb'>
                    <div class='icon'>
                      <i class='fa-light fa-trophy'></i>
                      رتبه
                    </div>
                    <span class='desc'>جزو 250 سریال برتر با رتبه 22</span>
                  </li>
                </ul>
              </div>
            )}
            <div class='item'>
              <div class='title'>
                <div class='icon yellow'>
                <i class="fa-solid fa-user"></i>
                </div>
                <div class='content'>
                  <span>کارگردانان</span>
                  <samp>Directors</samp>
                </div>
              </div>
              <ul class='list actors'>
                <li class='act'>
                  <a
                    href=''
                    target='_blank'
                    rel='tag'
                    class='link'
                  >
                    <figure>
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png'
                        alt='Steven Moffat'
                      />
                    </figure>
                    <span class='name'>{smovie.director}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class='item'>
              <div class='title'>
                <div class='icon yellow'>
                  <i class='fa-solid fa-users'></i>
                </div>
                <div class='content'>
                  <span>ستارگان</span>
                  <samp>Actors</samp>
                </div>
              </div>
              <ul class='list actors'>
                {
                  smovie.stars.map(item => (
                    <li class='act'>
                    <a
                      href='https://demo.novinwp.com/digimedia/actor/benedict-cumberbatch/'
                      target='_blank'
                      rel='tag'
                      class='link'
                    >
                      <figure>
                        <img
                          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/330px-User_icon_2.svg.png'
                          alt={item}
                        />
                      </figure>
                      <span class='name'>{item}</span>
                    </a>
                  </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
