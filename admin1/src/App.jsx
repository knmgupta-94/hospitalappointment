import React, { useContext } from 'react';
import Login from './pages/Login';
import AdminContextProvider, { AdminContext } from './context/AdminContext.jsx';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import AllAppointments from './pages/Admin/AllAppointments.jsx';
import AddDoctor from './pages/Admin/AddDoctor.jsx';
import Doctorlist from './pages/Admin/Doctorlist.jsx';

const AppWrapper = () => {
  return (
    <AdminContextProvider>
      <App />
    </AdminContextProvider>
  );
};

const App = () => {
  const { atoken } = useContext(AdminContext);

  return (
    <>
      <ToastContainer />
      {atoken ? (
        <>
          <Navbar />
          <div className='flex min-h-screen items-start'>
            <Sidebar />
            <Routes>
              <Route path='/' element={<></>} />
              <Route path='/admin-dashboard' element={<Dashboard />} />
              <Route path='/all-appointments' element={<AllAppointments />} />
              <Route path='/add-doctors' element={<AddDoctor />} />
              <Route path='/doctor-list' element={<Doctorlist />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
};

export default AppWrapper;
