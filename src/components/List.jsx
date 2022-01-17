import PropTypes from 'prop-types';
import React from 'react'
import Product from './Product'
import '../styles/List.scss'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: this.props.products
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.setState({
        products: this.props.products
      })
    }
  }
  render() { 
    const products = this.state.products.map((product, index) => {
      return <Product
        index={index}
        key={product.id}
        item={product} />
      }
    )
    return (
    <div
      className='list-wrapper'
      data-test="list-selector">
      { products }
    </div>
    )
  }
}

List.propTypes = {
  products: PropTypes.array,
};
 
export default List;