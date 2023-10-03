import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showKYCModal, setShowKYCModal] = useState(false); // State to control the KYC modal

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogin = () => {
    setShowKYCModal(true); // Show the KYC modal when Login is clicked
  };

  const handleCloseKYCModal = () => {
    setShowKYCModal(false); // Close the KYC modal
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[black]'>SUITS</h1>
      <ul className='hidden md:flex space-x-4'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Consult An Expert</li>
        <li className='p-4'>Find Lawyer</li>
        <li className='p-4'>Login</li>
        <li className='p-4 cursor-pointer' onClick={handleLogin}>
          <AiOutlineUser size={20} className='inline-block mr-2' />
          Register
        </li>
        
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[black] m-4'>REACT.</h1>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>Find Lawyer</li>
        <li className='p-4'>Contact</li>
      </ul>
      {/* KYC Modal */}
    


{showKYCModal && (
  <div className='fixed top-0 left-0 w-full h-full bg-opacity-50 bg-yellow-200 flex items-center justify-center'>
    <div className='bg-white p-8 rounded-lg'>
      <h2 className='text-xl font-semibold mb-4 text-black'>KYC Details</h2>
      {/* Add input fields for KYC details */}
      <input type='text' placeholder='Name' className='mb-2 w-full p-2 rounded' />
      <input type='text' placeholder='Phone Number' className='mb-2 w-full p-2 rounded' />
      <input type='text' placeholder='Address' className='mb-2 w-full p-2 rounded' />
      <input type='text' placeholder='Government ID Number' className='mb-2 w-full p-2 rounded' />
      <input type='text' placeholder='Kind of Case' className='mb-2 w-full p-2 rounded' />
      <input type='text' placeholder='Budget' className='mb-2 w-full p-2 rounded' />
      <button onClick={handleCloseKYCModal} className='bg-black text-white rounded-md font-medium w-full py-2'>
        Submit
      </button>
    </div>
  </div>
)}



      {/* Updated Background Color */}
      <style jsx>
        {`
          .flex {
            background-color: #3498db; /* Blue background color */
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;