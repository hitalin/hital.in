import Image from 'next/image';
import { css } from '../../styled-system/css';

const avatarStyles = css({
  display: 'block',
  margin: '0 auto',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '0.125rem solid transparent',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
});

const nameStyles = css({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: 'var(--text-color)',
});

const bioStyles = css({
  fontSize: '1.2rem',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  color: 'var(--text-color)',
});

const About = () => {
  return (
    <div>
      <div>
        <Image src="/avatar.png" className={avatarStyles} alt='avatar' width={170} height={170} />
      </div>
      <br></br>
      <div className={nameStyles}>
        <h1>hitalin</h1>
      </div>
      <div className={bioStyles}>
        <p>home security guard</p>
       </div>
    </div>
  );
}

export default About;