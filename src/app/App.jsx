import React from 'react';
import {connect} from 'react-redux';
import NavigationContainer from './navigation/NavigationContainer';
import RoutesContainer from '../routes';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>BOOK PLACE</h1>
                <NavigationContainer />
                <RoutesContainer />
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