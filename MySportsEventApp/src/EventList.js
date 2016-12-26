import React from 'react';
import EventListEntry from './EventListEntry';

let EventList = ({eventList}) => (
  <div className="Event-List">
    {eventList.map((event, idx) => {
      return <EventListEntry key={idx} event={event}/>
    })}
  </div>
)

export default EventList;