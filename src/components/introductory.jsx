import React from 'react';

import { ThemeContext } from '../App.js';
import Styles from '../scss/introductory.module.scss';
import img from '../img/MyImg.png';

const Introductory = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1 style={{ color: theme === 'dark' ? 'white' : 'black' }}>
          Hi, It's <span>Nikita</span>
        </h1>
        <h3 className={`${Styles.TextAnim} ${theme}`}>
          I'm <span></span>
        </h3>
        <p style={{ color: theme === 'dark' ? 'white' : 'black' }}>
          My name is Nikita, and I’m passionate about technology and programming, specializing in
          web development. I focus on building dynamic, interactive user interfaces using React,
          SCSS, and JavaScript. I’m always looking to improve my skills and create functional,
          visually appealing websites. Outside of IT, I love learning new things and enjoy sports,
          which helps me maintain a healthy balance between physical and mental well-being.
        </p>
      </div>
      <div className={Styles.contentSecond}>
        <div className={Styles.block}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introductory;
