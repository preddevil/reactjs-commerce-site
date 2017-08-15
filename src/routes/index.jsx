import React from 'react';
import createRoutes from './createRoutes';
import {Route} from 'react-router';

let routes = createRoutes();

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default class RoutesContainer extends React.Component {
    render() {
        return (
            <div>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </div>
        )
    }
}