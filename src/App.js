import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import stylesheets
import './css/style.css'
// import modules
import Home from './modules/home'
import Contact from './modules/contact'
import Search from './modules/search'
import Video from './modules/video'
import Login from './modules/login'
import Footer from './modules/footer'
import Header from './modules/header'
import Gallery from './modules/gallery'
import List from './modules/query'
import NotFound from './modules/404'
const App = () => 
(
  <Router>
    <div>
      <Route path="/" render={() => <Header /> } />
      <Route path="/" render={() => <Footer /> } />
      <Switch>
        <Route exact path="/" render={() => <Home /> } />
        <Route path="/video" render={() => <Video />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/gallery" render={ () => <Gallery />} />
        <Route path="/login" render={ () => <Login />} />
        <Route path='/list' component={List} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default App