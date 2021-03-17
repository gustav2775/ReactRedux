import React from 'react'

export default class RightLocation extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }
  filtersLocation = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  getCity = () => {

  }
  render() {


    return (
      <div className="right_location">
        <button
          onClick={() => this.filtersLocation()}
          className="right_location_button"
        >
          <span>
            <i className="fas fa-location-arrow"></i>
          </span>
          <span className="right_location__location">Санкт-Петербург</span>
        </button>
        {this.state.isOpen && (
          <div className="location__drop ">
            <div className="location__drop__header">
              <span>Ваш город -</span>
              <strong className="location__drop__location">Санкт-Петербург</strong>
            </div>
            <div className="login__drop__footer">
              <button
                onClick={() => this.filtersLocation()}
                className="location__drop__footer__true"
              >
                Да
              </button>
              <button className="location__drop__footer__new-location"
                onClick={() => this.getCity()}>
                Сменить город
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
