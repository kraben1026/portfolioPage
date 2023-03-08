import './header.css';

import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const toGo = (link) =>{
        navigate(link)
      }
  return (
    <div className='headerContainer'>
      <h3 className='headerH3' onClick={() => toGo('/home')}> Home</h3>
      <h3 className='headerH3' onClick={() => toGo('/skills')}> Skills </h3>
      <h3 className='headerH3' onClick={() => toGo('/projects')}> Projects </h3>
      <h3 className='headerH3' onClick={() => toGo('/contact')}> Contact </h3>
      <h3 className='headerH3' onClick={() => toGo('/blog')}> Blog</h3>
    </div>
  );
};

export default Header;
