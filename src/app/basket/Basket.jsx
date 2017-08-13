import PropTypes from 'prop-types';
import React from 'react';
import styles from './Basket.scss';
import cx from 'classnames';

export default class Basket extends React.Component {
    render() {
        let numberOfItemsInBasket = this.props.numberOfItemsInBasket;
        let className = cx(styles.cart, 'icon-basket');

        return (
            <div className={className}>
                <span className='number'>{numberOfItemsInBasket}</span>
            </div>
        )

    }
}