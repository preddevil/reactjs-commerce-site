import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from '../store/configureStore';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store = {store}>
                <Router>
                    <Component />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(App)
    });
}