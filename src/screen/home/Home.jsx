import { React, Component } from 'react'

import CategoryCoupons from './homeCategory/CategoryCoupons'
import MainCouponsContainer from './homeCategory/categoryCoupons/MainCouponsContainer'
import CategoryPartners from './homeCategory/CategoryPartners'
import MainPartnersContainer from './homeCategory/categoryPartners/MainPartnersContainer'
import Partners from './homePartners/Partners'

export default class Home extends Component {
  render() {
    const {
      couponsArr,
      partnersArr,
      variableCouponsCategoryAction,
      variablePartnersCategoryAction,
      upViewCouponsAction,
      upViewPartnersAction,
    } = this.props.store

    console.log(this.props.store)
    return (
      <main className="main">
        <div className="main__header">
          <h1 className="main-title">Партнеры и предложения</h1>
        </div>
        <CategoryCoupons
          coupons={couponsArr}
          couponsCategoryAction={variableCouponsCategoryAction}
        />
        <CategoryPartners
          partners={partnersArr}
          partnersCategoryAction={variablePartnersCategoryAction}
        />

        <MainPartnersContainer
          partners={partnersArr}
          upViewPartnersAction={upViewPartnersAction}
          partnersCategoryAction={variablePartnersCategoryAction}
        />
        <MainCouponsContainer
          coupons={couponsArr}
          upViewCouponsAction={upViewCouponsAction}
        />

        <Partners partners={partnersArr} />
      </main>
    )
  }
}
