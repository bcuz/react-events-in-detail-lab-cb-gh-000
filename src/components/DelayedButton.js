
import React from 'react';

export default class DelayedButton extends React.Component {

  
  render() {
      return (
        <button onClick={this.tickle}>Tickle me!</button>
      );
    }
}
