import Image from 'next/image';
import { css } from '../../styled-system/css';

const titleStyles = css({
    fontSize: '1.5rem',
    fontWeight: 'bold',
});

const friendStyles = css({
    fontSize: '1rem',
    color: 'white',
});


const Friend = () => {
  return (
    <div>
      <div className={titleStyles}>
        <h2>相互リンク</h2>
      </div>
      <div className={friendStyles}>
        <ul>
            <li>
            <a href='https://about.nauzo.me/ja/faq'>なうぞめ(@nz)</a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Friend;