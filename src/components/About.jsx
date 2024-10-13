import React from 'react';

import Styles from '../scss/About.module.scss';
import AboutBlock from './blocksComp/AboutBlock';
import { ThemeContext } from '../App';

const ListP = [
  {
    text1:
      'JavaScript is a programming language used to make web pages interactive. It allows elements like buttons, forms, and animations to respond to user actions without needing to reload the page. JavaScript runs in the browser and is key to creating dynamic websites. It’s widely used in both front-end and back-end development, making it a versatile language for web applications.',
    text2:
      "React is a popular JavaScript library for building user interfaces, especially for single-page applications. It allows developers to create reusable components that update efficiently when the underlying data changes. React uses a virtual DOM to improve performance by only updating the parts of the page that need it, rather than reloading the entire page. It's widely used for building dynamic, fast, and scalable web applications.",
    text3:
      'SCSS (Sassy CSS) is a powerful extension of CSS that adds advanced features like variables, nesting, and mixins, making it easier to write and maintain styles for large projects. SCSS allows developers to write cleaner, more organized code, while still compiling down to regular CSS that browsers can understand. It helps streamline the styling process by making CSS more flexible and efficient, especially for complex layouts and design systems.',
    text4:
      'TypeScript is a superset of JavaScript that adds static types, helping developers catch errors early during development. It makes code more reliable and easier to maintain, especially in larger projects. TypeScript is fully compatible with JavaScript and compiles to regular JavaScript for use in browsers or on servers, offering better tooling, readability, and strong typing.',
  },
];

const About = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={Styles.container}>
      <h1>Instruments</h1>
      <div className={Styles.content}>
        <AboutBlock title="JavaScript" paragraph={ListP[0].text1} theme={theme} />
        <AboutBlock title="React" paragraph={ListP[0].text2} theme={theme} />
        <AboutBlock title="SCSS" paragraph={ListP[0].text3} theme={theme} />
        <AboutBlock title="TypeScript" paragraph={ListP[0].text4} theme={theme} />
      </div>
    </div>
  );
};

export default About;
