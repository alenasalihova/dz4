import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { info } = this.props;
    const text = info ? info.text : null;

    return (
      <footer>
        <p>{text}</p>
      </footer>
    );
  }
}

export default Footer;