// import React from 'react'
import {Jumbotron,Accordion,Panel,Row,Col,Button} from 'react-bootstrap'

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
import poster from '../images/7.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Gallery from './gallery';


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
          <h1 className="searchTitle">
            FIND YOUR FOOD TRUCK
          </h1>
        </div>

        <div className="Search_Buttom">
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Enter your location" onChange={this.handleChange} value={this.state.searchLocation} />
          </form>
        </div>
        <div className="Search_Column">
          <Row>
            
              {this.state.error ? this.state.error :
                this.state.results.map(result => <Link to="/gallery"><SearchResult key={result.id} result={result} /></Link>)
              }
              {/* <div className="searchedResult">
              <h6>Searched location result</h6>
              {this.state.searchLocation}
              </div> */}
          </Row>
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
  <Col xs={4}>
    
    
    <img className="card-img-top" src={result.image_url} alt={result.name} style={{width: "100%", maxHeight: "auto"}}/>
    <h3 className="card-title">{result.name}</h3>
   <p className="card-text"> Rating:{result.rating}</p>
  
    <p className="card-text">Address:{result.location.display_address}</p>
    
    <p className="card-text">Phone:{result.phone}</p>
  
    
  </Col>

export default Search;

