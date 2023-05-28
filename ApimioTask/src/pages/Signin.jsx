import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import SigninForm from '../components/forms/SigninForm'
import useAllUsers from '../hooks/useAllUsers'
import { userActions } from '../redux/slices/userSlice'

const Signin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const allUsers = useAllUsers()
  const from = location.state?.from?.pathname || "/home";

  const handleLogin = (formData) => {
    const user = allUsers.find((user) => user.email === formData.email);

    if (!user) {
      toast.error('Incorrect Credential');
    }
    else {
      if (formData.password !== user.password) {
        toast.error('Incorrect Credential');
      }
      else {
        const userWithoutPassword = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
        dispatch(userActions.setUser(userWithoutPassword));
        navigate(from, { replace: true });
        toast.success('Login successful');
      }
    }
  };

  return (
    <div className='bg-background flex flex-col justify-center items-center h-screen'>
      <img className='mb-6 mx-auto h-12' src={'https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png'} alt="" />
      <h1 className='mb-2 text-center text-3xl leading-9 font-extrabold text-gray-900'>Sign in to your account</h1>
      <p className='mb-8 font-medium text-center'>Or <span onClick={() => navigate('/signup')} className='cursor-pointer text-indigo-600 hover:text-indigo-400'>register</span></p>
      <SigninForm handleLogin={handleLogin} />
    </div>
  )
}

export default Signin