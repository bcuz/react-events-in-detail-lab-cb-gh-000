import React from 'react';

export default class DelayedButton extends React.Component {

  tickle = (event) => {
  //  let arr = [event.clientX, event.clientY]
  event.persist()
// feel like this should work.
  setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay);

 }

  render() {
      return (
        <button onClick={this.tickle}>Tickle me!</button>
      );
    }
}
