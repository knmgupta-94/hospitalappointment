import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios'

const AddDoctor = () => {
  const [doclog, setDoclog] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General Physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const { backendUrl, atoken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (!doclog) {
        return toast.error("image not selected");
      }

      const formData = new FormData()

      formData.append('image', doclog)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('degree', degree)
      formData.append('speciality', speciality)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      formData.forEach((value, key) => {
        console.log(` ${key} : ${value}`)
      })

      console.log('Sending token:', atoken);

      const { data } = await axios.post(
        backendUrl + '/api/admin/add-doctor',
        formData,
        { headers: { atoken: atoken } }
      );

      console.log(data)
      if (data.success) {
        toast.success(data.message)
        setDoclog(false)
        setName('')
        setAbout('')
        setAddress1('')
        setAddress2('')
        setEmail('')
        setFees('')
        setPassword('')
      } else {
        toast.error(data.message)
      }

    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="max-w-3xl mx-auto mt-10 mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
      <p className="text-2xl font-semibold text-gray-700 mb-6">Add Doctor</p>

      {/* Upload Section */}
      <div className="mb-8 text-center">
        <label htmlFor="doc-img" className="cursor-pointer inline-block">
          <img
            src={doclog ? URL.createObjectURL(doclog) : assets.upload_area}
            alt="Upload"
            className="mx-auto mb-2 w-24 h-24 object-contain"
          />
          <p className="text-gray-500 text-sm">Upload doctor <br /> Picture</p>
        </label>
        <input
          onChange={e => setDoclog(e.target.files[0])}
          type="file"
          id="doc-img"
          hidden
          accept="image/*"
        />
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-600 font-medium mb-1">Your name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-600 font-medium mb-1">Doctor email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-gray-600 font-medium mb-1">Doctor password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block text-gray-600 font-medium mb-1">Experience</label>
          <select
            id="experience"
            value={experience}
            onChange={e => setExperience(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={`${i + 1} year`}>{`${i + 1} year`}</option>
            ))}
          </select>
        </div>

        {/* Fees */}
        <div>
          <label htmlFor="fees" className="block text-gray-600 font-medium mb-1">Fees</label>
          <input
            type="number"
            id="fees"
            placeholder="Fees"
            required
            value={fees}
            onChange={e => setFees(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Speciality */}
        <div>
          <label htmlFor="speciality" className="block text-gray-600 font-medium mb-1">Speciality</label>
          <select
            id="speciality"
            value={speciality}
            onChange={e => setSpeciality(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          >
            <option value="General Physician">General Physician</option>
            <option value="Gynacologist">Gynacologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
          </select>
        </div>

        {/* Education */}
        <div>
          <label htmlFor="education" className="block text-gray-600 font-medium mb-1">Education</label>
          <input
            type="text"
            id="education"
            placeholder="Education"
            required
            value={degree}
            onChange={e => setDegree(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label className="block text-gray-600 font-medium mb-1">Address</label>
          <input
            type="text"
            placeholder="Address 1"
            required
            value={address1}
            onChange={e => setAddress1(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <input
            type="text"
            placeholder="Address 2"
            required
            value={address2}
            onChange={e => setAddress2(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* About Doctor */}
      <div className="mb-6">
        <label htmlFor="about" className="block text-gray-600 font-medium mb-1">About Doctor</label>
        <textarea
          id="about"
          rows={5}
          placeholder="Write about doctor"
          required
          value={about}
          onChange={e => setAbout(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"

          className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
