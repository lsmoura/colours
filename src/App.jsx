/** @jsx preact.h */

import preact from 'preact';
import Tints from './Tints';
import Shades from './Shades';

import { hexToRgb } from './helpers';

import './style.less';

class App extends preact.Component {
  getColor() {
    if (!window.location.hash) return '#1c84c6';

    return window.location.hash;
  }

  render() {
    const color = this.getColor();
    const rgb = hexToRgb(color);
    return (
      <div>
        <h1>Colour {color}</h1>
        <div
          className="color-box"
          style={{
            backgroundColor: color,
          }}
        >
          <div>
            <div>{color}</div>
            <div>({rgb.r}, {rgb.g}, {rgb.b})</div>
          </div>
        </div>
        <h2>Shades of {color}</h2>
        <Shades color={rgb} />
        <h2>Tints of {color}</h2>
        <Tints color={rgb} />
        <footer>
          <p>Author: Sergio Moura</p>
          <p><a href="https://github.com/lsmoura/colour">Fork me on github</a></p>
        </footer>
      </div>
    );
  }
}

preact.render(
  <App />,
  document.body
);
