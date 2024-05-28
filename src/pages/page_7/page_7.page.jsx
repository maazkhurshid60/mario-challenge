import React from 'react'
import './page_7.style.scss'

import marioChLogo from '../../assets/svgs/mario-ch-logo.svg';
import gameOverHeading from '../../assets/svgs/gameover-heading.svg';
import restartBtn from '../../assets/svgs/restart-btn.svg';
import { useNavigate } from 'react-router-dom';

function Page7() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }

  return (
    <div className='page-7'>
      <img src={marioChLogo} className='mario-ch-logo'/>
      <img src={gameOverHeading} className='gameover-heading'/>
      <img onClick={handleNavigate} src={restartBtn} className='restart-btn'/>
    </div>
  )
}

export default Page7