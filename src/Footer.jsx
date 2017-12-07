/** @jsx preact.h */

import preact from 'preact';
import { footer } from './style.less';

const Footer = () => (
  <footer id={footer}>
    <p>Created by <a href="https://github.com/lsmoura">Sergio Moura</a></p>
    <p><a href="https://github.com/lsmoura/colours">Fork me on github</a></p>
    <p>Built with <a href="https://preactjs.com/" target="_blank">⚛️ preact</a></p>
  </footer>
);

export default Footer;
