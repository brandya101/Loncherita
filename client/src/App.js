import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Yelp from './Yelp';

// Create Arrays of Yelp infos (SAMPLES)
const yelpFoodTrucksinfos = [
  "The Burnt Truck",
  "The Lime Truck",
  "Kogi - Naranja",
  "Dogzilla"
]

const yelpFoodTrucksimages = [
  "http://www.theburnttruck.com/site/media/rokgallery/f/f5d49b80-581f-4c21-cf51-f2db12b7d403/0ee59bd5-46fc-41c2-c0a6-9754499e2e82.jpg",
  "https://s3.amazonaws.com/core-products-s3/b6156583-251e-4f9a-aedf-caa7a3f151e3.jpg?response-content-type=image%2Fjpeg&response-content-disposition=inline%3B%20filename%3D%22Lime2-truck2.jpg%22%3B%20filename%2A%3DUTF-8%27%27Lime2-truck2.jpg&X-Amz-Content-Sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEJX3SFQYQNRCXMQ%2F20171111%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20171111T071659Z&X-Amz-SignedHeaders=Host&X-Amz-Expires=604800&X-Amz-Signature=590241fd7343178645d22fd98918ca8ec4913a4a8a448e2da040f2fb708cc462",
  "https://s3-media1.fl.yelpcdn.com/bphoto/iEsUU1iuSLD4MZQc5FVsgg/348s.jpg",
  "https://images1.ocweekly.com/imager/u/original/6612315/tse1.jpg"
]

// all component should have a render function
class App extends Component {
  render() {
    return (
      <div className="App">
        loncherita testing
        <Yelp title={yelpFoodTrucksinfos[0]} poster={yelpFoodTrucksimages[0]} />
        <Yelp title={yelpFoodTrucksinfos[1]} poster={yelpFoodTrucksimages[1]} />
        <Yelp title={yelpFoodTrucksinfos[2]} poster={yelpFoodTrucksimages[2]} />
        <Yelp title={yelpFoodTrucksinfos[3]} poster={yelpFoodTrucksimages[3]} />
      </div>
    );
  }
}

export default App;
