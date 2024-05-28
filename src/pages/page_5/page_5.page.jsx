import React, { useEffect } from 'react';
import './page_5.style.scss';

import anime from 'animejs';

import cloud from '../../assets/svgs/cloud.svg';
import marioPlayer from '../../assets/svgs/mario-player.svg';

import brickStairs from '../../assets/svgs/decorations/brick-stairs.svg';
import doubleBrick from '../../assets/svgs/decorations/brick.svg';

import potion from '../../assets/svgs/decorations/potion.svg';
import coin from '../../assets/svgs/decorations/coin.svg';

import { randomCloudAnimations } from '../../utils/helper_functions';
import { useNavigate } from 'react-router-dom';

function Page5() {

  const navigate = useNavigate();

  const playDecorationsAnimation = () => {
    const tl = anime.timeline();

    tl.add({
      delay: 5500,
      targets: '.potion',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear'
    })
    .add({
      delay: 2000,
      targets: '#cn-1',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear'
    })
    .add({
      targets: '#cn-2',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear'
    })
    .add({
      targets: '#cn-3',
      opacity: [1, 0],
      duration: 250,
      easing: 'linear'
    })
  }

  const playMarioAnimation = async () => {
    const tl = anime.timeline();

    tl.add({
      targets: '.mario',
      translateX: '33rem',
      easing: 'linear',
      loop: false,
      duration: 2000
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: 0 },
        { value: -60, duration: 250},
        { value: -50, duration: 250 }
      ],
      translateX: [
        { value: '33rem' },
        { value: '38rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -50 },
        { value: -110, duration: 250},
        { value: -100, duration: 250 }
      ],
      translateX: [
        { value: '38rem' },
        { value: '43rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -100 },
        { value: -160, duration: 250},
        { value: -150, duration: 250 }
      ],
      translateX: [
        { value: '43rem' },
        { value: '47rem', duration: 500},
      ],
      easing: 'linear',
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
      translateY: [
        { value: -150 },
        { value: -320, duration: 250},
        { value: -305, duration: 250 }
      ],
      translateX: [
        { value: '47rem' },
        { value: '32rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -305 },
        { value: -320, duration: 250},
        { value: -200, duration: 250 }
      ],
      translateX: [
        { value: '32rem' },
        { value: '23rem', duration: 500},
      ],
      easing: 'linear',
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
      translateY: [
        { value: -200 },
        { value: -330, duration: 250},
        { value: -305, duration: 250 }
      ],
      translateX: [
        { value: '23rem' },
        { value: '33rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -305 },
        { value: -340, duration: 250},
        { value: -205, duration: 250 }
      ],
      translateX: [
        { value: '33rem' },
        { value: '50rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -205 },
        { value: -265, duration: 250},
        { value: -255, duration: 250 }
      ],
      translateX: [
        { value: '50rem' },
        { value: '55rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateY: [
        { value: -255 },
        { value: -315, duration: 250},
        { value: -305, duration: 250 }
      ],
      translateX: [
        { value: '55rem' },
        { value: '59rem', duration: 500},
      ],
      easing: 'linear',
      duration: 250
    })
    .add({
      targets: '.mario',
      translateX: '68rem',
      easing: 'linear',
      loop: false,
      duration: 250
    });

    playDecorationsAnimation();

    await tl.finished;
    if(tl.completed) {
      navigate('/p6');
    }

  }

  useEffect(() => {
    randomCloudAnimations('#c1', 'right', anime.random(10000, 50000));
    randomCloudAnimations('#c2', 'right', anime.random(10000, 50000));

    playMarioAnimation();
  }, []);

  return (
    <div className='page-5'>

      <img src={cloud} className='cloud' id='c1' />
      <img src={cloud} className='cloud' id='c2' />


      <img src={brickStairs} className='brick-stairs' />

      <img src={doubleBrick} id='db-brick-1' />
      <img src={doubleBrick} id='db-brick-2' />
      <img src={doubleBrick} id='db-brick-3' />

      <img src={potion} className='potion' />

      <div className='coins-row' id='c-row-1'>
        <img src={coin} id='cn-1' />
        <img src={coin} id='cn-2' />
      </div>

      <div className='coins-row' id='c-row-2'>
        <img src={coin} id='cn-3' />
      </div>

      <img src={marioPlayer} className='mario' />

    </div>
  )
}

export default Page5