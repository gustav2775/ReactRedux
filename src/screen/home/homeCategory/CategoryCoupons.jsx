import React from 'react'

class CategoryCoupons extends React.Component {
  /*   constructor (){
    super()
    this.categoryActive = 1;
  } */
  setCouponCategory = (e) => {
    this.props.couponsCategoryAction(e.target.value)
  }

  render() {
    const categoryCoupons = [
      {
        name: 'Все партнеры',
        category: 'allCategory',
        value: '1',
      },
      {
        name: 'Все Популярные',
        category: 'popular',
        value: '2',
      },
      {
        name: 'Супермаркеты',
        category: 'shops',
        value: '3',
      },
      {
        name: 'Кафе и рестораны',
        category: 'cafe',
        value: '4',
      },
      {
        name: 'Такси',
        category: 'taxi',
        value: '5',
      },
      {
        name: 'Красота',
        category: 'beauty',
        value: '6',
      },
      {
        name: 'Зоотовары',
        category: 'zoo',
        value: '7',
      },
      {
        name: 'Электроника и бытовая техника',
        category: 'electronics',
        value: '8',
      },
      {
        name: 'Кино и театр',
        category: 'movie',
        value: '9',
      },
    ]

    const categoryActive = this.props.coupons.couponsCategory

    return (
      <div className="category">
        <div className="main-category">
          {categoryCoupons.map((item, index) => (
            <div className="main-category__radio" key={index}>
              <label
                className={
                  +item.value === +categoryActive
                    ? 'main-category__lable_active'
                    : 'main-category__lable'
                }
                htmlFor={item.category}
              >
                {item.name}
              </label>
              <input
                type="radio"
                className="main__category__radio"
                value={item.value}
                onChange={(e) => this.setCouponCategory(e)}
                id={item.category}
                name="main__category__radio"
              />
            </div>
          ))}
          <button className="main-category__lable"> ...</button>
        </div>
      </div>
    )
  }
}

export default CategoryCoupons
