import React, { Component } from 'react';
import GraphAPI from '../../services/graph_api';
import Event from './Event';

class Calendar extends Component {

  state = { events: [] };

  componentDidMount(){
    GraphAPI.getEvents().then((r) => {
      this.setState({
        events: r
      })
    });
  }

  render() {

    const events = this.state.events.map((event) => {
      return <Event name={event.name}
                    startTime={event.start_time}
                    place={event.place ? event.place.name : 'n/a'}
                    id={event.id}
                    key={event.id} />
    });

    return (
      <div>
        {events}
      </div>
    );
  }
}

export default Calendar;