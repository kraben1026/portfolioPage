import './home.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarPro from '../components/Sidebar';

const Home = () => {
    
   
    const navigate = useNavigate();

  return (
    <>
  <div className='content'>
    <SidebarPro />
    
  </div>
  </>
  )
}

export default Home