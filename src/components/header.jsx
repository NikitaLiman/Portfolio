import React from 'react';
import Styles from '../scss/header.module.scss';
import { ThemeContext } from '../App';

const Header = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const list = ['introductory', 'about', 'projects', 'contacts'];
  const List = ['Main', 'About Me', 'Projects', 'Contacts'];
  const [Burger_Class, setBurgerClass] = React.useState(Styles.burgerBarUn__Clicked);
  const [Menu_class, setMenuClass] = React.useState(Styles.MenuHidden);
  const [isMenuClicked, setisMenuClicked] = React.useState(false);
  const BurgerChange = () => {
    if (!isMenuClicked) {
      setBurgerClass(Styles.burgerBar__Clicked);
      setMenuClass(Styles.MenuVisible);
    } else {
      setBurgerClass(Styles.burgerBarUn__Clicked);
      setMenuClass(Styles.MenuHidden);
    }
    setisMenuClicked(!isMenuClicked);
  };
  const [isActive, setIsActive] = React.useState(0);
  const ScrollyWindow = (index) => {
    const sectionId = list[index];
    const section = document.getElementById(sectionId);
    const windowHeight = window.innerHeight;
    const sectionRect = section.getBoundingClientRect();
    const ScrollyY = window.scrollY + sectionRect.top + sectionRect.height / 2 - windowHeight / 2;
    window.scrollTo({
      top: ScrollyY,
      behavior: 'smooth',
    });
  };
  const onClickHandle = (index) => {
    setIsActive(index);
    ScrollyWindow(index);
  };

  React.useEffect(() => {
    const WindowMove = () => {
      const Cont = document.querySelector(`.${Styles.container}`);
      const NavMn = document.querySelector(`.${Styles.Menu_class} `);
      if (window.scrollY > 0) {
        Cont.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        Cont.style.transition = '0.3s ease';
        Cont.style.backdropFilter = 'blur(10px)';
        Cont.style.webkitBackdropFilter = 'blur(10px)';

        NavMn.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        NavMn.style.transition = '0.3s ease';
        NavMn.style.backdropFilter = 'blur(10px)';
        NavMn.style.webkitBackdropFilter = 'blur(10px)';
      } else {
        Cont.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        Cont.style.backdropFilter = 'none';
        Cont.style.webkitBackdropFilter = 'none';

        NavMn.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        NavMn.style.backdropFilter = 'none';
        NavMn.style.webkitBackdropFilter = 'none';
      }
    };
    window.addEventListener('scroll', WindowMove);
    return () => {
      window.removeEventListener('scroll', WindowMove);
    };
  }, []);
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.name}>
          <h1>
            Nikita <span>Lyman</span>
          </h1>
        </div>
        <div className={Styles.menu}>
          <div className={`${Styles.nav} ${Menu_class}`}>
            <ul>
              {List.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => onClickHandle(index)}
                    className={isActive === index ? Styles.active : ''}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div onClick={BurgerChange} className={Styles.navburger}>
            <div className={Burger_Class}></div>
            <div className={Burger_Class}></div>
            <div className={Burger_Class}></div>
          </div>
          <div className={`${Styles.Menu_class} ${Menu_class}`}>
            <ul>
              {List.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => onClickHandle(index)}
                    className={isActive === index ? Styles.active : ''}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={Styles.contIn}>
            <input
              type="checkbox"
              id="check"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
            <label for="check" id="check" className={Styles.button}></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
