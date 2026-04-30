// import React, { useContext, useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Doctors = () => {
//   const { speciality } = useParams()
//   const [filterDoc, setFilterDoc] = useState([])
//   const { doctors } = useContext(AppContext)
//   const navigate = useNavigate()

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
//     } else {
//       setFilterDoc(doctors)
//     }
//   }

//   useEffect(() => {
//     applyFilter()
//   }, [doctors, speciality])

//   return (
//     <div className='flex flex-col items-center gap-6 my-10'>
//       <p className='text-lg'>Browse through the doctors by specialty.</p>
//       <div className='flex flex-col flex-row items-start gap-5 mt-5'>
//                 <div className='flex flex-col gap-4 mb-6 text-sm text-gray-600'>
//                     <p onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('./doctors/General Physician')} className={`w-[96vw] text-[16px] sm:w-auto pl-3 py-2 pr-16 border border-gray-300 rounded transition-all cursor-pointer]`} >General Physician</p>
//                     <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('./doctors/Gynecologist')} className={`w-[96vw] text-[16px] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer]`} >Gynecologist</p>
//                     <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('./doctors/Dermatologist')} className={`w-[96vw] text-[16px] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer]`} >Dermatologist</p>
//                     <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('./doctors/Pediatricians')} className={`w-[96vw] text-[16px] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer]`} >Pediatricians</p>
//                     <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('./doctors/Neurologist')} className={`w-[96vw] text-[16px] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer]`} >Neurologist</p>
//                     <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('./doctors/Gastroenterologist')} className={`w-[96vw] text-[16px] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer]`} >Gastroenterologist</p>
//                   </div>

//                   <div className='flex flex-wrap justify-center gap-6'>
//                     {filterDoc.length === 0 ? (
//                       <p>No doctors found.</p>
//                     ) : (
//                       filterDoc.map((item, index) => (
//                         <div
//                           onClick={() => navigate(`/appointment/${item._id}`)}
//                           key={index}
//                           className='w-[260px] border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
//                         >
//                           <img
//                             className='bg-blue-50 w-full h-60 object-cover'
//                             src={item.image}
//                             alt={item.name}
//                           />
//                           <div className='p-4'>
//                             <div className='flex items-center gap-2 text-sm text-green-500'>
//                               <p className='w-2 h-2 bg-green-500 rounded-full'></p>
//                               <p>Available</p>
//                             </div>
//                             <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                             <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                           </div>
//                         </div>
//                       ))
//                     )}
//                   </div>
//                 </div>

//     </div>
//   )
// }

// export default Doctors
  
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()


  const specialities = [
    'General Physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ]


  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className='flex flex-col items-center gap-6 my-10 px-4 sm:px-10'>
      <h1 className='text-2xl sm:text-3xl font-semibold'>Browse Doctors by Specialty</h1>
      <p className='text-gray-600 text-sm sm:text-base'>
        Select a specialty to view available doctors.
      </p>

      <div className='flex flex-col sm:flex-row gap-6 mt-5 w-full'>

      
        <div className='flex flex-row sm:flex-col gap-4 sm:w-1/4'>
          {specialities.map(spec => (
            <p
              key={spec}
              onClick={() =>
                speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)
              }
              className={`w-full sm:w-auto pl-4 py-2 border border-gray-300 rounded cursor-pointer text-sm sm:text-base transition-all hover:bg-gray-100 ${
                speciality === spec ? 'bg-blue-100 font-medium' : 'bg-white'
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className='flex-1 flex flex-wrap justify-center gap-6'>
          {filterDoc.length === 0 ? (
            <p className='text-gray-500'>No doctors found.</p>
          ) : (
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className='w-[260px] border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
              >
                <img
                  className='bg-blue-50 w-full h-60 object-cover'
                  src={item.image}
                  alt={item.name}
                />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  )
}

export default Doctors
