import React from 'react';

export default class DelayedButton extends React.Component {

  tickle = (event) => {
  //  let arr = [event.clientX, event.clientY]
  let e = event
// feel like this should work.
  setTimeout(() => { this.props.onDelayedClick(e) }, this.props.delay);

 }

  render() {
      return (
        <button onClick={this.tickle}>Tickle me!</button>
      );
    }
}
