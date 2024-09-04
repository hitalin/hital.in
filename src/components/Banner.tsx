import Image from 'next/image';
import { css } from '../../styled-system/css';

const bannerStyles = css({
  marginTop: 'rem',
  overflow: 'hidden',
  border: '0.125rem solid transparent',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
});

const Banner = () => {
  return (
    <div>
      <div>
        <Image src='/banner.png' className={bannerStyles} alt='banner' width={200} height={40} />
      </div>
    </div>
  );
};

export default Banner;
