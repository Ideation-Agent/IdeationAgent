class CustomColor {
  constructor(hex) {
    this.hex = hex;
  }
  withOpacity(opacity = 1) {
    const [r, g, b] = this.hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${opacity})`;
  }
  valueOf() {
    return this.hex;
  }
}

const Color = function (hex) {
  const color = new CustomColor(hex);
  Object.defineProperty(color, "__emotion_styles", {
    value: function () {
      return hex;
    },
  });

  return color;
};

export const COLORS = {
  white: Color("#ffffff"),
  black: Color("#000000"),
  gray_1: Color("#9292AA"),
  background: Color("rgba(250, 250, 250, 1)"),
  orange: Color("#fda942"),
  yellow_1: Color("#FFEE9E"),
  yellow_2: Color("#FAE067"),
  blue_1: Color("#BBD0FF"),
  blue_2: Color("#A0BEFF"),
  red_1: Color("#FFB9A8"),
  red_2: Color("#FF8568"),
  purple_1: Color("#E3BDFF"),
  purple_2: Color("#C67BFF"),
};
