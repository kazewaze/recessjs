const code = {
  Default: `class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    const Button = React.createElement('button', { onClick: () => console.log('Hello Kaycee!') },
      'Click me');

    return(
      <div style={{textAlign: 'center', margin: '75px'}}>
        { Button }
      </div>
    );
  }
}

render(<App/>);
`};

export default code;