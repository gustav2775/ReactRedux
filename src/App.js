import { React, Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { connect } from "react-redux"

import './style.css'

import HeaderNav from './shared/header/HeaderNav'
import RightLocation from './shared/header/location/RightLocation'
import HeaderSearch from './shared/header/search/HeaderSearch'
import HeaderLogin from './shared/header/login/HeaderLogin'

import Home from './screen/home/Home'

import FooterNav from './shared/footer/FooterNav'
import FooterNavMedia from './shared/footer/FooterNavMedia'

import upViewPartners from './store/actions/upViewPartners';
import upViewCoupons from './store/actions/upViewCoupons';
import variableCouponsCategory from './store/actions/variableCouponsCategory';
import variablePartnersCategory from './store/actions/variablePartnersCategory';
import search from './store/actions/search';
import location from './store/actions/location';

class App extends Component {
  render() {
    return (
      <Router>
        <header className="container">
          <div className="header__icon">
            <img src="image/header/logo_x2 1.jpg" alt="logo" />
          </div>
          <HeaderNav />
          <div className="header-right">
            <RightLocation location = {this.props.location} locationAction= {this.props.locationAction} />
            <div className="header-right__buttons">
              <HeaderSearch searchAction = {this.props.searchAction}/>
              <HeaderLogin />
            </div>
          </div>
        </header>
        <Switch>
          <Route path="/">
            <Home store={this.props} />
          </Route>
        </Switch>
        <footer className="footer">
          <div className="footer__box">
            <div className="footer-left">
              <div className="footer-left__phone">
                <h2 className="footer-left__number">900</h2>
                <div className="footer-left__sub-numer">По России бесплатно</div>
              </div>
              <div className="footer-left__logo">
                <img src="image/footer/footer-left/sberlogo.svg" alt="logo" />
              </div>
              <div className="footer-left__copyrite">
                © 1997—2019 ПАО Сбербанк.
            </div>
            </div>
            <div className="footer-right">
              <FooterNav />
              <FooterNavMedia />
              <div className="footer-right__significant">
                <Link to="/" className="significant__link">
                  Политика
              </Link>
                <span className="significant__text">
                  АО «ЦПЛ» в отношении обработки персональных данных и
              </span>
                <Link to="/" className="significant__link">
                  Согласие
              </Link>
                <span className="significant__text">
                  на обработку данных участника Программы «Спасибо от Сбербанка»
              </span>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    )
  }
}

const mapStateToProps = store => ({
  couponsArr: store.coupons,
  partnersArr: store.partners,
  location: store.location
})

const mapDispatch = dispatch => ({
  searchAction: linkPage=>dispatch(search(linkPage)),
  locationAction: city=>dispatch(location(city)),
  upViewCouponsAction: countPartnersView => dispatch(upViewCoupons(countPartnersView)),
  upViewPartnersAction: countPartnersView => dispatch(upViewPartners(countPartnersView)),
  variableCouponsCategoryAction: couponsCategory => dispatch(variableCouponsCategory(couponsCategory)),
  variablePartnersCategoryAction: partnersCategory => dispatch(variablePartnersCategory(partnersCategory)),
})

export default connect(mapStateToProps, mapDispatch)(App)