// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */

//import preact from 'preact';

//reference: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#5624139
export const hexToRgb = hex => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export const componentToHex = component => {
  const hex = component.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

export const rgbToHex = (r, g, b) => {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

export const min = (...args) => {
  let min = args[0];
  args.forEach(e => {
    if (e < min) min = e;
  });

  return min;
};

export const max = (...args) => {
  let max = args[0];
  args.forEach(e => {
    if (e > max) max = e;
  });

  return max;
};

// Reference: https://stackoverflow.com/questions/3018313/algorithm-to-convert-rgb-to-hsv-and-hsv-to-rgb-in-range-0-255-for-both
export const rgbToHsv = ({ r, g, b }) => {
  const pR = r / 255;
  const pG = g / 255;
  const pB = b / 255;

  const _min = min(pR, pG, pB);
  const _max = max(pR, pG, pB);

  const out = {
    h: 0,
    s: 0,
    v: _max,
  };

  const delta = _max - _min;
  if (delta < 0.00001) {
    return out;
  }


  if (_max <= 0) {
    // This should never happen.
    return out;
  }

  out.s = delta / _max;

  if (pR >= max) {
    out.h = (pG - pB) / delta;
  } else if (pG >= max) {
    out.h = 2.0 + (pB - pR) / delta;
  } else {
    out.h = 4.0 + (pR - pG) / delta;
  }

  out.h = out.h * 60;

  if (out.h < 0) out.h = out.h + 360;

  out.h = Math.round(out.h);
  out.s = Math.round(out.s * 100);
  out.v = Math.round(out.v * 100);

  return out;
}

export const hsvToRgb = ({ h, s, v }) => {
  console.log('h', h);
  console.log('s', s);
  console.log('v', v);
  const hRad = Math.PI * h / 360;
  const r = (v / 100) * (1 + s/100 * (Math.cos(hRad) - 1));
  const g = (v / 100) * (1 + s/100 * (Math.cos(hRad + 2 * Math.PI / 3) - 1));
  const b = (v / 100) * (1 + s/100 * (Math.cos(hRad - 2 * Math.PI / 3) - 1));

  return { r, g, b };
};
