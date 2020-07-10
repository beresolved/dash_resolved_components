# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class JsonSchemaForm(Component):
    """A JsonSchemaForm component.
JsonSchemaForm makes react-jsonshcema-forms usable for dash. It allows to render a form (layout components) based on
a json schema. Formdata is changeable and accessible. Optionally a json ui schema can be used to tweak the layout.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- schema (dict; optional): A valid json schema
- uischema (dict; optional): An optional ui-schema json object in case we want to render components differently
- formData (dict; optional): formData valid for the provided json schema
- onSubmit (dict; optional): Return the data to the formData on using the onSubmit button
- n_clicks (number; default 0): Contains the number of clicks on the form submit button"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, schema=Component.UNDEFINED, uischema=Component.UNDEFINED, formData=Component.UNDEFINED, onSubmit=Component.UNDEFINED, n_clicks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'schema', 'uischema', 'formData', 'onSubmit', 'n_clicks']
        self._type = 'JsonSchemaForm'
        self._namespace = 'dash_resolved_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'schema', 'uischema', 'formData', 'onSubmit', 'n_clicks']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(JsonSchemaForm, self).__init__(**args)
