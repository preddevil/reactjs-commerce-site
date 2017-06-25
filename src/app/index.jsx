import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
//import { configureStore, history } from './store/configureStore';
import App from './App';

//const store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
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