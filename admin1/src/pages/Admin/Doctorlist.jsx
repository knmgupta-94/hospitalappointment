import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const Doctorlist = () => {
  const {doctors, atoken , getAllDoctors} = useContext(AdminContext)

  useEffect(() => {
    if(atoken){
      getAllDoctors()
    }
  },[atoken])

  return (
    <div>
       <h1>All Doctors</h1>
       <div>
          {doctors.length > 0 ? (
            doctors.map((item, index) => (
              <div key={index} className="doctor-card">
                <img src={item.image} alt={item.name} width="120" />
                <h3>{item.name}</h3>
                <p>Speciality: {item.speciality}</p>
                <p>Degree: {item.degree}</p>
                <p>Experience: {item.experience} years</p>
              </div>
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>

    </div>
  )
}

export default Doctorlist