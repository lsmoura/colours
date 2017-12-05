/** @jsx preact.h */

import preact from 'preact';
import  { rgbToHex } from './helpers';

class ShadeTintBase extends preact.Component {
  backgroundColor(rgb) {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  block(key, rgb) {
    const hashColor = rgbToHex(rgb.r, rgb.g, rgb.b);
    return (
      <div
        key={key}
        className="shade-block"
        onClick={() => {
          window.location.hash = hashColor;
        }}
        >
        <div className="color-block"
          style={{
            backgroundColor: this.backgroundColor(rgb),
          }}
          />
        <div className="color-label">
          {rgbToHex(rgb.r, rgb.g, rgb.b)}
        </div>
      </div>
    )
  }

  allBlocks(keyPrefix, colors) {
    return colors.map(
      (color, idx) => this.block(
        `${keyPrefix}-color-${idx}`,
        color
      )
    );
  }
}

export default ShadeTintBase;
