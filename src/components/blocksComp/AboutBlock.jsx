import React from 'react';
import Styles from '../../scss/About.module.scss';

const AboutBlock = ({ title, paragraph, theme }) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      style={{ backgroundColor: isHover ? 'black' : '' }}
      className={Styles.box}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default AboutBlock;
