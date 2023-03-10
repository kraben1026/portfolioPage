import { BsSun } from 'react-icons/bs'
import { CiDark } from 'react-icons/ci'
import './lightDark.css'

const LightDark = () => {
  return (
    <div className='lightDark' style={{textAlign: 'center'}}>
        <BsSun className="light" style={{color: 'white'}}/>
        <CiDark className="dark" />
    </div>
  );
};

export default LightDark;
