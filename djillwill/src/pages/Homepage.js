import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import logoName from '../assets/images/dj-name.png';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
       <div className="homepage-overlay">
       <ul className="homepage-social-media">
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li> <FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faSoundcloud} /></li>
        </ul>
       <div className="homepage-main">
       <img className="logo-name img-fluid" src={logoName} alt="Dj Ill Wil" />
        <div>
          <ul className="homepage-nav">
            <li>
            <Link to="/">Home</Link></li>
            <li><Link to="/bio">Bio</Link></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </div>
       </div>
       </div> 
      </div>
    );
  }
}

export default Homepage;