import React from 'react'

export default function CommentBox () {
  return (
    <>
      <div class='box comments-box'>
        <div class='comment-form'>
          <i class='icon fa-thin fa-comment-captions'></i>
          <h4 class='title'>دیدگاه های کاربران</h4>
          <div class='count-comment'>
            <i class='fa-solid fa-comments bg-icon'></i>
            <div class='title'>
              <span class='count'>0</span>
              <samp class='title'>نظر</samp>
            </div>
          </div>
          <form
            action='#'
            class='form post_comment_form'
            data-active='true'
            method='post'
          >
            <input
              type='hidden'
              name='parent_comment_id'
              value=''
              class='parent_comment_id'
            />
            <input type='hidden' name='post_id' value='1444' />
            <input
              type='hidden'
              id='security_comment'
              name='security_comment'
              value='6bb2683a1d'
            />
            <input type='hidden' name='_wp_http_referer' value='#' />
            <div class='user-pic'>
              <img
                alt=''
                src='#'
                class='avatar avatar-50 photo avatar-default'
                height='50'
                width='50'
                decoding='async'
              />
            </div>
            <div class='inputs'>
              <div class='top'>
                <textarea
                  name='content_comment'
                  class='content_comment'
                  placeholder='دیدگاه خود را بنویسید ....'
                ></textarea>
                <span class='cancel-reply none'>انصراف</span>
              </div>
              <div class='bottom' style={{ display: 'block' }}>
                <div class='inner-bottom'>
                  <div class='input-item'>
                    <input
                      type='text'
                      placeholder='ایمیل ...'
                      name='author_email'
                    />
                  </div>
                  <div class='input-item'>
                    <input
                      type='text'
                      placeholder='نام و نام خانوادگی ...'
                      name='author_comment'
                    />
                  </div>
                  <div class='input-item spoil'>
                    <label class='spoil-comment'>
                      <span>دیدگاه حاوی اسپویل</span>
                      <input type='checkbox' name='spoil_comment' />
                      <div class='custom-check'></div>
                    </label>
                  </div>
                  <div class='input-item send'>
                    <button type='submit'>ارسال دیدگاه</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <p class='first-cm'>اولین نفر باشید دیدگاهی ثبت میکند</p>
      </div>
    </>
  )
}
