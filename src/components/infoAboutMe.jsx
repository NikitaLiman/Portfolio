import React from 'react';
import InFoBlock from './blocksComp/inFoBlock';
import Styles from '../scss/infoAboutme.module.scss';
import { ThemeContext } from '../App';
const InfoAboutMe = () => {
  const { theme } = React.useContext(ThemeContext);
  const ListText = [
    {
      text1:
        'I currently live in Poland, where I moved from Kyiv, Ukraine, two years ago. Living away from home, I am studying to major in Computer Science and at the same time actively developing modern web applications. This experience allowed me to deepen my programming knowledge and adapt to new challenges, working on projects that meet modern market demands.',
      text2:
        'Currently, I am actively engaged in self-education and studying modern technologies, striving to constantly expand my knowledge. I take a 70% practice and 30% theory approach, which helps me dive deeper into the learning process and become more comfortable with new tools and concepts.',
      text3:
        'I always value working in a team, where you can exchange ideas and find optimal solutions together. The ability to effectively interact with colleagues allows me not only to maintain the work process, but also to bring positive dynamics to the project. Communication for me is the key to success, be it discussing tasks or overcoming difficulties together.',
      text4:
        'I quickly adapt to new tasks and technologies, which is essential in the ever-evolving IT world. My experience with various projects helps me learn quickly, analyze requirements, and propose effective solutions. Flexibility and openness to challenges allow me to find optimal approaches, delivering not only completed tasks but also long-term solutions that add real value to the project.',
    },
  ];

  return (
    <div className={Styles.container}>
      <h1>About Me</h1>
      <div className={Styles.content}>
        <InFoBlock
          text={ListText[0].text1}
          title="Experience of Adaptation and Growth in a New Country"
        />
        <InFoBlock title="Practice and Theory" text={ListText[0].text2} />
        <InFoBlock title="Flexibility and Adaptability in IT" text={ListText[0].text4} />
        <InFoBlock title="Teamwork and Communication as Keys to Success" text={ListText[0].text3} />
      </div>
    </div>
  );
};

export default InfoAboutMe;
