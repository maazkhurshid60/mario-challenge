import React, { useEffect } from 'react';
import './page_6.style.scss';

import anime from 'animejs';

import cloud from '../../assets/svgs/cloud.svg';
import marioPlayer from '../../assets/svgs/mario-player.svg';

import castle from '../../assets/svgs/decorations/castle.svg';

import { randomCloudAnimations } from '../../utils/helper_functions';
import { useNavigate } from 'react-router-dom';

function Page6() {

  const navigate = useNavigate();

  const playMarioAnimation = async () => {
    const tl = anime.timeline();

    tl.add({
      targets: '.mario',
      translateX: '45rem',
      easing: 'linear',
      loop: false,
      duration: 2000
    })
    .add({
      targets: '.mario',
      easing: 'linear',
      scaleX: [1, 0],
      loop: false,
    });

    await tl.finished;
    if(tl.completed) {
      navigate('/p7');
    }

  };

  useEffect(() => {
    randomCloudAnimations('#c1', 'right', anime.random(10000, 50000));
    randomCloudAnimations('#c2', 'left', anime.random(10000, 50000));
    randomCloudAnimations('#c3', 'right', anime.random(10000, 50000));

    playMarioAnimation();
  }, []);

  return (
    <div className='page-6'>
      <img src={cloud} className='cloud' id='c1' />
      <img src={cloud} className='cloud' id='c2' />
      <img src={cloud} className='cloud' id='c3' />

      <img src={castle} className='castle' />

      <img src={marioPlayer} className='mario' />


    </div>
  )
}

export default Page6