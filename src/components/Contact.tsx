import { FaStickyNote, FaTwitter, FaInstagram, FaTelegramPlane, FaGithub, FaTwitch, FaSteam, FaVrCardboard } from 'react-icons/fa';
import { SiMisskey, SiPleroma, SiSignal, SiXmpp, SiEthereum, SiPixiv } from 'react-icons/si';
import { BsThreads } from 'react-icons/bs';
import { PiButterflyFill } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';

import { css } from '../../styled-system/css';

const iconStyles = css({
  fontSize: '1.2rem',
  color: 'white',
});
const linkStyles = css({
  display: 'flex',
  alignItems: 'center',
});

const Contact = () => {
  return (
    <div className={iconStyles}>
      <ul>
        <li>
          <a href='https://note.com/hitalin' className={linkStyles}>
            <FaStickyNote /> note
          </a>
        </li>
        <li>
          <a href='https://twitter.com/hitalin4668' className={linkStyles}>
            <FaTwitter /> Twitter
          </a>
        </li>
        <li>
          <a href='https://bsky.app/profile/hitalin.bsky.social' className={linkStyles}>
            <PiButterflyFill /> Bluesky
          </a>
        </li>
        <li>
          <a href='https://yami.ski/@hitalin' className={linkStyles}>
            <SiMisskey /> Misskey
          </a>
        </li>
        <li>
          <a href='https://fedi.absturztau.be/hitalin' className={linkStyles}>
            <SiPleroma /> Pleroma
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/hitalin4668' className={linkStyles}>
            <FaInstagram /> Instagram
          </a>
        </li>
        <li>
          <a href='https://www.threads.net/@hitalin4668' className={linkStyles}>
            <BsThreads /> Threads
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
          <a href='https://www.twitch.tv/hitalin4668' className={linkStyles}>
            <FaTwitch /> Twitch
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
