import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../redux/slices/userSlice';
import logoutIcon from './../assets/navbar/logout.svg';

const Navbar = ({ children }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userActions.setUser({}));
  }

  return (
    <>
      <div className='px-4 flex items-center justify-between bg-indigo-600 w-full h-[57px]'>
        <img className='h-9' src={'https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png'} alt="" />
        <img onClick={logoutHandler} src={logoutIcon} className='cursor-pointer' title='logout' alt="" />
      </div>
      {children}
    </>
  )
}

export default Navbar