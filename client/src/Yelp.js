import React, { Component } from 'react';
import './Yelp.css';

class Yelp extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {/* we access line <Yelp title={yelpinfos[0]} /> from App.js because Yelp component has a property of title, and we can access it from this.props.title*/}
                <h2> This is yelp section </h2>
                <h1>{this.props.title} </h1>
                <YelpInfo poster={this.props.poster} />
            </div>
        )
    }
}

class YelpInfo extends Component {
    render() {
        console.log(this.props)
        return (
            <img src={this.props.poster} />
            // <img src='/foodTruckIllust1.jpg' />
            // <img alt="" src="https://image.freepik.com/free-vector/retro-food-truck_23-2147530708.jpg" />
        )
    }
}

export default Yelp;