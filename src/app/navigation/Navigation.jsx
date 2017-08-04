import PropTypes from 'prop-types';
import React from 'react';
import styles from './Navigation.scss';
import cx from 'classnames';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let navigationItems = this.props.navigationItems;
        let navigationListItems = [];
        navigationItems.forEach(navItem => {
            navigationListItems.push(<li key={navItem.id}>{navItem.name}</li>);
        });

        let className = cx(styles.cart, 'icon-basket');
        return (
            <nav>
                <ul>
                    {navigationListItems}
                </ul>
                <div className={className}>
                    <span className='number'>1</span>
                </div>
            </nav>
        )

    }
}

Navigation.PropTypes = {
    navigationItems: PropTypes.array
}