import Image from 'next/image';
import { css } from '../../styled-system/css';

const titleStyles = css({
    fontSize: '1.5rem',
    fontFamily: 'Kiwi Maru',
    color: 'var(--text-color)',
    textAlign: 'center',
    animation: 'fadeInUp 1s ease-out',
});

const linkStyles = css({
    display: 'flex',
    alignItems: 'center',
    color: 'var(--text-color)',
    fontFamily: 'Kiwi Maru',
  });

const Link = () => {
    return (
        <div>
            <div className={titleStyles}>
                <h2>reciprocal</h2>
                <div className={linkStyles}>
                    <ul>
                        <li>
                            <a href="https://hital.in" target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src="/banner-hitalin.png"
                                    alt="hitalin banner"
                                    width={200}
                                    height={40}
                                    priority
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://neos21.net/" target="_blank" rel="noopener noreferrer">
                                <Image 
                                    src="/banner-neos21.png"
                                    alt="neos21 banner"
                                    width={200}
                                    height={40}
                                    priority
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Link;
