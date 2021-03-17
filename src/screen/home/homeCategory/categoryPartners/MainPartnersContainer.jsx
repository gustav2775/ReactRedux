import React from 'react'
import MainPartner from './MainPartner'

class MainPartnersContainer extends React.Component {
  upCount = (count) => {
    this.props.upViewPartnersAction(count)
  }

  render() {
    const partners = this.props.partners.partners
    const partnersCategory = this.props.partners.partnersCategory
    const countPartnersView = +this.props.partners.countPartnersView

    return (
      <div className="main-coupons-partners container">
        <div className="coupons-partners">
          {partners.map(
            (item, index) =>
              item.bonus === partnersCategory && (
                <MainPartner key={index} item={item} />
              ),
          )}
        </div>

        <button
          onClick={() => this.upCount(countPartnersView)}
          className="main-coupons-partners__pagination"
        >
          Еще партнеров
        </button>
      </div>
    )
  }
}
export default MainPartnersContainer
