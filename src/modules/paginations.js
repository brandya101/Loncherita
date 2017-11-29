import React from 'react'
import createReactClass from 'create-react-class'
import {Pagination} from 'react-bootstrap'

const Paginations = createReactClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  },

  render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
    );
  }
})

export default Paginations;