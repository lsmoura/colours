/** @jsx preact.h */

import preact from 'preact';
import ShadeTintBase from './ShadeTintBase';

class Tints extends ShadeTintBase {
  render(props) {
    const colors = [];

    colors.push(props.color);

    const rIncrement = ((255 - props.color.r) / 10);
    const gIncrement = ((255 - props.color.g) / 10);
    const bIncrement = ((255 - props.color.b) / 10);

    for (let i = 0; i < 10; i++) {
      const myColor = {};
      myColor.r = parseInt(props.color.r + rIncrement * (i + 1), 10);
      myColor.g = parseInt(props.color.g + gIncrement * (i + 1), 10);
      myColor.b = parseInt(props.color.b + bIncrement * (i + 1), 10);
      colors.push(myColor);
    }

    return (
      <div className="tints">
        {this.allBlocks('tint', colors)}
      </div>
    );
  }
}

export default Tints;
