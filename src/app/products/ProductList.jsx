import React from 'react';
import PropTypes from 'prop-types';
import ProductThumbnail from './product-thumbnail/ProductThumbnail';
import globalStyles from '../Globals.scss';
import cx from 'classnames';

export default class ProductList extends React.Component {
    render() {
        let listOfProductThumbnails = [];
        let listOfBooks = this.props.listOfBooks;
        let className = cx('content');
        listOfProductThumbnails = listOfBooks.map(book => {
            return <ProductThumbnail 
                key={book.id}
                click={this.props.addToCart}
            />
        });
        return (
            <div className={className}>
                {listOfProductThumbnails} 
            </div>
        )
    }
}

ProductList.PropTypes = {
    listOfBooks: PropTypes.array
}