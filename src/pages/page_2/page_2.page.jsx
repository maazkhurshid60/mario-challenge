import React, { useEffect } from 'react'
import './page_2.style.scss';

import anime from 'animejs';

import cloud from '../../assets/svgs/cloud.svg';
import marioPlayer from '../../assets/svgs/mario-player.svg';

import { randomCloudAnimations, fadeOutAnimation } from '../../utils/helper_functions';
import { useNavigate } from 'react-router-dom';

function Page2() {

  const navigate = useNavigate();
  const playMarioAnimation = async () => {
    const tl = anime.timeline();

    tl.add({
      targets: '.mario',
      translateX: '750px',
      easing: 'linear',
      loopBegin: false,
      loopComplete: false,
      duration: 2000
    });

    await tl.finished;
    if(tl.completed) {
      setTimeout(navigate('/p3'), 2000);
    }
  }

  useEffect(() => {
    randomCloudAnimations('#c1', 'right', anime.random(10000, 50000));
    randomCloudAnimations('#c2', 'left', anime.random(10000, 50000));
    randomCloudAnimations('#c3', 'left', anime.random(10000, 50000));

    setTimeout(playMarioAnimation, 1000);

  }, []);

  return (
    <div className='page-2'>
      <img src={cloud} className='cloud' id='c1' />
      <img src={cloud} className='cloud' id='c2' />
      <img src={cloud} className='cloud' id='c3' />

      <img src={marioPlayer} className='mario' />

    </div>
  )
}

export default Page2