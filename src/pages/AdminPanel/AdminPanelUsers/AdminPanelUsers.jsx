import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

export default function AdminPanelUsers () {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch user data from your API or database
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.users)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching users:', error)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
        <Helmet>
      <title>مدیریت پنل - لیست کاربران</title>
    </Helmet>
      <div class='users w-100 box-bg p-xl-5 p-lg-5 p-xxl-5  d-flex align-items-center flex-column custom-box-shadow '>
        <h5 class='light-Gray-text mb-4'>لیست کاربران</h5>
        <hr class='w-75' />
        <table class='usersLis w-100' id='usersList'>
          {users.slice(1 , 7).map(user => (
            <tr class='user d-flex  align-items-center justify-content-between custom-box-shadow w-100 p-3'>
              <td class='UserDetails d-flex align-items-center'>
                <div class='userimg d-flex justify-content-center align-items-center '>
                  <img
                    src='assets/vecteezy_transparent-background-person-icon_33882148.png'
                    alt=''
                  />
                </div>
                <h6 class='userName light-Gray-text'>
                  ${user.firstName + user.lastName}{' '}
                </h6>
              </td>
              <td class='UserEmailDiv'>
                <h6 class='UserEmailDiv light-Gray-text'> ${user.email}</h6>
              </td>
              <td class='buttons d-flex flex-row'>
                <button class='userbtn white-text p-2 pb-3 m-1 d-flex justify-content-center align-items-center'>
                  <span>مسدود </span>
                </button>
                <button class='userbtn white-text p-2 pb-3 m-1 d-flex justify-content-center align-items-center'>
                  {' '}
                  <span>حذف </span>
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  )
}
