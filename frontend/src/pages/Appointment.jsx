// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext.jsx'
// import { assets } from '../assets/assets'
// import './Appointment.css'
// const Appointment = () => {
//   const { docId } = useParams()
//   const { doctors ,currencySymbol } = useContext(AppContext)
//   const [docInfo, setDocInfo] = useState(null)

//   const daysofWeek = ['SUN', 'MON', 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT']

//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState('');

//   const fetchDocInfo = () => {
//     const doc = doctors.find(doc => doc._id === docId)
//     setDocInfo(doc)
//     console.log(doc)
//   }

// const getAvailableSlots = () => {
//   let today = new Date()
//   let slots = []

//   for (let i = 0; i < 7; i++) {
//     let currentDate = new Date(today)
//     currentDate.setDate(today.getDate() + i)

//     let endTime = new Date(currentDate)
//     endTime.setHours(21, 0, 0, 0) 

  
//     if (today.getDate() === currentDate.getDate()) {
//       let hours = currentDate.getHours()
//       let minutes = currentDate.getMinutes()

//       if (hours < 10) {
//         currentDate.setHours(10, 0, 0, 0)
//       } else {
//         if (minutes > 30) {
//           currentDate.setHours(hours + 1, 0, 0, 0)
//         } else {
//           currentDate.setMinutes(30, 0, 0, 0)
//         }
//       }
//     } else {
//       currentDate.setHours(10, 0, 0, 0)
//     }

//     while (currentDate < endTime) {
//       let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

//       slots.push({
//         dateTime: new Date(currentDate),
//         time: formattedTime,
//       })

//       currentDate.setMinutes(currentDate.getMinutes() + 30) 
//     }
//   }

//   setDocSlots(slots)

//   if (slots.length > 0) {
//     setSlotIndex(0)
//     setSlotTime(slots[0].time)
//   }
// }


//   useEffect(() => {
//     fetchDocInfo()
//   }, [doctors, docId])

//   useEffect(() => {
//     getAvailableSlots();
//   },[docInfo])

//  useEffect(() => {
//   console.log(docSlots)
// }, [docSlots])


//   return docInfo && (
//      <div>
//         <div className='flex flex-col sm:flex-row gap-4'>
//             <div>
//                 <img className='bg-primary w-full sm:max-w-72 rounded-lg docimg' src={docInfo.image} alt="" />
//             </div>
//             <div className='flex-1 border text-[18px] border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
//                 <p className='text-[30px] font-bold flex center mt-1'>{docInfo.name}<img className='ml-3 mt-1' src={assets.verified_icon} alt=''/></p>
//                 <div className='flex'>
//                     <p className='text-[18px] text-gray-900'> {docInfo.degree} - {docInfo.speciality}</p>
//                     <button className='ml-2 text-[14px] py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
//                 </div>
//                 <div className='mt-1'>
//                     <p className='text-[18px] flex center '>About <img  className='ml-2 text-gray-600' src={assets.info_icon} alt=''/></p>
//                     <p className='text-[18px] text-gray-600 mt-1'>{docInfo.about}</p>
//                 </div>
//                 <p  className='text-[18px] mt-2'>
//                     Appointment fee: <span className='text-[16px]'>{currencySymbol}{docInfo.fees}</span>
//                 </p>
//             </div>
//         </div>
//         <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700' > 
//             <p>Booking Slot</p>
//             <div>
//                 {
//                     docSlots.length && docSlots.map((item, index) => (
//                          <div key={index}>
//                              <p>{item[0] && daysofWeek[item[0].dateTime.getDay()]}</p>
//                              <p>{item[0] && item[0].dateTime.getDate()}</p>  
//                          </div>
//                     ))
//                 }
//             </div>

//         </div>
        
//      </div>
//   )
// }

// export default Appointment


import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import { assets } from '../assets/assets';
import './Appointment.css';
import RelatedDoctors from '../components/RelatedDoctors.jsx';

const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const fetchDocInfo = () => {
    const doc = doctors.find(doc => doc._id === docId);
    setDocInfo(doc);
  };

  const getAvailableSlots = () => {
    let today = new Date();
    let daysArray = [];
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let slots = [];

      let startTime = new Date(currentDate);
      startTime.setHours(10, 0, 0, 0);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      while (startTime < endTime) {
        slots.push({
          dateTime: new Date(startTime),
          time: startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
        });

        startTime.setMinutes(startTime.getMinutes() + 30);

      }
      daysArray.push({

        label: `${daysofWeek[currentDate.getDay()]} ${currentDate.getDate()}`,
        slots: slots

      });
    }
    setDocSlots(daysArray);
  };

  useEffect(() => { fetchDocInfo(); }, [doctors, docId]);
  useEffect(() => { if (docInfo) getAvailableSlots(); }, [docInfo]);
  useEffect(() => { setSelectedSlot(null); }, [selectedDay]);

  return docInfo && (
    <div>
      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg docimg" src={docInfo.image} alt="" />
        </div>
        <div className="flex-1 border text-[18px] border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="text-[30px] font-bold flex center mt-1">{docInfo.name}
            <img className="ml-3 mt-1" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex">
            <p className="text-[18px] text-gray-900">{docInfo.degree} - {docInfo.speciality}</p>
            <button className="ml-2 text-[14px] py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
          </div>
          <div className="mt-1">
            <p className="text-[18px] flex center ">
              About
              <img className="ml-2 text-gray-600" src={assets.info_icon} alt="" />
            </p>
            <p className="text-[18px] text-gray-600 mt-1">{docInfo.about}</p>
          </div>
          <p className="text-[18px] mt-2">
            Appointment fee: <span className="text-[16px]">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slot Section */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p className="mb-2">Booking slots</p>
        {/* Day Selector */}
        <div className="flex gap-3 mb-4">
          {docSlots.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`px-6 py-3 rounded-full font-semibold border cursor-pointer
                ${selectedDay === idx
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-transparent text-gray-700 border-gray-300'
                }`}
              style={{ minWidth: '90px', height: '48px' }} // ensure fixed size
            >
              {day.label}
            </button>
          ))}
        </div>
        {/* Horizontal row of time slots */}
        <div
          className="flex gap-3 overflow-x-auto pb-2"
          style={{ whiteSpace: 'nowrap', scrollbarWidth: 'thin' }}
        >
          {docSlots[selectedDay]?.slots.map((slot, i) => (
            <span
              key={i}
              onClick={() => setSelectedSlot(i)}
              className={
                `inline-block px-2 py-4 border rounded-full font-medium cursor-pointer hover:bg-blue-100 
                ${selectedSlot === i 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-gray-50 text-gray-800 border-gray-300'}`
              }
              style={{ minWidth: '95px', textAlign: 'center' }}
            >
              {slot.time}
            </span>
          ))}
        </div>
        <button 
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font- text-lg"
          disabled={selectedSlot === null}
        >
          Book an appointment
        </button>
      </div>

      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};

export default Appointment;
