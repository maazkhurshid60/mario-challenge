import React from 'react'
import './page_1.style.scss'

import marioChLogo from '../../assets/svgs/mario-ch-logo.svg';
import marioChTitle from '../../assets/svgs/mario-ch-title.svg';
import marioChHeading from '../../assets/svgs/mario-ch-heading.svg';
import startBtn from '../../assets/svgs/start-btn.svg';
import { useNavigate } from 'react-router-dom';


function Page1() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/p2');
  }

  return (
    <div className='page-1'>
      <img src={marioChLogo} className='mario-ch-logo'/>
      <img src={marioChTitle} className='mario-ch-title'/>
      <img src={marioChHeading} className='mario-ch-heading'/>
      <img onClick={handleNavigate} src={startBtn} className='start-btn'/>
    </div>
  )
}

export default Page1