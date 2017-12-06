/** @jsx preact.h */

import preact from 'preact';
import { Link } from 'preact-router';
import Tints from './Tints';
import Shades from './Shades';

import { hexToRgb, rgbToHex } from './helpers';

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

  complementaryColor() {
    const color = hexToRgb(this.getColor());
    const complementary = {
      r: 255 - color.r,
      g: 255 - color.g,
      b: 255 - color.b,
    };

    return rgbToHex(complementary.r, complementary.g, complementary.b);
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
        <div className={styles['color-box-wrapper']}>
          <Link href={`/${this.complementaryColor().substr(1)}`}>
            <div
              className={styles['color-box']}
              style={{
                backgroundColor: this.complementaryColor(),
              }}
            >
              {this.complementaryColor()}
            </div>
            <div className={styles.center}>Complementary colour</div>
          </Link>
        </div>
        <footer>
          <p>Author: Sergio Moura</p>
          <p><a href="https://github.com/lsmoura/colours">Fork me on github</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
