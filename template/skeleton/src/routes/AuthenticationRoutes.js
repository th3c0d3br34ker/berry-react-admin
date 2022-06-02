import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MinimalLayout from './../layout/MinimalLayout';

// load auth routes

//-----------------------|| AUTHENTICATION ROUTING ||-----------------------//

const AuthenticationRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={
                [
                    // load auth routes path
                ]
            }
        >
            <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                    {/* load routes lazy components */}
                </Switch>
            </MinimalLayout>
        </Route>
    );
};

export default AuthenticationRoutes;
