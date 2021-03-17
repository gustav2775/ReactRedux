import { React, Component } from "react";

export default class MainCoupon extends Component {

    render() {
        const {item} = this.props;
        return (
            <div className="category-coupons__coupons__item ">
                <img
                    className="category-item__image"
                    src={`/image/main/coupon-category/coupon/${item.img_id}.png`}
                    alt="coupon"
                />
                <div className="category-item__info">
                    <img
                        className="category-item__info__lable"
                        src={`/image/partners/${item.img_id}.png`}
                        alt="partner"
                    />
                    <div className="category-item__info__partner__text">
                        <div className="category-item__info__partner-name">
                            {item.partner_name}
                        </div>
                        <div className="category-item__info__partner__text__sale">
                            {item.text}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}