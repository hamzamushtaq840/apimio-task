import React from 'react'
import useUser from '../hooks/useUser'

const Home = () => {
  const user = useUser()

  return (
    <div className='bg-background h-[calc(100vh-57px)] flex justify-center items-center flex-col'>
      <h1 className='mb-5 text-center text-3xl leading-9 font-bold text-gray-900'>User Details</h1>
      <div className='divide-y-2 bg-white shadow py-6 px-12 rounded-lg gap-2 xsm:px-6'>
        <div className="flex flex-col py-8">
          <label className="text-lg font-medium leading-5 mb-1 text-gray-700 xsm:text-md">Id :</label>
          <h1 className='text-xl font-bold xsm:text-lg'>{user.id}</h1>
        </div>
        <div className="flex flex-col py-8">
          <label className="text-lg font-medium leading-5 mb-1 text-gray-700 xsm:text-md">Name :</label>
          <h1 className='text-xl font-bold xsm:text-lg'>{user.name}</h1>
        </div>
        <div className="flex flex-col py-8">
          <label className="text-lg font-medium leading-5 mb-1 text-gray-700 xsm:text-md">Email :</label>
          <h1 className='text-xl font-bold xsm:text-lg'>{user.email}</h1>
        </div>
      </div>
    </div>
  )
}

export default Home