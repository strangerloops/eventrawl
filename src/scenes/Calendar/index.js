import React, { Component } from 'react';
import GraphAPI from '../../services/GraphAPI';
import Event from './Event';
import { Link } from 'react-router-dom'

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
        <div>
          {events}
        </div>
        <div>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </div>
    );
  }
}

export default Calendar;