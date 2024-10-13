import React from 'react';

import Styles from '../../scss/Projects.module.scss';
import BlockProjectHover from './blockProjectHover';

const ProjectBlock = ({
  title,
  Header,
  InfoBlock,
  Container,
  Block__Container,
  img,
  link,
  linkGH,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div className={Styles.box}>
      <h2>{title}</h2>
      <div
        className={Styles.boxJsx}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
        {isHover && <BlockProjectHover img={img} link={link} linkGH={linkGH} />}

        {!isHover && (
          <span className={Styles.red}>
            Import <span className={Styles.white}>React</span> from{' '}
            <span className={Styles.green}>'react';</span>
            <br />
            Import <span className={Styles.white}>Styles</span> from{' '}
            <span className={Styles.green}>'../../scss/Scss.module.scss';</span>
            <br />
            Import <span className={Styles.white}>{Header}</span> from{' '}
            <span className={Styles.green}>'./components/header';</span>
            <br />
            Import <span className={Styles.white}>{InfoBlock}</span> from{' '}
            <span className={Styles.green}>'./components/InfoBlock';</span>
          </span>
        )}
        <br />
        <br />
        {!isHover && (
          <span className={Styles.red}>
            function <span className={Styles.Purple}>App</span>
            <span className={Styles.blue}>()</span>
            <span className={Styles.blue}>&#123;</span>
            <br />
            <span className={Styles.red}>
              return <span className={Styles.orange}>(</span>
              <br />
              <span className={Styles.green}>
                <span className={Styles.white}>&lt;</span>div{' '}
                <span className={Styles.Purple}>className</span>=
                <span className={Styles.blue}>&#123;</span>
                <span className={Styles.blue}>Styles</span>
                <span className={Styles.white}>.{Container}</span>
                <span className={Styles.blue}>&#125;</span>
                <span className={Styles.white}>&gt;</span>
              </span>
              <br />
              &nbsp;{' '}
              <span className={Styles.green}>
                <span className={Styles.white}>&lt;</span>div{' '}
                <span className={Styles.Purple}>className</span>=
                <span className={Styles.blue}>&#123;</span>
                <span className={Styles.blue}>Styles</span>
                <span className={Styles.white}> .{Block__Container}</span>
                <span className={Styles.blue}>&#125;</span>
                <span className={Styles.white}>&gt;</span>
                <br />
                &nbsp; &nbsp; <span className={Styles.white}>&lt;</span>{' '}
                <span className={Styles.blue}>{Header}</span> /
                <span className={Styles.white}>&gt;</span>
                <br />
                &nbsp; &nbsp; <span className={Styles.white}>&lt;</span>{' '}
                <span className={Styles.blue}>{InfoBlock}</span> /
                <span className={Styles.white}>&gt;</span>
              </span>
              <br />
              &nbsp; &nbsp;<span className={Styles.white}>&lt;</span>
              <span className={Styles.green}>/ div </span>
              <span className={Styles.white}>&gt;</span>
              <br />
              &nbsp;<span className={Styles.white}>&lt;</span>
              <span className={Styles.green}>/ div </span>
              <span className={Styles.white}>&gt;</span>
            </span>
            <br />
            &nbsp;
            <span className={Styles.orange}>
              ) <span className={Styles.white}>;</span>
            </span>
            <br />
            <span className={Styles.blue}>&#125;</span>
          </span>
        )}
        <br />
        {!isHover && (
          <span className={Styles.red}>
            export default <span className={Styles.Purple}>App</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectBlock;
