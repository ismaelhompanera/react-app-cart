import PropTypes from 'prop-types';
import React from 'react'
import CartProduct from './CartProduct'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import '../styles/Cart.scss'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    // This nodeRef is used for avoid a warning with the actual library of CSSTansitionGroup
    this.nodeRef = React.createRef()
    this.state = {
      items: this.props.items
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({
        items: this.props.items
      })
    }
  }
  render() { 
    const items = this.state.items.map((product) => {
      return <CSSTransition
        timeout={500}
        classNames="product-item"
        nodeRef={this.nodeRef}
        key={product.id}>
        <div ref={this.nodeRef}>
          <CartProduct
            item={product} />
        </div>
        </CSSTransition>
      }
    )
    let total = this.state.items.map(item => item.price).reduce((a, b) => a + b, 0)
    return (
      <div
        className='cart-wrapper'
        data-test="cart-selector">
        <div className='cart-header'>
          MI CESTA:
        </div>
      
        <div
          className='cart-content'
          data-test="cart-content-selector">
          <TransitionGroup className="cart-products-list">
          { items }
          </TransitionGroup>
        </div>

        <div className='cart-footer'>
          <strong>TOTAL </strong><span> ({items.length} productos)</span>
          <div
            className='total'
            data-test="cart-total-selector">{Math.round(total * 100) / 100} €</div>
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  items: PropTypes.array,
};
 
export default Cart;