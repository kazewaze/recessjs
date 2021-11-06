<p align="center">
  <img src="https://raw.githubusercontent.com/KayceeIngram/assets-holder/main/recess.svg" alt="Recess.js Logo"/>
</p>

## Version 1.0 is Ready! More Features and Official Docs Coming Soon!

Eazy Peazy Playground Components for React.js (Just Plug and Play!)

Recess.js is built on top of [React-Live](https://github.com/FormidableLabs/react-live), an awesome project by [Formidable](https://formidable.com) for building a Playground Component.

The current 1.0 version of Recess.js is ready for use. For simple usage I have provided basic instructions below until the Docs are completed.

Install Recess.js with npm or yarn:

```console
npm install recessjs
```
or
```console
yarn install recessjs
```
Once installed you simply import Recess.js into your React App.

Here is an Example:

```jsx
import Recess from 'recessjs';
import './App.css';

// Used below to show an example but not required.
import styled from 'styled-components';

/*
  You only need two imports after Recess.js
  Recess.js is the only thing you have to install.
  Just import Recess.js, your code for Recess.js, and your chosen theme.
  The themes that you can import and use are located at:
  https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
*/

// A JavaScript file to store the code for Recess.js
import code from './code';

// The chosen theme for Recess.js
import theme from 'prism-react-renderer/themes/github';

function App() {
  return (
    <div className="App">
      {/* Works because of default settings */}
      <Recess />
      <p>OR</p>
      {/* Your chosen code to be rendered in Recess.js */}
      <Recess code={code} />
      <p>OR</p>
      {/* Your chosen code and theme */}
      <Recess code={code} theme={theme} />
      <p>OR</p>
      {/* dep is your chosen dependencies like styled-components */}
      {/* Install them within your main app and import. */}
      {/* Then pass them to dep. */}
      {/* To pass multiple dependencies place them in an object. */}
      {/* Like this: dep={{styled, bulma, etc.}}  */}
      <Recess code={code} theme={theme} dep={styled} />
      <p>OR</p>
      {/* filename is set to 'App.js' by default. */}
      {/* The filename is displayed at the top of Recess.js  */}
      {/* onInline is set to true by default. Pass it false if desired. */}
      <Recess
        code={code}
        theme={theme}
        dep={styled}
        filename={"NameOfMyApp.js"}
        onInline={false}
      />
    </div>
  );
}

export default App;
```

Here is a snapshot of Recess.js without any arguments.
Behold in all of it's default goodness:

<p align="center">
  <img style="max-width: 750px" height="75%" src="https://raw.githubusercontent.com/KayceeIngram/assets-holder/main/recess_default.png" alt="Recess.js Default Example"/>
</p>

**It is REQUIRED to include the render function at the end of each react app as you can see in the code.js file example below:**

```jsx
const code = `const App = () => {
  return (
    <div>
      <h1>Hello Kaycee!</h1>
    </div>
  );
}

render(<App/>);
`;

export default code;
```

You could also export an object with multiple code examples for Recess.js like so:

```jsx
const code = {
  firstExample:
    `const AppOne = () => {
       return (
         <div>
           <h1>Hello Kaycee!</h1>
         </div>
       );
     }

     render(<App/>);`,
  secondExample:
    `const AppTwo = () => {
       return (
         <div>
           <h1>Hello William!</h1>
         </div>
       );
     }

     render(<App/>);`
};
```

Cheers =)

Kaycee Ingram