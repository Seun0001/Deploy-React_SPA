import React, { Component } from "react";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
  render() {
      return (
        <HashRouter>
          <div>
            <h1>Deploy React SPA</h1>
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/stuff">Stuff</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stuff" element={<Stuff />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </HashRouter>
      );
  }
}

export default Main;
