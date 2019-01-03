import React from 'react';

export default class DelayedButton extends React.Component {

  tickle = (event) => {
  //  let arr = [event.clientX, event.clientY]

  setTimeout(function(){ this.props.onDelayedClick(event) }, this.props.delay);

 }

  render() {
      return (
        <button onClick={this.tickle}>Tickle me!</button>
      );
    }
}
