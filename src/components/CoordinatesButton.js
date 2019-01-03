// Code CoordinatesButton Component Here


import React from 'react';

export default class CoordinatesButton extends React.Component {

<<<<<<< HEAD
  tickle = (event) => {
   let arr = [event.clientX, event.clientY]
   this.props.onReceiveCoordinates(arr)
 }

  render() {
      return (
        <button onClick={this.tickle}>Tickle me!</button>
      );
    }
=======
>>>>>>> f585fad6f58b58b5ddd9422279223745dce70188
}
