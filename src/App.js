import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer'
import './app.css'

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/Books">Books</Link>
			</li>
			<li>
				<Link to="/Cart">Cart</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/Books' element={< Books />}></Route>
				<Route exact path='/Cart' element={< Cart />}></Route>
		</Routes>
		</div>

		<Footer/>

	</Router>
);
}
}

export default App;

