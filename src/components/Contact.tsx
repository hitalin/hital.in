import { FaMastodon, FaMarkdown, FaRss, FaTwitch, FaSpotify, FaSoundcloud, FaTelegramPlane, FaKeybase, FaGithub, FaSteam, FaVrCardboard, FaBookOpen, FaCompass, FaDoorOpen } from 'react-icons/fa';
import { SiMisskey, SiPleroma, SiWritedotas, SiMatrix, SiSimplex, SiSignal, SiXmpp, SiSuno, SiNiconico, SiPixiv, SiOllama, SiHackerone, SiOsu } from 'react-icons/si';
import { FaXTwitter, FaRegNoteSticky, FaPencil, FaFlag } from 'react-icons/fa6';
import { PiButterflyFill } from 'react-icons/pi';
import { MdEmail } from 'react-icons/md';
import { GiOstrich, GiBookshelf } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { css } from '../../styled-system/css';

const containerStyles = css({
  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
  backdropFilter: 'blur(16px) saturate(120%)',
  borderRadius: '1.25rem',
  padding: '0.875rem 1.25rem',
  maxWidth: '480px',
  width: '90%',
  margin: '0 auto',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)',
  animation: 'fadeInUp 1s ease-out',
  transition: 'all 0.3s ease',
  fontSize: '1.05rem',
  color: 'white',
  marginTop: '1rem',
  '&:hover': {
    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03))',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  '& ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  '& li': {
    marginBottom: '0.2rem',
  },
  '@media (max-width: 640px)': {
    padding: '0.75rem 0.875rem',
    width: '85%',
    fontSize: '1rem',
  },
});

const linkStyles = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: 'var(--text-color)',
  fontFamily: 'Kiwi Maru',
  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  padding: '0.25rem 0.4rem',
  margin: '0 -0.4rem',
  borderRadius: '0.5rem',
  '& svg': {
    fontSize: '1.2rem',
    flexShrink: 0,
    minWidth: '1.2rem',
    minHeight: '1.2rem',
  },
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.95)',
    background: 'rgba(255, 255, 255, 0.08)',
    transform: 'translateX(6px)',
  },
});

const Contact = () => {
  return (
    <div className={containerStyles}>
      <ul>
        <li>
          <a href='https://x.com/hita1in' className={linkStyles}>
            <FaXTwitter /> X
          </a>
        </li>
        <li>
          <a href='https://bsky.app/profile/hital.in' className={linkStyles}>
            <PiButterflyFill /> Bluesky
          </a>
        </li>
        <li>
          <a href='https://iris.to/npub10xprwmetx58h8y2rqns22zq8zazrpxufym9wlrgmur8zljxlngms8rxtjj' className={linkStyles}>
            <GiOstrich /> Nostr
          </a>
        </li>
        <li>
          <a rel="me" href='https://yami.ski/@hitalin' className={linkStyles}>
            <SiMisskey /> Misskey
          </a>
        </li>
        <li>
          <a rel="me" href='https://fedibird.com/@hitalin' className={linkStyles}>
            <FaMastodon /> Mastodon
          </a>
        </li>
        <li>
          <a rel="me" href='https://fedi.absturztau.be/hitalin' className={linkStyles}>
            <SiPleroma /> Pleroma
          </a>
        </li>
        <li>
          <a href='https://note.com/hitalin' className={linkStyles}>
            <FaRegNoteSticky /> note
          </a>
        </li>
        <li>
          <a href='https://write.as/hitalin/' className={linkStyles}>
            <SiWritedotas /> Write.as
          </a>
        </li>
        <li>
          <a href='https://hackmd.io/@hitalin' className={linkStyles}>
            <FaMarkdown /> HackMD
          </a>
        </li>
        <li>
          <a href='https://app.folo.is/share/users/hitalin' className={linkStyles}>
            <FaRss /> Folo
          </a>
        </li>
        <li>
          <a href='https://matrix.to/#/@hitalin:matrix.yami.ski' className={linkStyles}>
            <SiMatrix /> Matrix
          </a>
        </li>
        <li>
          <a href='https://smp10.simplex.im/a#uKmzOZBG1_0Dx1uBX2c_uoJeoGcACYFJ369_3zL7CJM' className={linkStyles}>
            <SiSimplex /> Simplex
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
          <a href='https://open.spotify.com/user/umg4mk0sr2sf3wdwypyvog5zi' className={linkStyles}>
            <FaSpotify /> Spotify
          </a>
        </li>
        <li>
          <a href='https://soundcloud.com/hitalin' className={linkStyles}>
            <FaSoundcloud /> Soundcloud
          </a>
        </li>
        <li>
          <a href='https://suno.com/@hitalin' className={linkStyles}>
            <SiSuno /> Suno
          </a>
        </li>
        <li>
          <a href='https://www.nicovideo.jp/user/95796240' className={linkStyles}>
            <SiNiconico /> NicoNico
          </a>
        </li>
        <li>
          <a href='https://kakuyomu.jp/users/hitalin' className={linkStyles}>
            <FaBookOpen /> Kakuyomu
          </a>
        </li>
        <li>
          <a href='https://booklog.jp/users/hitalin' className={linkStyles}>
            <GiBookshelf /> Booklog
          </a>
        </li>
        <li>
          <a href='https://app.studyplus.jp/users/95860756a0b743a799d76e52b1032e20' className={linkStyles}>
            <FaPencil /> Studyplus
          </a>
        </li>
        <li>
          <a href='https://ctftime.org/user/231318' className={linkStyles}>
            <FaFlag /> CTFtime
          </a>
        </li>
        <li>
          <a href='https://alpacahack.com/users/hitalin' className={linkStyles}>
            <SiOllama /> AlpacaHack
          </a>
        </li>
        <li>
          <a href='https://hackerone.com/hitalin?type=user' className={linkStyles}>
            <SiHackerone /> HackerOne
          </a>
        </li>
        <li>
          <a href='https://connpass.com/user/hitalin' className={linkStyles}>
            <FaCompass /> Connpass
          </a>
        </li>
        <li>
          <a href='https://www.doorkeeper.jp/users/hitalin' className={linkStyles}>
            <FaDoorOpen /> DoorKeeper
          </a>
        </li>
        <li>
          <a href='https://www.pixiv.net/users/38051734' className={linkStyles}>
            <SiPixiv /> Pixiv
          </a>
        </li>
        <li>
          <a href='https://www.twitch.tv/hita1in' className={linkStyles}>
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
          <a href='https://osu.ppy.sh/users/36746284' className={linkStyles}>
            <SiOsu /> OSU!
          </a>
        </li>
        <li>
          <a href='https://snapshot.org/#/profile/0x050bCc933D8A38c612D3D77bC5f9aE449DD294eB' className={linkStyles}>
            <AiFillThunderbolt /> Snapshot
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

