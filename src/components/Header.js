import React from 'react';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }
  

  render() {
    console.log(this.state.intervalId)
    return (
      <div
        title="Back to top"
        className='head active'
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <h1>KARAKOU</h1>
      </div>
    );
  }
}

export default Header;