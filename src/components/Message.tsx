'use client';
import { Parallax } from 'react-scroll-parallax';
import { css } from '../../styled-system/css';

const messageStyles = css({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '0',
  padding: '0',
  cursor: 'pointer',
  color: '#4B0082',
  textDecoration: 'underline',
  '&:hover': {
    color: '#ffffff',
    textDecoration: 'none',
  },
});

const Message = () => {
  const handleAction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAction();
    }
  };

  return (
    <Parallax scale={[1, 1.5]}>
      <div
        className={messageStyles}
        onClick={handleAction}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
      >
        <p>The only way is up.</p>
      </div>
    </Parallax>
  );
}

export default Message;