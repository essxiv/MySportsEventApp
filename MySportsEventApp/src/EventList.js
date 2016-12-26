import React from 'react';
import EventListEntry from './EventListEntry';

let EventList = ({eventList}) => (
  <div className="Event-List">
    {eventList.map((event) => {
      return <EventListEntry event={event}/>
    })}
  </div>
)

export default EventList;