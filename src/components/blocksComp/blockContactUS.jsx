import React from 'react';
import Style from '../../scss/contact.module.scss';
import Instagram from '../../img/instagram.png';
import Facebook from '../../img/facebook.png';
import Telegram from '../../img/telegram.png';
import Discord from '../../img/discord-logo.png';
import { Link } from 'react-router-dom';
const ListImg = [Instagram, Facebook, Telegram, Discord];

const TextIcons = ['disappear7779', 'Nikita Lyman', 'disappear', 'disappear7779'];

const BlockContactUS = ({ discord, telegram }) => {
  const [isHover, setIsHover] = React.useState(null);
  return (
    <div className={Style.cont__contact}>
      <div className={Style.SmileCt}>
        <h1>Contact Me</h1>
      </div>
      <div className={Style.box}>
        <div className={Style.SocialIcons}>
          <div className={Style.IconsBlock}>
            {ListImg.map((Item, index) => {
              const link = index === 2 ? telegram : index === 3 ? discord : '#';
              return (
                <Link to={link}>
                  <div
                    onMouseLeave={() => setIsHover(null)}
                    key={index}
                    className={Style.IconContainer}>
                    {isHover === index && (
                      <div className={Style.Text}>
                        <p>{TextIcons[isHover]}</p>
                      </div>
                    )}
                    <img
                      key={index}
                      onMouseEnter={() => setIsHover(index)}
                      className={Style.imgSt}
                      src={Item}
                      alt={Item}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockContactUS;
