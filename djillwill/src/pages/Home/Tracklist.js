import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row, Container, Col } from 'reactstrap';
import mixtapeImage from '../../assets/images/mixtape-img.jpg';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons'


class Tracklist extends Component {
  render() {
    return (
      <Container className="track-list" fluid>
        <Container>
          <Row>
            <Col md="2">
              <img className="track-list-img" src={ mixtapeImage } alt="Mixtape promo" />
            </Col>
            <Col md="10">
              <Row className="track-list-songs">
              <Col>
              <Button className="m-t-3 play-tracks-btn">Play Tracks</Button>
                <p className="artist-info">Dj Ill Wil</p>
                <div className="song-list">
                  <FontAwesomeIcon className="play-icon" icon={faPlay} />
                  <h6 className="song-title">Lo Que Esperaban Mixtape</h6>
                <ul className="song-social-media">
                  <li><FontAwesomeIcon icon={faFacebook} /></li>
                  <li><FontAwesomeIcon icon={faTwitter} /></li>
                  <li><FontAwesomeIcon icon={faInstagram} /></li>
                  <li><FontAwesomeIcon icon={faSoundcloud} /></li>
                  </ul>
                </div>
                <div className="song-list">
                  <FontAwesomeIcon className="play-icon" icon={faPlay} />
                  <h6 className="song-title">Lo Que Esperaban Mixtape</h6>
                <ul className="song-social-media">
                  <li><FontAwesomeIcon icon={faFacebook} /></li>
                  <li><FontAwesomeIcon icon={faTwitter} /></li>
                  <li><FontAwesomeIcon icon={faInstagram} /></li>
                  <li><FontAwesomeIcon icon={faSoundcloud} /></li>
                  </ul>
                </div>
                <div className="song-list">
                  <FontAwesomeIcon className="play-icon" icon={faPlay} />
                  <h6 className="song-title">Lo Que Esperaban Mixtape</h6>
                <ul className="song-social-media">
                  <li><FontAwesomeIcon icon={faFacebook} /></li>
                  <li><FontAwesomeIcon icon={faTwitter} /></li>
                  <li><FontAwesomeIcon icon={faInstagram} /></li>
                  <li><FontAwesomeIcon icon={faSoundcloud} /></li>
                  </ul>
                </div>
             
              </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Tracklist;