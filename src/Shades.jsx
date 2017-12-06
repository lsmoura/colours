/** @jsx preact.h */

import preact from 'preact';
import ShadeTintBase from './ShadeTintBase';

import { shades } from './style.less';


class Shades extends ShadeTintBase {
  render(props) {
    const colors = [];

    colors.push(props.color);

    const rIncrement = (props.color.r / 10);
    const gIncrement = (props.color.g / 10);
    const bIncrement = (props.color.b / 10);

    for (let i = 0; i < 10; i++) {
      const myColor = {};
      myColor.r = parseInt(props.color.r - rIncrement * (i + 1), 10);
      myColor.g = parseInt(props.color.g - gIncrement * (i + 1), 10);
      myColor.b = parseInt(props.color.b - bIncrement * (i + 1), 10);
      colors.push(myColor);
    }

    return (
      <div className={shades}>
        {this.allBlocks('shade', colors)}
      </div>
    );
  }
}

export default Shades;
