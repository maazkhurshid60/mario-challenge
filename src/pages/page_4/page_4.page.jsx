import React, { useEffect } from 'react'
import './page_4.style.scss'

import anime from 'animejs';

import cloud from '../../assets/svgs/cloud.svg';
import marioPlayer from '../../assets/svgs/mario-player.svg';

import smTunnel from '../../assets/svgs/decorations/sm-tunnel.svg';
import mdTunnel from '../../assets/svgs/decorations/md-tunnel.svg';
import lgTunnel from '../../assets/svgs/decorations/lg-tunnel.svg';

import heart from '../../assets/svgs/decorations/heart.svg';
import star from '../../assets/svgs/decorations/star.svg';
import potion from '../../assets/svgs/decorations/potion.svg';

import { randomCloudAnimations } from '../../utils/helper_functions';
import { useNavigate } from 'react-router-dom';

function Page4() {

  const navigate = useNavigate();

  const playDecorationsAnimation = () => {
    const tl = anime.timeline();

    tl.add({
      delay: 2500,
      targets: '.heart',
      opacity: [1, 0],
      duration: 250,
    })
    .add({
      delay: 500,
      targets: '.star',
      opacity: [1, 0],
      duration: 250,
    })
    .add({
      delay: 500,
      targets: '.potion',
      opacity: [1, 0],
      duration: 250,
    })

  }

  const playMarioAnimation = async () => {
    const tl = anime.timeline();

    tl.add({
      targets: '.mario',
      translateX: '25rem',
      easing: 'linear',
      loop: false,
      duration: 2000
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: 0 },
        { value: -220, duration: 250},
        { value: -120, duration: 250 }
      ],
      translateX: [
        { value: '25rem' },
        { value: '34rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -120 },
        { value: -320, duration: 250},
        { value: -200, duration: 250 }
      ],
      translateX: [
        { value: '34rem' },
        { value: '44rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -200 },
        { value: -320, duration: 250},
        { value: -140, duration: 250 }
      ],
      translateX: [
        { value: '44rem' },
        { value: '54rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -140 },
        { value: -220, duration: 250},
        { value: 0, duration: 250 }
      ],
      translateX: [
        { value: '54rem' },
        { value: '64rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateX: '74rem',
      easing: 'linear',
      loop: false,
      duration: 500
    });

    playDecorationsAnimation();

    await tl.finished;
    if(tl.completed) {
      navigate('/p5');
    }

  }

  useEffect(() => {
    randomCloudAnimations('#c1', 'right', anime.random(10000, 50000));
    randomCloudAnimations('#c2', 'left', anime.random(10000, 50000));
    randomCloudAnimations('#c3', 'left', anime.random(10000, 50000));
    randomCloudAnimations('#c4', 'right', anime.random(10000, 50000));

    playMarioAnimation();
  }, []);

  return (
    <div className='page-4'>
      <img src={cloud} className='cloud' id='c1' />
      <img src={cloud} className='cloud' id='c2' />
      <img src={cloud} className='cloud' id='c3' />
      <img src={cloud} className='cloud' id='c4' />

      <div className='tunnels-row'>
        <img src={smTunnel} className='tunnel' />
        <img src={lgTunnel} className='tunnel' />
        <img src={mdTunnel} className='tunnel' />
      </div>

      <img src={heart} className='heart' />
      <img src={star} className='star' />
      <img src={potion} className='potion' />

      <img src={marioPlayer} className='mario' />

    </div>
  )
}

export default Page4