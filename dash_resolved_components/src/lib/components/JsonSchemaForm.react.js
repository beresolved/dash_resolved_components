import React, {Component} from 'react';
import PropTypes from 'prop-types';

// react-jsonschemaform stuff
import Form from "react-jsonschema-form-bs4";

/**
 * JsonSchemaForm makes react-jsonshcema-forms usable for dash. It allows to render a form (layout components) based on
 * a json schema. Formdata is changeable and accessible. Optionally a json ui schema can be used to tweak the layout.
 */
export default class JsonSchemaForm extends Component {
    constructor(props) {
        super(props);

    }

    onSubmit = ({formData}, e) => {
            // console.log('orig event: ',e)
            const newData = formData;
            this.props.setProps({
                formData: newData,
                n_clicks: this.props.n_clicks +1
            });

    }

    render() {
        // console.log("component props ",this.props)

        return (
            <div id={this.props.id}>
                <Form
                    schema={this.props.schema}
                    uiSchema={this.props.uischema}
                    formData={this.props.formData}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

JsonSchemaForm.defaultProps = {
    schema: {},
    formData: {},
    uischema: {},
    n_clicks: 0
};

JsonSchemaForm.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A valid json schema
     */
    schema: PropTypes.object.isRequired,

    /**
     * An optional ui-schema json object in case we want to render components differently
     */
    uischema: PropTypes.object,
    /**
     * formData valid for the provided json schema
     */
    formData: PropTypes.object,

    /**
     * Return the data to the formData on using the onSubmit button
     */
    onSubmit: PropTypes.object,

    /**
     * Contains the number of clicks on the form submit button
     */
    n_clicks: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
