import React from 'react'

class CategoryPartners extends React.Component {
  setPartnersCategory = () => {
    this.props.partnersCategoryAction()
  }
  render() {
    const categoryAction = this.props.partners.partnersCategory

    return (
      <div className="bonus__check-box">
        <div
          className={
            categoryAction === false ? 'bonus__check_active' : 'bonus__check'
          }
        >
          Начисляют спасибо
        </div>
        <label className="bonus__check-box__switch">
          <input type="checkbox" onClick={() => this.setPartnersCategory()} />
          <div>
            <span />
          </div>
        </label>
        <div
          className={
            categoryAction === true ? 'bonus__check_active' : 'bonus__check'
          }
        >
          Принимают спасибо
        </div>
      </div>
    )
  }
}
export default CategoryPartners
