// import React from 'react'
import {Jumbotron,Accordion,Panel} from 'react-bootstrap'

// from wheresmycoffee code 
// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import OAuthSimple from 'oauthsimple'
// from wheresmycoffee code ends

// client_id Hae34UC7SAHGztdO6453UA
// client_secret yFj8g7qj0KOFCHMfcPkn1wCWnFgSrZ3s6eHiyRpfwKnlxuXl0qcuFcIFM6SGh4Yl
// access token 58yMzd4m4yR5w-hPBeyKX6ZrAXpQa_K3ROGnW2KlWVXzX-Cv3J7fCZwf_j7TYKaUUEhHH09PFaR2RCPS_eJsdILH3mb9f6Ew_LFzmWxu5ve0FniimzvtV-ObNAIEWnYx


import React, { Component } from 'react';
import './search.css';
import poster from '../images/poster.png';
import axios from 'axios';

// import yelpApi from '../../server/yelpApi';

// const yelp = require('yelp-fusion');

class Search extends Component {
  state = {
    searchLocation: "",
    error: false,
    results: []
  }

  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.setState({searchLocation:e.target.value})
  }
  handleSubmit = e => {
    e.stopPropagation()
    e.preventDefault()
    axios.get(`/search?q=${this.state.searchLocation}`)
      .then( (results) => {
        console.log(results)
        if (results.data.error) {
          this.setState({error: results.data.error})
        }
        else {
          console.log(results.data[0])
          const searchResults = results.data.map( result => result)
          console.log(searchResults);
          this.setState({error: false, results: searchResults})
        }
      })
  }
  render() {
    return (
      <div className="Search">
        <div className="Search_Header">
          <h1>
            FIND YOUR FOOD TRUCK
          </h1>
        </div>
        <div className="Search_Buttom">
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Enter your location" onChange={this.handleChange} value={this.state.searchLocation} />
          </form>
        </div>
        <div className="Search_Column">
          {this.state.error ? this.state.error :
            <ul>
              {this.state.results.map(result => <SearchResult key={result.id} result={result} />)}
            </ul>
          }
          {/* <div className="searchedResult">
            <h6>Searched location result</h6>
            {this.state.searchLocation}
          </div> */}
        </div>
        <SearchPoster />
      </div>
    )
  }
}



class SearchPoster extends Component {
  render() {
    return(
      <img alt="poster-sample" src={poster} />
    )
  }
}

const SearchResult = ({ result }) => 
  <li>
    {result.name}
    <img src={result.image_url} alt={result.name}/>
    {result.phone}
    {result.price}
    {result.rating}
  </li>

export default Search;