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
import yelp from 'yelp-fusion';

// const yelp = require('yelp-fusion');
const clientId = 'Hae34UC7SAHGztdO6453UA';
const clientSecret = 'yFj8g7qj0KOFCHMfcPkn1wCWnFgSrZ3s6eHiyRpfwKnlxuXl0qcuFcIFM6SGh4Yl';

class Search extends Component {

  constructor(props) {
    super(props);
    yelp.accessToken(clientId, clientSecret)
    .then(response => {
      console.log(response.jsonBody.access_token);
    }).catch(e => {
      console.log(e);
    });
  }



  render() {
    return (
      <div className="Search">
        <h1>
          Hello this is search section
        </h1>
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

// const Search = () => (
//   <div>
//   <Jumbotron>
//   <Accordion>
//     <Panel bsStyle="danger" header="Question #1" eventKey="1">
//       Anim pariatur cliche reperhenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//     </Panel>
//     <Panel bsStyle="warning" header="Question #2" eventKey="2">
//       Anim pariatur cliche reperhenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//     </Panel>
//     <Panel bsStyle="info" header="Question #3" eventKey="3">
//       Anim pariatur cliche reperhenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//     </Panel>
//     <Panel bsStyle="success" header="Question #4" eventKey="4">
//       Anim pariatur cliche reperhenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//     </Panel>
//   </Accordion>
//   </Jumbotron>
//   </div>
// )

// from wheresmycoffee code 
// class Search extends Component {
//   state = {
//     position: 'unknown'
//   };

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({ position });
//       },
//       (error) => alert(error),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   }

//   fetchData() {
//     var lat = this.state.position.coords.latitude
//     var lng = this.state.position.coords.longitude
//     var latlng = "ll=" + String(lat) + "," + String(lng)
//     var consumerKey = "***"
//     var consumerSecret = "***"
//     var tokenSecret = "***"
//     var token = "***"

//     oauth = new OAuthSimple(consumerKey, tokenSecret)
//     request = oauth.sign({
//       action: "GET",
//       path: "https://api.yelp.com/v2/search",
//       parameters: "term=coffee&" + latlng,
//       signatures: { api_key: consumerKey, shared_secret: consumerSecret, access_token: token, access_secret: tokenSecret },

//     })

//     var nav = this.props.navigator

//     fetch(request.signed_url, { method: "GET" }).then(function (response) {
//       return response.json()
//     }).then(function (data) {
//       nav.push({
//         ident: "Results",
//         data: data
//       })
//     }).catch(function (error) {
//       console.log("Error:", error)
//     })

//   }

//   render() {
//     return (
//       <View style={styles.container}>

//         <Text style={styles.welcome}>
//           WheresMyCoffee
//         </Text>

//         <TouchableOpacity
//           style={{ borderRadius: 7, padding: 10, backgroundColor: '#4d9be3' }}
//           onPress={this.fetchData.bind(this)}>
//           <Text style={{ fontSize: 15 }}>Find Coffee!</Text>
//         </TouchableOpacity>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   welcome: {
//     fontSize: 30,
//     textAlign: 'center',
//     margin: 10,
//     marginBottom: 30
//   }
// });

// module.exports = Search
// from wheresmycoffee code ends

export default Search;
