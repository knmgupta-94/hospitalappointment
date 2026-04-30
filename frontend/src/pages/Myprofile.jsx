import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Myprofile = () => {
  const [userData, setUserdata] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "tsriram807@gmail.com",
    phone: '+1 2324 26273',
    address: {
      line1: "%7th Cross, Richmond",
      line2: "Circle , Church Road , London"
    },
    gender: "Male",
    dob: '2000-12-25' // corrected date format for input type="date"
  })
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-6 text-base'>
      <div className='flex flex-col items-center gap-3'>
        <img className='w-36 h-36 rounded-full object-cover border-4 border-blue-100 shadow' src={userData.image} alt="" />
        {
          isEdit
            ? <input
                className='bg-gray-100 text-3xl font-semibold max-w-60 text-center rounded-md border border-gray-200 p-2 mt-2 outline-blue-400'
                type='text'
                value={userData.name}
                onChange={e => setUserdata(prev => ({ ...prev, name: e.target.value }))}
              />
            : <p className='font-semibold text-3xl text-neutral-800 mt-2'>{userData.name}</p>
        }
      </div>

      <hr className='bg-zinc-200 h-[1px] border-none' />

      <div>
        <p className='text-blue-800 font-medium mb-3 tracking-wide'>Contact Information</p>
        <div className='grid grid-cols-[110px_1fr] gap-y-2 gap-x-4 text-neutral-700'>
          <p className='font-medium'>Email:</p>
          <p className='text-blue-500 break-all'>{userData.email}</p>
          
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input
                  type='text'
                  className='bg-gray-100 rounded-md border border-gray-200 p-1 max-w-48 outline-blue-400'
                  value={userData.phone}
                  onChange={e => setUserdata(prev => ({ ...prev, phone: e.target.value }))}
                />
              : <p>{userData.phone}</p>
          }

          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <div className='flex flex-col gap-1'>
                  <input
                    className='bg-gray-100 rounded-md border border-gray-200 p-1 outline-blue-400'
                    onChange={e => setUserdata(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                    value={userData.address.line1}
                    type='text'
                  />
                  <input
                    className='bg-gray-100 rounded-md border border-gray-200 p-1 outline-blue-400'
                    onChange={e => setUserdata(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                    value={userData.address.line2}
                    type='text'
                  />
                </div>
              : <div>
                  {userData.address.line1}<br />
                  {userData.address.line2}
                </div>
          }
        </div>
      </div>

      <div>
        <p className='text-blue-800 font-medium mb-3 tracking-wide'>Basic Information</p>
        <div className='grid grid-cols-[110px_1fr] gap-y-2 gap-x-4'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select
                  className='bg-gray-100 rounded-md border border-gray-200 p-1 outline-blue-400'
                  onChange={(e) => setUserdata(prev => ({...prev,gender: e.target.value}))}
                  value={userData.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              : <p>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit 
              ? <input
                  type="date"
                  className='bg-gray-100 rounded-md border border-gray-200 p-1 outline-blue-400'
                  onChange={(e) => setUserdata(prev => ({...prev, dob: e.target.value}))}
                  value={userData.dob}
                />
              : <p>{userData.dob}</p>
          }
        </div>
      </div>
      <div className='flex justify-end'>
        {
          isEdit
            ? <button
                onClick={() => setIsEdit(false)}
                className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition'
              >Save Information</button>
            : <button
                onClick={() => setIsEdit(true)}
                className='bg-blue-100 text-blue-800 hover:bg-blue-200 px-6 py-2 rounded-full font-semibold transition'
              >Edit</button>
        }
      </div>
    </div>
  )
}

export default Myprofile
