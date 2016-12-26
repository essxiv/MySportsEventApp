import React from 'react';

let EventListEntry = ({event}) => {
  return (
    <div className="Event-List-Entry">
      <div className="Event-Title">{event.title}</div>
      <div className="Event-Address">
      {event.address.streetAddress}<br/>
      {event.address.zip}<br/>
      {event.address.city}<br/>
      {event.address.state}</div>
      <img src={event.image} className="Event-Image"/>
      <div className="Event-Description">{event.description}</div>
    </div>
  )
}

export default EventListEntry;