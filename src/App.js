import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Backdrop from './components/Backdrop';

class App extends React.Component {

  
  
  render() {
    const album = []
    return (
      <div className="App">
        <BackgroundVideo />
        <Backdrop album={this.album} />
      </div>
    );
  }
}

export default App;
