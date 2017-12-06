/** @jsx preact.h */

import preact from 'preact';
import { Link } from 'preact-router';
import { rgbToHex } from './helpers';
import styles from './style.less';

class ShadeTintBase extends preact.Component {
  backgroundColor(rgb) {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  block(key, rgb) {
    const hashColor = rgbToHex(rgb.r, rgb.g, rgb.b);
    return (
      <Link
        key={key}
        className={styles['shade-block']}
        href={`/${hashColor.substr(1)}`}
      >
        <div className={styles['color-block']}
          style={{
            backgroundColor: this.backgroundColor(rgb),
          }}
          />
        <div className={styles['color-label']}>
          {rgbToHex(rgb.r, rgb.g, rgb.b)}
        </div>
      </Link>
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
