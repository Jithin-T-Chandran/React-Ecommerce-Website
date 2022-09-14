import React, { Fragment } from "react";
import youtubeImage from "../../Components/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg";
import spotifyImage from "../../Components/img/Spotify Logo.png";
import facebookImage from "../../Components/img/Facebook Logo.png";

function Footer() {
  return (
    <Fragment>
      <footer>
        <div className="footer-title">The Generics</div>
        <div className="footer-icons">
          <ul>
            <li>
              <a href="https://www.youtube.com">
                <img src={youtubeImage} alt="Youtube" />
              </a>
            </li>
            <li>
              <a href="https://spotify.com">
                <img src={spotifyImage} alt="Spotify" />
              </a>
            </li>
            <li>
              <a href="https://facebook.com">
                <img src={facebookImage} alt="Facebook" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
