import React from 'react';
import PropTypes from 'prop-types';
import ProductThumbnail from './product-thumbnail/ProductThumbnail';
import styles from './ProductList.scss';

export default class ProductList extends React.Component {
    render() {
        let listOfProductThumbnails = [];
        let listOfBooks = this.props.listOfBooks;
        listOfProductThumbnails = listOfBooks.map(book => {
            return <ProductThumbnail 
                key={book.id}
                click={this.props.addToCart}
            />
        });
        return (
            <div className={styles.container}>
                {listOfProductThumbnails} 
            </div>
        )
    }
}

ProductList.PropTypes = {
    listOfBooks: PropTypes.array
}