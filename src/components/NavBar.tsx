import { css, cx } from '../../styled-system/css';

const navStyles = css({
  display: 'flex',
  top: 0,
  width: '100%',
  padding: '0.75rem 0',
  position: 'fixed',
  zIndex: 2,
  justifyContent: 'space-around',
  background: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))'
});

const linkStyles = css({
  position: 'relative',
  zIndex: 1,
  color: 'var(--text-color)',
  cursor: 'pointer',
  paddingTop: '0.5rem',
  fontFamily: 'Kiwi Maru',
});

const horizontalWaveStyles = css({
  position: 'absolute',
  top: '100%',
  width: '100%',
  zIndex: -1,
  '& path': {
    animation: 'horizontalWave 2s linear infinite',
  },
});

interface NavBarProps {
  activeComponent: string | null;
  setActiveComponent: (component: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeComponent, setActiveComponent }) => {
  return (
    <nav className={navStyles}>
      <svg className={horizontalWaveStyles} viewBox="0 0 1440 12">
        <title> </title>
        <defs>
          <linearGradient id="waveGradient">
            <stop offset="0%" stopColor='var(--wave-color)' />
            <stop offset="90%" stopColor='var(--wave-color)' />
          </linearGradient>
        </defs>
        <path fill="none" stroke="url(#waveGradient)" strokeWidth="1">
          <animate
            attributeName="stroke-width"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="d"
            dur="2s"
            repeatCount="indefinite"
            values="
            M0,50 C120,90 240,10 360,50 480,90 600,10 720,50 840,90 960,10 1080,50 1200,90 1320,10 1440,50 L1440,60 L0,60 Z;
            M0,50 C120,10 240,90 360,50 480,10 600,90 720,50 840,10 960,90 1080,50 1200,10 1320,90 1440,50 L1440,60 L0,60 Z;
            M0,50 C120,90 240,10 360,50 480,90 600,10 720,50 840,90 960,10 1080,50 1200,90 1320,10 1440,50 L1440,60 L0,60 Z;
            M0,50 C120,90 240,10 360,50 480,90 600,10 720,50 840,90 960,10 1080,50 1200,90 1320,10 1440,50 L1440,60 L0,60 Z
            "
          />
        </path>
      </svg>
      <div
        className={cx(linkStyles, activeComponent === 'about' && 'active-link')}
        onClick={() => setActiveComponent('about')}
        title='About'
      >
        <p>About</p>
      </div>
      <div
        className={cx(linkStyles, activeComponent === 'contact' && 'active-link')}
        onClick={() => setActiveComponent('contact')}
        title='Contact'
      >
        <p>Contact</p>
      </div>
      <div
        className={cx(linkStyles, activeComponent === 'link' && 'active-link')}
        onClick={() => setActiveComponent('link')}
        title='Link'
      >
        <p>Link</p>
      </div>
    </nav>
  );
};

export default NavBar;