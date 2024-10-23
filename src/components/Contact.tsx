import { FaMastodon, FaTelegramPlane, FaKeybase, FaGithub, FaSteam, FaVrCardboard } from 'react-icons/fa';
import { SiMisskey, SiPleroma, SiWritedotas, SiMatrix, SiSignal, SiXmpp, SiEthereum, SiPixiv, SiOsu } from 'react-icons/si';
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiButterflyFill } from 'react-icons/pi';
import { MdAddAPhoto, MdEmail } from 'react-icons/md';

import { css } from '../../styled-system/css';

const iconStyles = css({
  fontSize: '1.2rem',
  color: 'white',
  marginTop: '1rem',
});
const linkStyles = css({
  display: 'flex',
  alignItems: 'center',
  color: 'var(--text-color)',
});

const Contact = () => {
  return (
    <div className={iconStyles}>
      <ul>
        <li>
          <a href='https://x.com/hita1in' className={linkStyles}>
            <FaSquareXTwitter /> Twitter
          </a>
        </li>
        <li>
          <a href='https://bsky.app/profile/hital.in' className={linkStyles}>
            <PiButterflyFill /> Bluesky
          </a>
        </li>
        <li>
          <a href='https://yami.ski/@hitalin' className={linkStyles}>
            <SiMisskey /> Misskey
          </a>
        </li>
        <li>
          <a href='https://four-nine.club/@hitalin' className={linkStyles}>
            <FaMastodon /> Mastodon
          </a>
        </li>
        <li>
          <a href='https://fedi.absturztau.be/hitalin' className={linkStyles}>
            <SiPleroma /> Pleroma
          </a>
        </li>
        <li>
          <a href='https://write.as/hitalin/' className={linkStyles}>
            <SiWritedotas /> Write.as
          </a>
        </li>
        <li>
          <a href='https://snap.as/hitalin/' className={linkStyles}>
            <MdAddAPhoto /> Snap.as
          </a>
        </li>
        <li>
          <a href='https://matrix.to/#/@hitalin:matrix.yami.ski' className={linkStyles}>
            <SiMatrix /> Matrix
          </a>
        </li>
        <li>
          <a href='https://t.me/hitalin' className={linkStyles}>
            <FaTelegramPlane /> Telagram
          </a>
        </li>
        <li>
          <a href='https://signal.me/#eu/z1RY3MJAaTRYgS0RknjBba8qACdsjLynhiVqnENZ3M0LHgULRcJGS5A60e9LuiRZ' className={linkStyles}>
            <SiSignal /> Signal
          </a>
        </li>
        <li>
          <a
            href='xmpp:hitalin@cock.li?omemo-sid-1522580533=a364484c7c74a0d427b89d8a5613de8c2fc0179ea493392242348b0e597d9b06;omemo-sid-1157939698=44afeb6e69c09ccb0db769cba844a8eab246066e54147eabb65590d3ad90e411'
            className={linkStyles}
          >
            <SiXmpp /> XMPP
          </a>
        </li>
        <li>
          <a href='mailto:hitalin@proton.me' className={linkStyles}>
            <MdEmail /> Email
          </a>
        </li>
        <li>
          <a href='https://keybase.io/hitalin' className={linkStyles}>
            <FaKeybase /> Keybase
          </a>
        </li>
        <li>
          <a href='https://github.com/hitalin' className={linkStyles}>
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <a href='https://www.pixiv.net/users/38051734' className={linkStyles}>
            <SiPixiv /> Pixiv
          </a>
        </li>
        <li>
          <a href='https://osu.ppy.sh/users/36746284' className={linkStyles}>
            <SiOsu /> OSU!
          </a>
        </li>
        <li>
          <a href='https://steamcommunity.com/id/hitalin' className={linkStyles}>
            <FaSteam /> Steam
          </a>
        </li>
        <li>
          <a href='https://vrchat.com/home/user/usr_4f183ccc-b734-4a05-95eb-62e6a16efe1e' className={linkStyles}>
            <FaVrCardboard /> VRChat
          </a>
        </li>
        <li>
          <a href='https://app.ens.domains/hital.in' className={linkStyles}>
            <SiEthereum /> Ethereum
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
