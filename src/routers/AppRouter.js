import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './../components/Header';
import Home from '../components/Home';
import NotFoundPage from './../components/NotFoundPage';
import LoginForm from '../components/LoginForm';

const AppRouter = () => (
        <BrowserRouter>
            <div className="router-wrapper">
                <Header />
                <Switch> 
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/login" component={LoginForm} exact={true} />
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
);

export default AppRouter;