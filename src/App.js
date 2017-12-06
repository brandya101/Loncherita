import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
// import Header from './components/Header'
// import Home from './components/Home'

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

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					{/* <li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li> */}
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/signup" className="nav-link">
							sign up
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="App">
				{/* <Header user={this.state.user} /> */}
				{/* LINKS to our different 'pages' */}
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Router>
					<div>
						<Route path="/" render={() => <Header />} />
						{/* <Route path="/" render={() => <DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn}/>}/>						 */}
						<Switch>
							<Route exact path="/" render={() => <Home />} />
							<Route path="/video" render={() => <Video />} />
							<Route path="/contact" render={() => <Contact />} />
							<Route path="/search" render={() => <Search />} />
							<Route path="/gallery" render={() => <Gallery />} />
							{/* <Route path="/login" render={() => <Login />} /> */}
							<Route path='/list' component={List} />
							<div className="loginAndSignup">
							<Route
								exact
								path="/login"
								render={() =>
									<LoginForm
										_login={this._login}
										_googleSignin={this._googleSignin}
									/>}
							/>
							<Route exact path="/signup" component={SignupForm} />
							</div>
							<Route component={NotFound} />
							{/* <LoginForm _login={this._login} /> */}
						</Switch>
						<Route path="/" render={() => <Footer />} />
					</div>
				</Router>
				
			</div>
		)
	}
}

export default App
