import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import ProductList from './ProductList';
import { addProductToBasket } from '../../actions';


class ProductListContainer extends React.Component {
    render() {
        return <ProductList {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        listOfBooks: state.books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: () => {
            dispatch(addProductToBasket());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);