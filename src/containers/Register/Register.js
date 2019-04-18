import React, {Component, Fragment} from 'react';
import {Alert, Button, Col, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {registerUser} from "../../store/actions/usersActions";
import {connect} from "react-redux";


class Register extends Component {
    state = {
        username: '',
        password: '',
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.registerUser({...this.state});
    };

    getFieldHasError = fieldName => {
        return (
            this.props.error &&
            this.props.error.errors &&
            this.props.error.errors[fieldName] &&
            this.props.error.errors[fieldName].message
        );
    };

    render() {
        return (
            <Fragment>
                <h2>Register new user</h2>
                {this.props.error && this.props.error.global && (
                    <Alert color="danger">
                        {this.props.error.global}
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>
                    <FormGroup row>
                        <Label sm={2} for="username">Username</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                id="username"
                                name="username"
                                value={this.state.username}
                                invalid={!!this.getFieldHasError('username')}
                                onChange={this.inputChangeHandler}
                            />
                            {this.getFieldHasError('username') && (
                                <FormFeedback>
                                    {this.getFieldHasError('username')}
                                </FormFeedback>
                            )}
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={2} for="password">Password</Label>
                        <Col sm={10}>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                value={this.state.password}
                                invalid={!!this.getFieldHasError('password')}
                                onChange={this.inputChangeHandler}
                            />
                            {this.getFieldHasError('password') && (
                                <FormFeedback>
                                    {this.getFieldHasError('password')}
                                </FormFeedback>
                            )}
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button type="submit" color="primary">Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
