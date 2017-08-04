import React from 'react';
import {connect} from 'react-redux';
import MainContent from './MainContent';
import Navigation from './navigation/Navigation';
import styles from './App.scss';

class App extends React.Component {
    render() {
        let navigationItems = [
            {
            id: 1,
            name:"Programming"
            },
            {
            id: 2,
            name: "Self-help"
            },
            {
            id: 3,
            name: "Cooking"
            }, 
            {
            id: 4,
            name: "Suspense"
            }
        ];
        let listOfBooks = [{
            id: 1,
            name: 'Book 1'
        }, {
            id: 2,
            name: 'Book 2'
        }];
        return (
            <div>
                <h1>BOOK PLACE</h1>
                <Navigation navigationItems = {navigationItems}/>
                <div className={styles['filter-panel']}>
                </div>
                <div className={styles.container}>
                    <MainContent listOfBooks = {listOfBooks}/>
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