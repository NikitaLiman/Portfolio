import React from 'react';
import Styles from '../scss/footer..module.scss';
const list = ['introductory', 'About', 'Projects', 'Contacts'];
const List = ['Main', 'About Me', 'Projects', 'Contacts'];
const Footer = () => {
  const [isActive, setIsActive] = React.useState(0);
  const onMouseOver = (index) => {
    setIsActive(index);
    const sectionId = list[index].toLowerCase().replace(/  /g, '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={Styles.Footer}>
      <div className={Styles.container}>
        <h2>
          Nikita <span>Lyman</span>
        </h2>
        <ul>
          {List.map((Item, index) => {
            return (
              <li
                onClick={() => onMouseOver(index)}
                className={isActive === index ? Styles.active : ''}
                key={index}>
                {Item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={Styles.containerUnder}></div>
    </div>
  );
};

export default Footer;
