import React from "react";
import {Link} from 'react-router-dom'

export const FooterNavMedia = () => {
    return (
        <div className="footer-right__media">
              <div className="footer-right__media__stores">
                <Link to="/" className="footer-right__media__stores__store">
                  <img
                    src="image/footer/footer-right/media__stores/stores/Group 98.png"
                    alt="google"
                  />
                </Link>
                <Link to="/" className="footer-right__media__stores__store">
                  <img
                    src="image/footer/footer-right/media__stores/stores/app-store.svg"
                    alt="apple"
                  />
                </Link>
              </div>
              <div className="footer-right__media__social">
                <Link to="/" className="footer-right__media__social_link">
                  <img
                    src="image/footer/footer-right/media__stores/social/ok.svg"
                    alt="ok"
                  />
                </Link>
                <Link to="/" className="footer-right__media__social_link">
                  <img
                    src="image/footer/footer-right/media__stores/social/fb.svg"
                    alt="fb"
                  />
                </Link>
                <Link to="/" className="footer-right__media__social_link">
                  <img
                    src="image/footer/footer-right/media__stores/social/vk.svg"
                    alt="vk"
                  />
                </Link>
                <Link to="/" className="footer-right__media__social_link">
                  <img
                    src="image/footer/footer-right/media__stores/social/inst.svg"
                    alt="inst"
                  />
                </Link>
              </div>
            </div>
    )
}
export default FooterNavMedia