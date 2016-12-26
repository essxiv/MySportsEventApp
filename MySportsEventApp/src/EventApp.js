import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './Search';
import EventMap from './EventMap';
import EventList from './EventList';
import EventInput from './EventInput';

class EventApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      userSearch : '',
      eventList : [{'title': 'My first Sport Event',
                    'description': 'Come out for a pick up basketball game this weekend with your friends',
                    'address': {streetAddress : '1190 W Webster Ave',
                                zip : 92804,
                                state : 'CA',
                                city : 'Culver City'},
                     image : 'http://placekitten.com/200/400'}]
    };
    this.handleEventEntered = this.handleEventEntered.bind(this);
  }  
  handleEventEntered(newEvent) {
    this.state.eventList.push(newEvent);
    this.setState({
      // eventList : this.state.eventList.concat(newEvent)
      eventList : this.state.eventList
      //change css to remove modal and ungray body
    })
  }

  render() {
    return (
      <div>
        <EventInput handleEventEntered={this.handleEventEntered}/>
        <EventList eventList={this.state.eventList}/>
      </div>
    );
    }
}

export default EventApp;