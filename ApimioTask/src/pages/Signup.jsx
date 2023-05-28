import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import SignupForm from '../components/forms/SignupForm'
import { userActions } from '../redux/slices/userSlice'
import generateUniqueId from '../utils/generateUniqueId'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.user.allUsers);

  const handleRegistration = (formData) => {
    if (allUsers.find(user => { return (user.email === formData.email) })) {
      toast.error('Email already registered')
      return
    }
    const userWithId = { ...formData, id: generateUniqueId() };
    dispatch(userActions.addUser(userWithId));
    toast.success('Registered successfully')
    navigate('/');
  }

  return (
    <div className='bg-background flex flex-col justify-center items-center h-screen'>
      <img className='mb-6 mx-auto h-12' src={'https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png'} alt="" />
      <h1 className='mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900'>Create new account</h1>
      <p className='mb-8 font-medium text-center'>Or <span onClick={() => navigate('/')} className='cursor-pointer text-indigo-600 hover:text-indigo-400'>sign in to your existing account</span></p>
      <SignupForm handleRegistration={handleRegistration} />
    </div>
  )
}

export default Signup