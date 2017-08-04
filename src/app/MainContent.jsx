import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainContent.css';
import ProductThumbnail from './product-thumbnail/ProductThumbnail';


export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail />
                <ProductThumbnail /> 
            </div>
        )
    }
}

MainContent.PropTypes = {
    
}