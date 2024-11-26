import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.username.length < 6) errors.username = 'نام کاربری باید حداقل 6 کاراکتر باشد.';
    if (!emailRegex.test(formData.email)) errors.email = 'لطفاً یک ایمیل معتبر وارد کنید.';
    if (formData.password1.length < 5) errors.password1 = 'رمز عبور باید حداقل 5 کاراکتر باشد.';
    if (formData.password1 !== formData.password2) errors.password2 = 'رمزهای عبور با هم مطابقت ندارند.';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Swal.fire({
        icon: 'error',
        title: 'خطا',
        html: Object.values(validationErrors).join('<br/>'),
        timer: 3000,
        timerProgressBar: true
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'ثبت‌نام با موفقیت انجام شد.',
      showConfirmButton: true,
      confirmButtonText: 'ورود به حساب کاربری'
    }).then(() => {
      navigate('/my-account');
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <Helmet>
      <title>ثبت نام</title>
    </Helmet>
        <div className='main-auth-panel'>
      <div className='right-side'>
        <div className='form-box'>
          <div className='switch-auth'>
            <Link to={`/sign-in`} className='btn'>ورود</Link>
            <Link to={`/sign-up`} className='btn active'>ثبت نام</Link>
          </div>
          <h1>ثبت نام در سایت</h1>
          <form onSubmit={handleSubmit} className='form'>
            <div className='alert'></div>
            <div className='input'>
              <i className='fa-solid fa-user'></i>
              <input type='text' name='username' placeholder='نام کاربری' onChange={handleChange} value={formData.username} />
            </div>
            <div className='input'>
              <i className='fa-solid fa-key'></i>
              <input type='text' name='email' placeholder='ایمیل' onChange={handleChange} value={formData.email} />
            </div>
            <div className='input'>
              <i className='fa-solid fa-key'></i>
              <input type='password' name='password1' placeholder='رمز عبور' onChange={handleChange} value={formData.password1} />
            </div>
            <div className='input'>
              <i className='fa-solid fa-key'></i>
              <input type='password' name='password2' placeholder='تکرار رمز عبور' onChange={handleChange} value={formData.password2} />
            </div>
            <div className='operations'>
              <button type='submit'>ثبت نام</button>
            </div>
            <div className='back-site'>
              <a href='/'>
                <div className='icon'>
                  <i className="fa-solid fa-angle-right"></i>
                </div>
                <span>بازگشت به صفحه اصلی</span>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className='left-side'>
        <img src='./images/PosterYM.jpg' alt='login' />
      </div>
    </div>
    </>
  );
};

export default SignUp;
