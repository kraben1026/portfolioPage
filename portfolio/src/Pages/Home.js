import './home.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarPro from '../components/Sidebar';
import Header from '../components/Header';

const Home = () => {
    
    const[mainContent, setMainContent] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        setMainContent(false)
    }, [])
    const mainContentClass = `${mainContent ? 'mainContent' : 'mainContentAfter'}`
  return (
    <>
    <div><Header/>
  <div className='homeContent'>
         <SidebarPro />    
    <main className={mainContentClass}>
        <h1 className='homeH1'>I'm Bence</h1>
        <h2 className='homeH2'>Web Developer</h2>
        <p className='introduction'>As a full stack web developer, I'm passionate about creating innovative solutions to real-world problems. I have a strong foundation in both front-end and back-end development, and I thrive in collaborative environments where I can work with other creative minds.</p>
    </main>
  </div>
  </div>  
  </>
  )
}

export default Home