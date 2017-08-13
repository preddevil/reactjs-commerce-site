import React from 'react';
import {connect} from 'react-redux';
import ProductListContainer from './products/ProductListContainer';
import NavigationContainer from './navigation/NavigationContainer';
import styles from './App.scss';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>BOOK PLACE</h1>
                <NavigationContainer />
                <div className={styles['filter-panel']}>
                </div>
                <div className={styles.container}>
                    <ProductListContainer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(App);