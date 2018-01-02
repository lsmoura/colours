/** @jsx preact.h */

import preact from 'preact';
import { Link } from 'preact-router';
import Tints from './Tints';
import Shades from './Shades';
import Footer from './Footer';

import { hexToRgb, rgbToHex, rgbToHsv, hsvToRgb } from './helpers';

import styles, { contentWrapper } from './style.less';

const defaultColor = '#1c84c6';

const ColorBoxWrapper = ({ color, label }) => (
  <div className={styles['color-box-wrapper']}>
    <Link href={`/${color.substr(1)}`}>
      <div
        className={styles['color-box']}
        style={{
          backgroundColor: color,
        }}
      >
        {color}
      </div>
      <div className={styles.center}>{label}</div>
    </Link>
  </div>
);

class App extends preact.Component {
  componentDidMount() {
    document.title = `Colour ${this.getColor()}`;
  }

  componentDidUpdate() {
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

  rotateColor(n) {
    const originalRGB = hexToRgb(this.getColor());
    const originalHSV = rgbToHsv(originalRGB);

    let nextH = originalHSV.h + n;
    while (nextH < 0) nextH += 360;
    while (nextH >= 360) nextH -= 360;

    const newHSV = Object.assign(
      {},
      originalHSV,
      {
        h: nextH,
      }
    );

    const newRGB = hsvToRgb(newHSV);
    const newHex = rgbToHex(newRGB.r, newRGB.g, newRGB.b);

    return newHex;
  }

  render() {
    const color = this.getColor();
    const rgb = hexToRgb(color);
    const hsv = rgbToHsv(rgb);

    return (
      <div>
        <div className={contentWrapper}>
          <h1>Colour {color}</h1>
          <div
            className={styles['color-box']}
            style={{
              backgroundColor: color,
            }}
          >
            <div>
              <div>{color}</div>
              <div>RGB: {rgb.r}, {rgb.g}, {rgb.b}</div>
              <div>HSV: {hsv.h}, {hsv.s}, {hsv.v}</div>
            </div>
          </div>
          <h2>Shades of {color}</h2>
          <Shades color={rgb} />
          <h2>Tints of {color}</h2>
          <Tints color={rgb} />

          <ColorBoxWrapper
            color={this.complementaryColor()}
            label="Complementary colour"
          />

          <ColorBoxWrapper
            color={this.rotateColor(120)}
            label="Rotate 120"
          />
          <ColorBoxWrapper
            color={this.rotateColor(240)}
            label="Rotate 240"
          />

          <ColorBoxWrapper
            color={this.rotateColor(60)}
            label="+60"
          />
          <ColorBoxWrapper
            color={this.rotateColor(-60)}
            label="-60"
          />


        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
