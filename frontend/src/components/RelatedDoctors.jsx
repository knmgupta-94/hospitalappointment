import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality, docId}) => {

    const { doctors } = useContext(AppContext);

    const [relDoc, setRelDoc] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(doctors.length > 0 && speciality){
            const doctorsData = doctors.filter(
                 (doc) => doc.speciality === speciality && doc._id !== docId
            );
            setRelDoc(doctorsData);

        }

    },[doctors,docId,speciality])

  return (
    <div>
        <div className='w-full flex mt-5 mb-5 flex-col items-center'>
            <h1 className='text-3xl font-medium text-center'>Related Doctors</h1>
            {/* <p className='sm:w-1/3 text-center text-sm'>
            Simply browse through our extensive list of trusted doctors.
            </p> */}
       </div>
       <div className='w-full flex flex-wrap justify-center gap-4 pt-5 px-3 sm:px-0'>
        {relDoc.map((item, index) => (
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

export default RelatedDoctors