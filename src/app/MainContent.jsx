import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContent.css';
import ProductThumbnail from './product-thumbnail/ProductThumbnail';


export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let listOfProductThumbnails = [];
        let listOfBooks = this.props.listOfBooks;
        listOfProductThumbnails = listOfBooks.map(book => {
            return <ProductThumbnail key={book.id} />
        });
        return (
            <div>
                {listOfProductThumbnails} 
            </div>
        )
    }
}

MainContent.PropTypes = {
    listOfBooks: PropTypes.array
}