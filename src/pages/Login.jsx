import './Login.css';
import { Link, Navigate, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isLogin')) {
      navigate('/login');
    }
  }, [navigate]);
  useEffect(() => {
    let userObject = JSON.parse(localStorage.getItem('isLogin'));
    if (userObject != null) {
      if (userObject.role === 'Admin') {
        navigate('/admin');
      } else if (userObject.role === 'User') {
        navigate('/user');
      }
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const roles = ['Admin', 'User'];

  const userArray = [
    {
      username: 'user1@gmail.com',
      password: '1222',
      fullname: 'User1',
      role: 'User',
    },
    {
      username: 'user2@gmail.com',
      password: '1222',
      fullname: 'User2',
      role: 'User',
    },
    {
      username: 'user3@gmail.com',
      password: '1222',
      fullname: 'User3',
      role: 'User',
    },
    {
      username: 'admin@gmail.com',
      password: '1222',
      fullname: 'Admin',
      role: 'Admin',
    },
  ];

  const onLoginClick = (data) => {
    let status = false;
    let i = 0;
    for (i = 0; i < userArray.length; i++) {
      if (data.username === userArray[i].username && data.pwd === userArray[i].password && data.role === userArray[i].role) {
        status = true;
        break;
      }
    }
    if (status) {
      localStorage.setItem('isLogin', JSON.stringify(userArray[i]));
      if (data.role === 'Admin') {
        navigate('/admin');
      } else if (data.role === 'User') {
        navigate('/user');
      }
    } else {
      toast.error('Invalid Login Credentials');
      reset();
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

     
        <div className="login-cont">
          <form onSubmit={handleSubmit(onLoginClick)}>
            <div className="title">
              <h2>Login</h2>
            </div>
            <div className="input-field">
              <label>Username</label>
              <input
                type="email"
                {...register('username', {
                  required: 'Username is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid username',
                  },
                })}
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className="input-field">
              <label>Password</label>
              <input
                type="password"
                {...register('pwd', {
                  required: 'Password is required',
                })}
              />
              {errors.pwd && <p>{errors.pwd.message}</p>}
            </div>
            <div className="input-field">
              <label>Role</label>
              <select {...register('role', { required: 'Role is required' })}>
                <option value="">Select Role</option>
                {roles.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.role && <p>{errors.role.message}</p>}
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      
    </>
  );
}
