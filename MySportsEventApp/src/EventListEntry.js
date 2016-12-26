import React from 'react';

let EventListEntry = ({event}) => {
  console.log('event', event);
  return (
    <div className="Event-List-Entry">
      <div className="Event-Title">{event.title}</div>
      <div className="Event-Address">{JSON.stringify(event.address)}</div>
      <img src={event.image} className="Event-Image"/>
      <div className="Event-Description">{event.description}</div>
    </div>
  )
}

export default EventListEntry;