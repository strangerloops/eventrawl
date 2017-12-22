import React, { Component } from 'react';

class Event extends Component {

  render() {
    return (
      <div>
        <p><a href={`https://www.facebook.com/events/${this.props.id}/`}>{this.props.name}</a></p>
        <p>{new Date(this.props.startTime).toLocaleString('en-US')}</p>
        <p>{this.props.place}</p>
        <hr/>
      </div>
    );
  }
}

export default Event;