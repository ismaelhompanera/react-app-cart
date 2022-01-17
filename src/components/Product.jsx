import PropTypes from 'prop-types';
import React from 'react'
import '../styles/Product.scss'
import { ReactComponent as MyIcon } from '../assets/add-to-cart.svg';
import { addProductToCart } from '../actions/addProductToCart'
import { removeProductFromCart} from '../actions/removeProductFromCart'
import { connect } from "react-redux";

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      disabled: false
    }
    this.onAdd = this.onAdd.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }
  onAdd () {
    this.props.addProductToCart(this.props.item)
    this.setState({
      disabled: true
    })
  }
  onRemove () {
    this.props.removeProductFromCart(this.props.item.id)
    this.setState({
      disabled: false
    })
  }
  render() {
    const disabledClass = this.state.disabled ? 'disabled' : 'active'
    let removeItem;
    if (this.state.disabled) {
      removeItem = <span
        className='remove-product'
        data-test={`remove-product-${this.props.index}-selector`}
        onClick={this.onRemove}>Eliminar</span>;
    }
    return (
    <div
      className='product'
      data-test={`product-${this.props.index}-selector`}>
      <div className='cell product-name'>
        <p>{ this.props.item.name }</p>
        {removeItem}</div>
      <div className={`cell product-price ${disabledClass}`}>{ Math.round(this.props.item.price * 100) / 100 } €</div>
      <button
        className={`button ${disabledClass}`}
        onClick={this.onAdd}>
        <MyIcon />
      </button>
    </div>
    )
  }
}

Product.propTypes = {
  addProductToCart: PropTypes.func,
  removeProductFromCart: PropTypes.func,
  item: PropTypes.object,
  index: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
};

export default connect(
  mapStateToProps,
  { addProductToCart,
    removeProductFromCart }
)(Product);