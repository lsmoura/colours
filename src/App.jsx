/** @jsx preact.h */

import preact from 'preact';
import Tints from './Tints';
import Shades from './Shades';

import { hexToRgb } from './helpers';

import styles from './style.less';

const defaultColor = '#1c84c6';

class App extends preact.Component {
  componentDidMount() {
    document.title = `Colour ${this.getColor()}`;
  }

  getColor() {
    if (this.props.url === '/') return defaultColor;

    return `#${this.props.url.substr(1)}`;
  }

  render() {
    const color = this.getColor();
    const rgb = hexToRgb(color);
    return (
      <div>
        <h1>Colour {color}</h1>
        <div
          className={styles['color-box']}
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

export default App;
