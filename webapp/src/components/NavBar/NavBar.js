import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar">
      <div id="nav-close" class="fas fa-times"></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="">Upcomming</a>
          <div class="menu-dropdown">
            <a>Harishchandra</a>
            <a>Kalasubai</a>
            <a>Ratangad</a>
            <a>Harihar</a>
            <a>korigad</a>
          </div>
        </li>
        <li>
          <a href="">Trekking</a>
          <div class="menu-dropdown">
            <a>Maharastra</a>
            <a>Karnatak</a>
            <a>Himachal</a>
            <a>Uttarakhand</a>
            <a>Nort-East</a>
          </div>
        </li>
        <li>
          <a href="">Camping</a>
          <div class="menu-dropdown">
            <a>Pune</a>
            <a>Mumbai</a>
            <a>Banglore</a>
            <a>Hydrabad</a>
            <a>Delhi</a>
          </div>
        </li>
        <li>
          <a href="">Backpacking</a>
          <div class="menu-dropdown">
            <a>
              <pre>Long Tours</pre>
            </a>
            <a>
              <pre>Short Tours</pre>
            </a>
          </div>
        </li>
        <li>
          <a href="">Rafting</a>
          <div class="menu-dropdown">
            <a>Maharastra</a>
            <a>Uttarakhand</a>
            <a>Karnataka</a>
            <a>Himachal</a>
          </div>
        </li>
        <li>
          <a href="">Paragliding</a>
          <div class="menu-dropdown">
            <a>Solang Vally</a>
            <a>Jammu</a>
          </div>
        </li>
        <li>
          <a href="">
            <pre>Road Trips</pre>
          </a>
          <div class="menu-dropdown">
            <a>Ladakh</a>
            <a>Goa</a>
            <a>Kanyakumari</a>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
