import Image from 'next/image';
import { css } from '../../styled-system/css';

const nameStyles = css({
  fontSize: '2rem',
  fontWeight: 'bold',
});

const avatarStyles = css({
  marginTop: '2rem',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '0.125rem solid transparent',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
});

const About = () => {
  return (
    <div>
      <div>
        <Image src="/avatar.png" className={avatarStyles} alt='avatar' width={150} height={150} />
      </div>
      <div className={nameStyles}>
        <h1>@hitalin</h1>
      </div>
    </div>
  );
}

export default About;