import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

const dinoImg = require('../../assets/img/willkommen/dino.png')
const einhornImg = require('../../assets/img/willkommen/einhorn.png')
const logoImg = require('../../assets/img/logo.png')
const jubelgarantieImg = require('../../assets/img/willkommen/jubelgarantie.png')

class Willkommen extends Component {
  render() {
    return (
      <section id="willkommen">

        <section styleName="dino-intro">
          <img src={dinoImg} />
          <div>
            <strong>Der Beginn unseres Internetauftritts…</strong>
            <p>
              Vorerst findet ihr uns bei unserer Crowdfunding-Kampagne auf<br />
              <a href="http://www.startnext.de/schultuete" target="_blank">www.startnext.de/schultuete</a>
            </p>
            <strong>…später hier mehr im eigenen Online-Shop!</strong>
          </div>
          <img src={einhornImg} />
        </section>

        <img styleName="logo" src={logoImg} width="200" />

        <section styleName="startnext-vorteile">
          <ul>
            <li><p>Vorteile beim Kauf über STARTNEXT:</p></li>
            <li><p>Der Verkauf unserer Produkte startet bei startnext<br /><em>5 Euro günstiger</em> als später im Handel.</p></li>
            <li><p>Aber trotzdem mit <em>100% Jubelgarantie</em>, ansonsten bekommt ihr Euer Geld zurück.</p></li>
            <li><p>Und noch <em>weitere Gruppenrabatte</em> werden Euch über die Crowdfunding-Kampagne angeboten.</p></li>
            <li><p>Ihr seid die <em>ersten Schulstarter 2016</em> mit dieser ersten stehenden Schultüte.</p></li>
          </ul>
          <img styleName="jubelgarantie" src={jubelgarantieImg} />
        </section>

        <section styleName="startnext-video">
          <p>
            Hier geht's weiter zum Video unserer Crowdfunding-Kampagne bei<br />
            <a href="http://www.startnext.de/schultuete" target="_blank">www.startnext.de/schultuete</a>
          </p>
          <iframe
            src="https://player.vimeo.com/video/34814788"
            width="640"
            height="360"
            frameBorder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowFullscreen>
          </iframe>
        </section>
      </section>
    )
  }
}

export default CSSModules(Willkommen, styles)
