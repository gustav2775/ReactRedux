import { React, Component } from 'react'
import MainCoupon from './MainCoupon'

class MainCategoryCoupons extends Component {
  upCount(count) {
    this.props.upViewCouponsAction(count)
  }

  render() {
    const coupons = this.props.coupons.coupons
    const countCouponsView = this.props.coupons.countCouponsView
    const couponsCategory = this.props.coupons.couponsCategory

    
    return (
      <div className="main-category-coupons container">
        <h2 className="category-coupons__title">
          3 предложения в категории «Электроника и бытовая техника»
        </h2>
        <div className="category-coupons__coupons">
          
          {coupons.map((item, index) =>
            couponsCategory === 1 ? (
              <MainCoupon key={index.toString()} item={item} />
            ) : (
              item.category_id === couponsCategory && (
                <MainCoupon key={index.toString()} item={item} />
              )
            ),
          )}
        </div>

        <button
          onClick={() => this.upCount(countCouponsView)}
          className="main-category-coupons__pagination"
        >
          Еще купона
        </button>
      </div>
    )
  }
}

export default MainCategoryCoupons
