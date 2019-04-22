import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Toolbar from "./components/UI/Toolbar/Toolbar";
import Products from "./containers/Products/Products";
import NewProduct from "./containers/NewProduct/NewProduct";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import {logoutUser} from "./store/actions/usersActions";

class App extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Toolbar
                        user={this.props.user}
                        logout={this.props.logoutUser}
                    />
                </header>
                <Container style={{marginTop: '20px'}}>
                    <Switch>
                        <Route path="/" exact component={Products}/>
                        <Route path="/products/new" exact component={NewProduct}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
