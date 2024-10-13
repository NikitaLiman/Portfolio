import React from 'react';
import Header from './components/header';
import Introductory from './components/introductory';
import About from './components/About';
import InfoAboutMe from './components/infoAboutMe';
import Slider from './components/slider/slider';
import Projects from './components/projects';
import BlockContactUS from './components/blocksComp/blockContactUS';
import '../src/reset.css';
import '../src/App.scss';
import Contact from './components/contact';
import Footer from './components/footer';
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = React.useState('dark');
  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className="container" id={theme}>
        <div className="header">
          <Header />
        </div>
        <div className="content" data-theme={theme}>
          <div id="introductory">
            <Introductory />
          </div>
          <About />
          <div id="slider">
            <Slider />
          </div>
          <div id="about">
            <InfoAboutMe />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <h1 className="h1">Contact Me</h1>
          <div id="contacts" className="contactUsCont">
            <BlockContactUS discord="https://discord.com" telegram="https://t.me/disappear7779" />
            <Contact />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
