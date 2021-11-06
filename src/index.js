import React from 'react';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import settings from '../config/settings';
import '../Recess.css';

function mix(color_1, color_2, weight) {
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

const Recess = (props) => {
  const code = props.code ? props.code : settings.code;
  const filename = props.filename ? props.filename : settings.filename;
  const dep = props.dep ? props.dep : settings.dep;
  const onInline = props.onInline ? props.onInline : true;
  const theme = props.theme ? props.theme : settings.theme;

  const borderNew = `1px solid ${mix(theme.plain.backgroundColor, "ffffff", 77)}`;

  return (
    <div className="Playground">
      <header className="Playground__Header">
        <h3>{filename}</h3>
      </header>
      <LiveProvider code={code} scope={dep} noInline={onInline} theme={theme}>
        <LiveEditor style={{ width: '100%' }} />
        <LiveError />
        <div style={{ backgroundColor: theme.plain.backgroundColor, borderTop: borderNew}} className="LivePreview__Container">
          <header className="LivePreview__Header">
            <h3>Result</h3>
          </header>
          <LivePreview className="LivePreview" />
        </div>
      </LiveProvider>
    </div>
  );
}

export default Recess;