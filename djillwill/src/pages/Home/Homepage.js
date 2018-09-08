import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import logoName from '../../assets/images/dj-name.png';
import Tracklist from './Tracklist';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="homepage">
        <div className="homepage-overlay">
        <ul className="homepage-social-media">
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faSoundcloud} /></li>
          </ul>
        <div className="homepage-main">
        <img className="logo-name img-fluid" src={logoName} alt="Dj Ill Wil" />
          <nav className="cl-effect-4">
            <ul className="homepage-nav">
              <li><NavLink className="main-nav" to="/">Home</NavLink></li>
              <li><NavLink className="main-nav" to="/bio">Bio</NavLink></li>
              <li><NavLink className="main-nav" to="/music">Music</NavLink></li>
              <li><NavLink className="main-nav" to="/media">Media</NavLink></li>
              <li><NavLink className="main-nav" to="/events">Events</NavLink></li>
              <li><NavLink className="main-nav" to="/contact">Contact Me</NavLink></li>
            </ul>
          </nav>
        </div>
        </div> 
        </div>
        <Tracklist />
      </div>
    );
  }
}

export default Homepage;