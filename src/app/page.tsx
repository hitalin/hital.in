"use client";

import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Bubble from '../components/Bubble';
import About from '../components/About';
import Contact from '../components/Contact';
import { css } from '../../styled-system/css';

const oceanBackgroundStyles = css({
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
  paddingTop: '5rem',
});

const componentWrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  '&:last-child': {
    marginBottom: 0,
  },
});

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveComponent(hash);
    } else {
      setActiveComponent('about');
    }
  }, []);

  useEffect(() => {
    if (activeComponent) {
      window.location.hash = activeComponent;
    }
  }, [activeComponent]);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className={oceanBackgroundStyles}>
      <main className={containerStyles}>
        <NavBar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
        <div className={componentWrapperStyles}>
          {renderComponent()}
        </div>
        <Bubble />
      </main>
    </div>
  );
}