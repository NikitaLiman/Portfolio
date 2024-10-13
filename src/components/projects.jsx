import React from 'react';
import Styles from '../scss/Projects.module.scss';
import Pet from '../img/PetProject.png';
import ProjectBlock from './blocksComp/projectBlock';
import KinoSearch from '../../src/img/Kino.png';

const Projects = () => {
  return (
    <div className={Styles.container}>
      <h1>Projects</h1>
      <div className={Styles.content}>
        <ProjectBlock
          title="Web Shop"
          Header="Header"
          InfoBlock="Projects"
          Container="Block"
          Block__Container="content"
          img={Pet}
          link="https://nikitaliman.github.io/gitHub-pages-react/"
          linkGH="https://github.com/NikitaLiman/gitHub-pages-react/tree/master"
        />
        <ProjectBlock
          title="KinoSearch"
          Header="Nav"
          InfoBlock="Contact"
          Container="Container"
          Block__Container="Block__Container"
          img={KinoSearch}
          link="https://nikitaliman.github.io/SearchKino"
          linkGH="https://github.com/NikitaLiman/SearchKino"
        />
      </div>
    </div>
  );
};

export default Projects;
