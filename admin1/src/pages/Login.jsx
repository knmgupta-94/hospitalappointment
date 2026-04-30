// import React, { useContext, useState } from 'react';
// import './Login.css';
// import { AdminContext } from '../context/AdminContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [state, setState] = useState('Admin');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const { setToken, backendUrl } = useContext(AdminContext);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       if (state === 'Admin') {
//         const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });
//         if (data.success) {
//           localStorage.setItem('aToken', data.aToken);
//           setToken(data.aToken); // this updates the context and triggers re-render
//           toast.success('Login successful!');
//         } else {
//           toast.error(data.message);
//         }
//       } else {
//         // handle Doctor login if needed
//       }
//     } catch (error) {
//       toast.error('Something went wrong!');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-[100vh] flex items-center justify-center bg-gray-100">
//       <form onSubmit={onSubmitHandler} className="flex flex-col gap-6 p-8 w-full max-w-md bg-white rounded-xl min-w-[340px] pb-4 sm:min-w-96 text-sm shadow-lg">
//         <h2 className="text-2xl font-semibold m-auto text-gray-800">
//           {state} Login
//         </h2>

//         <div className="flex flex-col w-full">
//           <label className="mb-1 text-gray-600">Email</label>
//           <input
//             type="email"
//             required
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="flex flex-col w-full">
//           <label className="mb-1 text-gray-600">Password</label>
//           <input
//             type="password"
//             required
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-96 m-auto bg-blue-500 mb-[-10px]
//            text-white text-[18px] py-2 rounded-md hover:bg-blue-600 transition-colors"
//         >
//           Login
//         </button>

//         {state === 'Admin' ? (
//           <p className='mb-5 text-[15px]'>
//             Doctor Login! <span className='underline cursor-pointer' onClick={() => setState('Doctor')}>Click Here</span>
//           </p>
//         ) : (
//           <p className='mb-5 text-[15px]'>
//             Admin Login! <span className='underline cursor-pointer' onClick={() => setState('Admin')}>Click Here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import './Login.css';
import { AdminContext } from '../context/AdminContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });
        console.log('Login response data:', data);

        if (data.success) {
          localStorage.setItem('aToken', data.token);
          setToken(data.token);
          toast.success('Login successful!');
        }
        else {
          toast.error(data.message);
        }
      } else {
        
        toast.info('Doctor login not implemented yet');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong during login!');
    }
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gray-100">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-6 p-8 w-full max-w-md bg-white rounded-xl min-w-[340px] pb-4 sm:min-w-96 text-sm shadow-lg"
      >
        <h2 className="text-2xl font-semibold m-auto text-gray-800">
          {state} Login
        </h2>

        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Email</label>
          <input
            type="email"
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Password</label>
          <input
            type="password"
            required
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-96 m-auto bg-blue-500 mb-[-10px]
           text-white text-[18px] py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>

        {state === 'Admin' ? (
          <p className='mb-5 text-[15px]'>
            Doctor Login? <span className='underline cursor-pointer' onClick={() => setState('Doctor')}>Click Here</span>
          </p>
        ) : (
          <p className='mb-5 text-[15px]'>
            Admin Login? <span className='underline cursor-pointer' onClick={() => setState('Admin')}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

