import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './MyAppointment.css'

const MyAppointment = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div>
      <h2 className='pb-3 mt-12 text-[20px] font text-zinc-700 '>My Appointments</h2>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div 
            key={index}
            className="flex items-start justify-between gap-6 py-6 "
          >
            <div className='flex gap-5 flex-1 min-w-0'>
              <img
                src={item.image}
                alt={item.name}
                className="w-32 bg-indigo-50 rounded"
              />
              <div className='flex-1 text-sm text-zinc-600 min-w-0'>
                <p className="text-neutral-800 font-semibold">{item.name}</p>
                <p>{item.speciality}</p>
                <p className="text-zinc-700 font-medium">
                  <span className="font-bold">Address: </span><br />
                  {item.address.line1}<br />{item.address.line2}
                </p>
                <p className="text-sm">
                  <span className="text-sm text-neutral-700 font-medium">Date & Time:</span> 7 Nov 2025 | 10:30 AM
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-end min-w-[170px]">
              <button className='text-sm text-stone-500 text-center min-w-48 py-2 border rounded button1'>
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center min-w-48 py-2 border rounded button2">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
