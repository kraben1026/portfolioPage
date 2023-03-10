import './header.css';

import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const toGo = (link) =>{
        navigate(link)
      }
  return (
    <div className='headerContainer'>
      <div className="headerTitleWrapper">
        <h2 className='headerTitle' onClick={() => toGo('/home')}>bencekracsko.dev</h2>
      </div>
      <h3 className='headerH3' onClick={() => toGo('/home')}> Home</h3>
      <h3 className='headerH3' onClick={() => toGo('/about')}> About </h3>
      <h3 className='headerH3' onClick={() => toGo('/projects')}> Projects </h3>
      <h3 className='headerH3' onClick={() => toGo('/contact')}> Contact </h3>
      <h3 className='headerH3' onClick={() => toGo('/blog')}> Blog</h3>
    </div>
  );
};

export default Header;
