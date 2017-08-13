import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import Basket from '../basket/Basket';
import Navigation from './Navigation';

class NavigationContainer extends React.Component {
    render() {
        return (
            <nav>
                <Navigation navigationItems={this.props.navigationItems} />
                <Basket numberOfItemsInBasket={this.props.numberOfItemsInBasket}/>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        navigationItems: state.appConfig.navigationItems,
        numberOfItemsInBasket: state.appConfig.numOfProductsInBasket
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);