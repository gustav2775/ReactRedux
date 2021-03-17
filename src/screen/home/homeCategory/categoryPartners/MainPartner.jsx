import { React, Component } from 'react'

export default class MainPartner extends Component {
  render() {
   const {item} = this.props
    return (
      <div className="coupons-partners__item" >
        <h4 className="coupon-partner__sale">{item.sale} %</h4>
        <div className="coupon-partner__subsale">Спасибо от суммы покупки</div>
        <img
          className="coupon-partner__lable"
          src={`/image/partners/${item.img_id}.png`}
          alt="partner"
        />
        <div className="coupon-partner__partner-name">
          {item.partner_name}
        </div>
      </div>
    )
  }
}
