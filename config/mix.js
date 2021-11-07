export default function mix(color_1, color_2, weight) {
  color_1 = color_1[0] === '#' ? color_1.substring(1) : color_1;
  color_2 = color_2[0] === '#' ? color_2.substring(1) : color_2;
  weight = (typeof (weight) !== 'undefined') ? weight : 77;

  if (color_1[0] === 'f') {
    return "#dddfe1";
  }

  var color = "#";

  for (var i = 0; i <= 5; i += 2) {
    var v1 = parseInt(color_1.substr(i, 2), 16),
      v2 = parseInt(color_2.substr(i, 2), 16),
      val = Math.floor(v2 + (v1 - v2) * (weight / 100.0)).toString(16);

    while (val.length < 2) {
      val = '0' + val;
    }

    color += val;
  }

  return color;
}