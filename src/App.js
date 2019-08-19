import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lottie from 'lottie-react-web'
import animation from './data.json'

class App extends React.Component {

  constructor() {
    super();
    this.state = { playing: true };
  }

  render() {
    return (
        <>
          <Lottie
              isPaused={!this.state.playing}
              options={{
                animationData: animation
              }}
          />
          <div style={{position: 'fixed', top: 0, left: 0}}>
            <button onClick={() => this.setState({ playing: !this.state.playing })}>Stop</button>
          </div>
        </>
    );
  }
}

export default App;
