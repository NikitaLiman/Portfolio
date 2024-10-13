import React from 'react';

import Styles from '../../scss/Projects.module.scss';
import { Link } from 'react-router-dom';

const blockProjectHover = ({ img, link, linkGH }) => {
  return (
    <div className={Styles.BoxHover}>
      <img src={img} alt="" />
      <div className={Styles.buttonBox}>
        <Link to={link}>
          <button>Visit</button>
        </Link>
        <Link to={linkGH}>
          <button>GitHub</button>
        </Link>
      </div>
    </div>
  );
};

export default blockProjectHover;
