import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Cart from "./pages/Cart/Cart";
import Clean from "./pages/Clean/Clean";
import Details from "./pages/Books/Details";
import Footer from "./components/Footer";
import About from "./pages/Home/About";
import headerIcon from "./assets/header-books.svg";
import headerNeth from "./assets/header-neth.svg";
import headerUser from "./assets/header-user.svg";
import "./app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="min-h-screen flex flex-col">
          <header className="App-header">
            <div className="flex">
              <img className="w-[70px]" src={headerIcon} alt="" />
              <img className="w-[100px]" src={headerNeth} alt="" />
            </div>

            <ul className="flex justify-around gap-[80px]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Books">Books</Link>
              </li>
              <li>
                <Link to="/Cart">Cart</Link>
              </li>

                      <li>
                <Link to="/Clean">Clean</Link>
              </li>
            </ul>

            <div className="flex">
              <img className="w-[70px]" src={headerUser} alt="" />
            </div>
          </header>

          <main className="flex-1 p-0 m-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Books" element={<Books />} />
              <Route path="/About" element={<About />} />
              <Route path="/Cart" element={<Cart />} />
                 <Route path="/Clean" element={<Clean />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
