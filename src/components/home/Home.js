import React, { useState, useEffect } from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box } from '@mui/material';
import { info } from '../../info/Info';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const [shuffledWords, setShuffledWords] = useState([]);

  const specificWords = [
    "Currently Learning Angular",
    "Proficient in C++",
    "Well-Versed in HTML",
    "Familiar with PostGreSQL",
    "Informed in Docker",
    "Foundation in Linux",
    "Experienced with MongoDB",
    "Exploring Backend Development",
    "Knowledgeable in React",
  ];

  // Shuffle the words array on component mount
  useEffect(() => {
    const shuffled = [...specificWords].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
  }, []);

  return (
    <Box
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
    >
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={'image of adarsh'}
        style={{ background: info.gradient }}
        component={'img'}
        src={me}
        width={{ xs: '35vh', md: '40vh' }}
        height={{ xs: '35vh', md: '40vh' }}
        borderRadius={'50%'}
        p={'0.75rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box>
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>

        <h2 >
          <Typewriter
            words={shuffledWords}
            loop={500}
            cursor
            cursorStyle="_"
            typeSpeed={130}
            deleteSpeed={120}
            delaySpeed={10}
          />
        </h2>
        <Box component={'ul'} p={'0.8rem'}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={'flex'}
          gap={'1.5rem'}
          justifyContent={'center'}
          fontSize={{ xs: '2rem', md: '2.5rem' }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
