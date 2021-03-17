import React from 'react'

import SuccessfulBuy from './successfulBuy/SuccessfulBuy'
import LargeAccrual from './largeAccrual/LargeAccrual'
import PersonalSale from './personalSale/PersonalSale'
import SaleAtBonus from './saleAtBonus/SaleAtBonus.js'

export default class Partners extends React.Component {

  render() {
    const partners = this.props.partners
    return (
      <div className="partners container">
        <SaleAtBonus partners={partners} />
        <SuccessfulBuy partners={partners} />
        <LargeAccrual partners={partners} />
        <PersonalSale partners={partners} />
      </div>
    )
  }
}
