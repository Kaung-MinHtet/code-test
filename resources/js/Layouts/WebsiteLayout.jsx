import Navbar from '@/MyComponents/Navbar'
import Sidebar from '@/MyComponents/Sidebar'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SidebarTwo from '@/MyComponents/SidebarTwo';

const WebsiteLayout = ({ children }) => {
  const [isSidebarOn, setisSidebarOn] = useState(false);
  const [isSidebarTwoOn, setisSidebarTwoOn] = useState(false);

  return (
    <div>
      <Navbar isSidebarOn={isSidebarOn} setisSidebarOn={setisSidebarOn} setisSidebarTwoOn={setisSidebarTwoOn} />
      <Sidebar isSidebarOn={isSidebarOn} setisSidebarOn={setisSidebarOn} />
      <SidebarTwo isSidebarTwoOn={isSidebarTwoOn} setisSidebarTwoOn={setisSidebarTwoOn} />
      {/* <div className='fixed bottom-12 right-6'>
        <button className="p-4 bg-red-700 rounded-full text-white">
          <AddIcon />
        </button>
      </div> */}
      {children}
      <div className="grid grid-cols 1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-20 py-10 bg-gray-100">
        <div>
          <h5 className='text-lg font-bold mb-2'>COMPANY</h5>
          <div className="flex flex-col gap-2">
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>About Us</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>News & Events</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Annual Reports</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Newsletter</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Careers</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Contacts</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>AML/CFT Awareness Training Material</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Payment Info</p>
          </div>
        </div>
        <div>
          <h5 className='text-lg font-bold mb-2'>SERVICES</h5>
          <div className="flex flex-col gap-2">
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>My AYASOMPO</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>E-Payments</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Claims</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Premium Calculator</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Book An Appointment</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Location Map</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Understand Insurance</p>
            <p className='hover:text-red-700 duration-200 text-gray-500 cursor-pointer'>Authorised Workshops</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">GET IN TOUCH</h4>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <ApartmentIcon className='text-red-700' />
              <p className='text-gray-500'>No.245, Corner of Maha Bandula Road and 46th Street, Botahtaung Township, Yangon, Myanmar</p>
            </div>
            <div className="flex gap-4">
              <PhoneIcon className='text-red-700' />
              <p className='text-gray-500'>01- 9010941,
              01- 9010942,
              01- 9010943,
              01- 9010944</p>
            </div>
            <div className="flex gap-4">
              <AccessTimeIcon className='text-red-700' />
              <p className='text-gray-500'>9am to 5pm<br/>
              Monday to Friday</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">SUBSCRIBE</h4>
          <p className='text-gray-500 mb-2'>Receive resources & tools that can help you prepare for the future. You can cancel anytime.</p>
          <input type="email" placeholder='YOUR MAIL HERE' className='text-center w-full mb-2' />
          <button className='bg-red-700 text-white w-full py-3 rounded-sm hover:bg-black duration-300'>SUBSCRIBE NOW</button>
        </div>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 px-20 py-10 bg-gray-100 '>
        <div className='text-gray-500 text-center md:text-left'>
          <p>&#169;	2025 AYA SOMPO.</p>
          <p>All rights reserved by AYA SOMPO Insurance Company Limited.</p>
        </div>

        <div className='text-gray-500 text-center md:text-right'>
          <p className='text-sm'>Design and developed by <span className='text-red-700'>Salt & Pixel</span></p>
        </div>
      </div>
    </div>
  )
}

export default WebsiteLayout
