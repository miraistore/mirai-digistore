import React from 'react';

import { HashRouter as Router, Route, Switch} from 'react-router-dom';
//import {AuthProvider} from '../helper/AuthContextHelper'
/**
 * GLOBAL COMPONENT
 */
//import {LOGO} from '../assets/Images';
// import Topbar from '../view/components/admin/Topbar';

/**
 * SCREEN
 */
//import LandingPage from '../controller/user/LandingPage';
//import Auth from '../controller/user/Auth';
import HomePageController from '../pages/HomePage/HomePageController';
//import LoginPageController from '../pages/LoginPage/LoginPageController';
import RegisterPageController from '../pages/RegisterPage/RegisterPageController'
import OrderPageController from '../pages/OrderPage/OrderPageController';
import CheckoutPageController from '../pages/CheckoutPage/CheckoutPageController';
import ScrollToTop from './ScrollToTop';
/**
 * SCREEN ADMIN
 */
//import Dashboard from '../controller/Admin/Dashboard';
// import ManageIdentitas from '../controller/Admin/ManageIdentitas';

export const MainRouter = () => {

    return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route exact path='/'   component={HomePageController} />
                        <Route exact path='/Home'   component={HomePageController} />
                        <Route exact path='/Order/:id'   component={OrderPageController} />
                        <Route exact path='/Checkout/:orderId'   component={CheckoutPageController} />
                        <Route exact path='/Register' component={RegisterPageController} />
                    </Switch>
                </ScrollToTop>
            </Router>           
    )

}


