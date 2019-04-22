import React from 'react';
import PropTypes from 'prop-types';
import {Col, FormFeedback, FormGroup, Input, Label} from "reactstrap";

const FormElement = props => {
    return (
        <FormGroup row>
            <Label sm={2} for={props.propertyName}>{props.title}</Label>
            <Col sm={10}>
                <Input
                    type={props.type}
                    id={props.propertyName}
                    name={props.propertyName}
                    value={props.value}
                    invalid={!!props.error}
                    onChange={props.onChange}
                    required={props.required}
                    placeholder={props.placeholder}
                    autoComplete={props.autoComplete}
                />
                {props.error && (
                    <FormFeedback>
                        {props.error}
                    </FormFeedback>
                )}
            </Col>
        </FormGroup>
    );
};

FormElement.propTypes = {
    propertyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string
};

export default FormElement;
