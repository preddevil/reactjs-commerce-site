import PropTypes from 'prop-types';
import React from 'react';
import styles from './Navigation.scss';

export default class Navigation extends React.PureComponent {
    render() {
        let navigationItems = this.props.navigationItems;
        let navigationListItems = [];
        navigationItems.forEach(navItem => {
            navigationListItems.push(<li key={navItem.id}>{navItem.name}</li>);
        });
        return (
            <ul>
                {navigationListItems}
            </ul>
        )

    }
}

Navigation.PropTypes = {
    navigationItems: PropTypes.array
}