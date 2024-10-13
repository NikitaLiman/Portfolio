import React from 'react';
import Styles from '../../scss/infoAboutme.module.scss';
const InFoBlock = ({ title, text, img }) => {
  const [isHover, setisHover] = React.useState(false);
  return (
    <div
      onMouseOver={() => setisHover(true)}
      onMouseOut={() => setisHover(false)}
      className={Styles.box}
      style={{ backgroundColor: isHover ? 'black' : '' }}>
      <div className={Styles.contentBox}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={Styles.contentBox}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default InFoBlock;
