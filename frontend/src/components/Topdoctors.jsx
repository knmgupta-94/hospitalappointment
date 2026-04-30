// import React from 'react'
// import { doctors } from '../assets/assets'

// const Topdoctors = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10' >
//         <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
//         <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
//         <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
//             {doctors.slice(0,10).map((item,index)=>(
//                 <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'key={index}>
//                     <img className='bg-blue-50' src={item.image} alt='' />
//                     <div className='p-4'>
//                         <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                             <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
//                         </div>
//                         <p className='text-gray-900 text-ig font-medium'>{item.name}</p>
//                         <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                     </div>

//                 </div>
//             ))}
//         </div>
//         <button>more</button>
//     </div>
//   )
// }

// export default Topdoctors
import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Topdoctors = () => {
    
  const {doctors} = useContext(AppContext);
  const firstRow = doctors.slice(0, 5)
  const secondRow = doctors.slice(5, 10)

  const navigate = useNavigate();
  

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* First row - top 5 doctors */}
      <div className='w-full flex flex-wrap justify-center gap-4 pt-5 px-3 sm:px-0'>
        {firstRow.map((item, index) => (
          <div
          onClick={(()=>{navigate(`/appointment/${item._id}`), scrollTo(0,0)})}
            key={index}
            className='w-[260px] border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
          >
            <img className='bg-blue-50 w-full h-60 object-cover' src={item.image} alt='' />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second row - next 5 doctors */}
      <div className='w-full flex flex-wrap justify-center gap-4 pt-5 px-3 sm:px-0'>
        {secondRow.map((item, index) => (
          <div
          onClick={(()=>{navigate(`/appointment/${item._id}`), scrollTo(0,0)})}
            key={index}
            className='w-[260px] border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
          >
            <img className='bg-blue-50 w-full h-60 object-cover' src={item.image} alt='' />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => { navigate('/doctors'); scrollTo(0,0)}} className='mt-6 px-10 py-4 bg-blue-500 text-lg text-white rounded-full hover:bg-blue-600 transition'>
        More
      </button>
    </div>
  )
}

export default Topdoctors
