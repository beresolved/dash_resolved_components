/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import { JsonSchemaForm } from '../lib';

// some test stuff
const initialData = require('./example-formdata.json');
const initialSchema = require('./example-jsonschema.json');

class App extends Component {

    constructor() {
        super();
        this.state = {
            id: 'jsonschemaform',
            schema: initialSchema,
            uiSchema: null,
            formData: initialData
        };
        // console.log("parent state ",this.state);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {

        return (
            <div>
                <JsonSchemaForm
                    id = {this.state.id}
                    schema = {this.state.schema}
                    uischema = {this.state.uiSchema}
                    formData = {this.state.formData}
                    setProps = {this.setProps}
                />
            </div>
        )
    }

}

export default App;
