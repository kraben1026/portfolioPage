import './main.css';
import { useEffect, useState } from 'react';

const Main = () => {
    const [welcome, setWelcome] = useState(true);
    const [right, setRight] = useState(true);
    const [left, setLeft] = useState(true);
    

    useEffect(() =>{
        setTimeout(() => {
            setRight(false)
            setLeft(false)
        }, 2000);
    }, [])
    const rightClasses = `${right ? 'right' : 'right2'}`;
    const leftClasses = `${left ? 'left' : 'left2'}`;


  return (
    <>
  <div className='mainWrapper'>
    <div className={leftClasses}>
      <h1 className="title"> WEL </h1>
    </div>
    <div className={rightClasses}>
      <h1 className="title2"> COME. </h1>
    </div>
  </div>

  <div className='content'>
    <p>Content of main</p>
  </div>
</>
)
}

export default Main