import React, { useEffect } from 'react'
import './page_3.style.scss'

import anime from 'animejs';

import cloud from '../../assets/svgs/cloud.svg';
import marioPlayer from '../../assets/svgs/mario-player.svg';

import doubleBricks from '../../assets/svgs/decorations/brick.svg';
import singleBrick from '../../assets/svgs/decorations/single-brick.svg';
import unknowBrick from '../../assets/svgs/decorations/unknown-brick.svg';

import coin from '../../assets/svgs/decorations/coin.svg';

import { randomCloudAnimations } from '../../utils/helper_functions';
import { useNavigate } from 'react-router-dom';


function Page3() {

  const navigate = useNavigate();

  const playCoinsAnimation = () => {
    const cTl = anime.timeline();

    cTl.add({
      targets: '#cn-1',
      delay:1000,
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-2',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-3',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-4',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-5',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-6',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      delay: 500,
      targets: '#cn-11',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-12',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      delay: 750,
      targets: '#cn-13',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      delay: 750,
      targets: '#cn-7',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-8',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-9',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
    .add({
      targets: '#cn-10',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear',
      loop: false
    })
  }

  const playMarioAnimation = async () => {
    const tl = anime.timeline();
    const cTl = anime.timeline();

    tl.add({
      targets: '.mario',
      translateX: '45rem',
      easing: 'linear',
      loop: false,
      duration: 2000
    })
    .add({
      targets: '.mario',
      scaleX: -1,
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: 0 },
        { value: -220, duration: 250},
        { value: -175, duration: 250 }
      ],
      translateX: [
        { value: '45rem' },
        { value: '35rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateX: '30rem',
      easing: 'linear',
      loop: false,
      duration: 250
    })
    .add({
      targets: '.mario',
      scaleX: 1,
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateX: '38rem',
      easing: 'linear',
      loop: false,
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -175 },
        { value: -250, duration: 250},
        { value: -175, duration: 250 }
      ],
      translateX: [
        { value: '38rem' },
        { value: '55rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateX: '60rem',
      easing: 'linear',
      loop: false,
      duration: 250
    })
    .add({
      targets: '.mario',
      scaleX: -1,
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateX: '48rem',
      easing: 'linear',
      loop: false,
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: 0,
      easing: 'linear',
      loop: false,
      duration: 250,
    })
    .add({
      targets: '.mario',
      scaleX: 1,
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateX: '80rem',
      easing: 'linear',
      loop: false,
      duration: 750
    });
    
    playCoinsAnimation();

    await tl.finished;
    if(tl.completed) {
      navigate('/p4');
    }
  }

  useEffect(() => {
    randomCloudAnimations('#c1', 'right', anime.random(10000, 50000));
    randomCloudAnimations('#c2', 'left', anime.random(10000, 50000));
    randomCloudAnimations('#c3', 'left', anime.random(10000, 50000));
    randomCloudAnimations('#c4', 'right', anime.random(10000, 50000));

    setTimeout(playMarioAnimation, 1000);

  }, [])

  return (
    <div className='page-3'>
      <img src={cloud} className='cloud' id='c1' />
      <img src={cloud} className='cloud' id='c2' />
      <img src={cloud} className='cloud' id='c3' />
      <img src={cloud} className='cloud' id='c4' />

      <div className='bricks-cont' id='b-cont-1'>
        <img src={doubleBricks} className='db-brick' />
        <img src={unknowBrick} className='un-brick' />
      </div>

      <div className='bricks-cont' id='b-cont-2'>
        <img src={unknowBrick} className='un-brick' />
        <img src={singleBrick} className='sg-brick' />
      </div>

      <div className='coins-row' id='c-row-1'>
        <img src={coin} id='cn-1' />
        <img src={coin} id='cn-2' />
        <img src={coin} id='cn-3' />
        <img src={coin} id='cn-4' />
        <img src={coin} id='cn-5' />
        <img src={coin} id='cn-6' />
        <img src={coin} id='cn-7' />
        <img src={coin} id='cn-8' />
        <img src={coin} id='cn-9' />
        <img src={coin} id='cn-10' />
      </div>

      <div className='coins-row' id='c-row-2'>
        <img src={coin} id='cn-11' />
        <img src={coin} id='cn-12' />
      </div>

      <div className='coins-row' id='c-row-3'>
        <img src={coin} id='cn-13' />
      </div>

      <img src={marioPlayer} className='mario' />


    </div>
  )
}

export default Page3