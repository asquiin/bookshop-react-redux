import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer'
import headerIcon from './assets/header-books.svg'
import headerNeth from './assets/header-neth.svg'
import headerUser from './assets/header-user.svg'
import './app.css'

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">

			<ul className="App-header">
				<div className="flex"> <img className="w-[70px]" src={headerIcon}/>
				<img className="w-[100px]" src={headerNeth}/>
				</div>
			<ul className="flex justify-around gap-10"> 			
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

<div className="flex"> <img className="w-[70px]" src={headerUser}/>

				</div>

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

