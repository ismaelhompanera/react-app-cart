import React, { Component } from "react";
import PropTypes from 'prop-types';
import './App.scss';
import Cart from './components/Cart.jsx'
import List from './components/List'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getProducts } from './actions/getProducts'
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: null
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      this.setState({
        products: this.props.products
      })
    }
  }
  componentDidMount () {
    this.props.getProducts()
  }
  render () {
    const { cart } = this.props
    let listContent;
    if (Array.isArray(this.state.products)) {
      listContent = <List
      products={this.state.products} />
    } else {
      //This layout shows a skeletong while products are being retrieved from server
      listContent = <div className="skeleton-wrapper">
        <Skeleton
          className="skeleton-item"
          count={6}
          height={30} />
        </div>
    }
    return (
      <div className="App">
        <div className="app-content">
          {listContent}
          <Cart
            items={cart} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  cart: PropTypes.array,
  products: PropTypes.array,
  getProducts: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products
  };
}

export default connect(
  mapStateToProps,
  { getProducts }
)(App);