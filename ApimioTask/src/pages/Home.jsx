import React from 'react'
import useUser from '../hooks/useUser'

const Home = () => {
  const user = useUser()

  return (
    <div className='bg-background h-[calc(100vh-57px)] flex justify-center items-center flex-col'>
      <div className='divide-y-2 bg-white shadow py-8 px-5 gap-2'>
        <div className="flex flex-col py-4">
          <label className="text-lg font-medium leading-5 mb-1 text-gray-700">Id</label>
          <h1 className='text-xl font-extrabold'>{user.id}</h1>
        </div>
        <div className="flex flex-col py-4">
          <label className="text-lg font-medium leading-5 mb-1 text-gray-700">Name</label>
          <h1 className='text-xl font-extrabold'>{user.name}</h1>
        </div>
        <div className="flex flex-col py-4">
          <label className="text-lg font-medium leading-5 mb-1 text-gray-700">Email</label>
          <h1 className='text-xl font-extrabold'>{user.email}</h1>
        </div>
      </div>
    </div>
  )
}

export default Home