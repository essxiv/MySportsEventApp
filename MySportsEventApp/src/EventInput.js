import React, { Component } from 'react';

class EventInput extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalDisplayed: false
    }
    this.eventInputPageChanged = this.eventInputPageChanged.bind(this);
    this.eventButtonClicked = this.eventButtonClicked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  eventInputPageChanged () {
    var modal = document.getElementById('modal');    
    modal.style.display = this.state.modalDisplayed ? 'none' : 'block';
    this.setState({
      modalDisplayed: !this.state.modalDisplayed
    });
  }

  eventButtonClicked () {
    this.eventInputPageChanged()
  }

  handleSubmit (evt) {
    evt.preventDefault();
    let eventObj = {};
    eventObj.address = {}

    eventObj.title = document.getElementById('title').value;
    eventObj.description = document.getElementById('description').value;
    eventObj.image = document.getElementById('image').value;  
    eventObj.address.zip = document.getElementById('zip').value;
    eventObj.address.state = document.getElementById('state').value;
    eventObj.address.city = document.getElementById('city').value;
    eventObj.address.streetAddress = document.getElementById('street-address').value;

    document.getElementById('User-Input-Form').reset();
    this.eventInputPageChanged();
    this.props.handleEventEntered(eventObj);
  }

  render() {
    return (
      <div> 
        <button className="Create-Event-Button" onClick={this.eventButtonClicked}>Create Event</button>
        <div style={{display:'none'}} id="modal">
          <form id="User-Input-Form" onSubmit={this.handleSubmit}>
          <label> Title:
            <input id="title" type="text"/>
          </label>
          <label> Description:
            <textarea id="description" type="text"/>
          </label>
          <label> Image URL:
            <input id="image" type="text"/>
          </label>
          <label> Street Address:
            <input id="street-address" type="text"/>
          </label>
          <label> Zipcode:
            <input id="zip" type="text"/>
          </label>
          <label> State:
            <input id="state" type="text"/>
          </label>
          <label> City:
            <input id="city" type="text"/>
          </label>
          <button type="submit">Submit Event</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EventInput;