import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default class SuccessfulBuy extends React.Component {
  constructor(props) {
    super(props)
    this.partners = this.props.partners.partners
    this.count = 2
  }
  render() {
    return (
      <Router>
        <div>
          <div className="partners__category">
            {this.partners.map(
              (item, index) =>
                index <= this.count && (
                  <div className="partners__category__items" key={index.toString()}>
                    <Link
                      to={`/${item.name}`}
                      className="partners__category__items__partner"
                    >
                      <img
                        className="partners__category__items__partner__image"
                        src={`/image/partners/${item.img_id}.png`}
                        alt="partners"
                      />
                    </Link>
                  </div>
                ),
            )}
          </div>
          <div className="partners__category__class">Выгодные купоны</div>
        </div>
      </Router>
    )
  }
}
