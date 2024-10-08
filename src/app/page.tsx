import NavBar from '../components/NavBar';
import Bubble from '../components/Bubble';
import About from '../components/About';
import Contact from '../components/Contact';
import Banner from '../components/Banner';
import Message from '../components/Message';
import { css } from '../../styled-system/css';

const oceanBackgroundStyles = css({
  background: 'var(--gradient-color)',
  zIndex: -1,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const containerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  boxSizing: 'border-box',
  fontFamily: 'sans-serif',
  position: 'relative',
  zIndex: 1,
  color: 'white',
  minHeight: '100vh',
});

const componentWrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  '&:last-child': {
    marginBottom: 0,
  },
});

export default function Home() {
  return (
    <div className={oceanBackgroundStyles}>
      <main className={containerStyles}>
        <NavBar />
        <div id='about' className={componentWrapperStyles}>
          <About />
        </div>
        <div id='contact' className={componentWrapperStyles}>
          <Contact />
        </div>
        <div id='banner' className={componentWrapperStyles}>
          <Banner />
        </div>
        <div id='message' className={componentWrapperStyles}>
          <Message />
        </div>
        <Bubble />
      </main>
    </div>
  );
}
