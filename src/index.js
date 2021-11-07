import React from 'react';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import settings from '../config/settings';
import mix from '../config/mix.js';
import '../config/Source_Code_Pro/SourceCodePro-Bold.ttf';
import '../Recess.css';

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
        <LiveEditor className="LiveEditor" />
        <LiveError />
        <div style={{ backgroundColor: theme.plain.backgroundColor, borderTop: borderNew }} className="LivePreview__Container">
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