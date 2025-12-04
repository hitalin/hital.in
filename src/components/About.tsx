import Image from 'next/image';
import { css } from '../../styled-system/css';

const containerStyles = css({
  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
  backdropFilter: 'blur(16px) saturate(120%)',
  borderRadius: '1.25rem',
  padding: '1rem',
  maxWidth: '480px',
  width: '90%',
  margin: '0 auto',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
  animation: 'fadeInUp 1s ease-out',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03))',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  '@media (max-width: 640px)': {
    padding: '0.875rem',
    width: '85%',
  },
});

const avatarStyles = css({
  display: 'block',
  margin: '0 auto',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '2px solid rgba(255, 255, 255, 0.18)',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 28px rgba(0, 0, 0, 0.14), 0 4px 10px rgba(0, 0, 0, 0.08)',
    border: '2px solid rgba(255, 255, 255, 0.25)',
  },
});

const nameStyles = css({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  fontFamily: 'Kiwi Maru',
  textAlign: 'center',
  color: 'var(--text-color)',
  marginTop: '0.375rem',
  marginBottom: '0.2rem',
  '& h1': {
    margin: 0,
  },
});

const bioStyles = css({
  fontSize: '1.05rem',
  fontFamily: 'Kiwi Maru',
  color: 'var(--text-color)',
  textAlign: 'center',
  lineHeight: '1.7',
  opacity: 0.95,
});

const About = () => {
  return (
    <div className={containerStyles}>
      <div>
        <Image src="/avatar.png" className={avatarStyles} alt='avatar' width={170} height={170} />
      </div>
      <div className={nameStyles}>
        <h1>hitalin</h1>
      </div>
      <div className={bioStyles}>
        <p>I'm a home server security guard.</p>
        <br></br>
        <p>Hobbies: CTF(web, crypto, pwn), DTM(alternative rock, vocaloid)</p>
       </div>
    </div>
  );
}

export default About;
