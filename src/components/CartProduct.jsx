import PropTypes from 'prop-types';
import React from 'react'
import '../styles/CartProduct.scss'

class Product extends React.Component {
  render() {
    return (
    <div
      className='cart-product'
      data-test="cart-product">
      <img src={`/${this.props.item.url_media}`} alt={'img'} />
      <div className='cell-name'>{ this.props.item.name }</div>
      <div className='cell-price'>{ this.props.item.price } €</div>
    </div>
    )
  }
}

Product.propTypes = {
  item: PropTypes.object,
};
 
export default Product;