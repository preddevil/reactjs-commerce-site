import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProductThumbnail.scss';

export default class ProductThumbnail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.product}>
                <img src='https://placeimg.com/200/100' />
                <h2 className={styles.header}>Product Name</h2>
                <p className={styles.description}>Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque. Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi maximus porta nec vitae odio. Proin vitae magna a massa accumsan venenatis. Donec semper, sem in ullamcorper
                    bibendum, mauris sem imperdiet lorem, tempor aliquet ligula lorem sit amet nibh. Suspendisse potenti.</p>
                <p className={styles.price}>231</p>
                <div className={styles.btn}>Add to cart</div>
                <div className={styles.quickview}>Quickview</div>
            </div>
        )
    }
}

ProductThumbnail.PropTypes = {
    
}