import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { atoken, setToken } = useContext(AdminContext);

    const navigate = useNavigate()

    const Logout = () => {
        navigate('/')
        if (atoken) {
            setToken('');
            localStorage.removeItem('aToken');
        }
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <img src={assets.admin_logo} alt="" />
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500'>
                    {atoken ? 'Admin' : 'Doctor'}
                </p>
            </div>
            {/* Render Logout button only if atoken exists */}
            {atoken && (
                <button onClick={Logout} className='bg-[#5f6FFF] text-white text-[15px] px-10 py-3 rounded-full'>
                    Logout
                </button>
            )}
        </div>
    )
}

export default Navbar;
