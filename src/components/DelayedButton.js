
import React from 'react';

export default class DelayedButton extends React.Component {

  tickle = (event) => {
   let arr = [event.clientX, event.clientY]
   this.props.onReceiveCoordinates(arr)
 }
  
  render() {
      return (
        <button onClick={this.tickle}>Tickle me!</button>
      );
    }
}
