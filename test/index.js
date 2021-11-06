import React from 'react';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';

import settings from '../config/settings';
import '../config/Recess.css';

const Recess = (props) => {

  const selection = props.selection ? props.selection : Object.keys(settings)[0];
  const { code, filename, scope, theme } = settings[selection];
  const onInline = props.onInline ? props.onInline : true;

  return (
    <div className="Playground">
      <header className="Playground__Header">
        <h3>{filename}</h3>
      </header>
      <LiveProvider code={code} scope={scope} noInline={onInline} theme={theme}>
        <LiveEditor style={{ width: '100%' }} />
        <LiveError />
        <div className="LivePreview__Container">
          <header className="LivePreview__Header">
            <h3>Result</h3>
          </header>
          <LivePreview className="LivePreview" />
        </div>
      </LiveProvider>
    </div>
  );
}

const domContainer = document.querySelector('app');
ReactDOM.render(<Recess />, domContainer);