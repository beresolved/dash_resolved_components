import dash_resolved_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_bootstrap_components as dbc

app = dash.Dash(external_stylesheets=[dbc.themes.BOOTSTRAP,"https://use.fontawesome.com/releases/v5.6.3/css/all.css"])

schema = {
  "title": "Example",
  "type": "object",
  "required": [
    "integerfield",
    "string array field"
  ],
  "properties": {
    "integerfield": {
        "title": "A plain number",
      "type": "integer",
      "description": "Example of rendering of integer field input with validation",
      "minimum": 1,
      "maximum": 20
    },
    "string array field": {
      "type": "array",
      "title": "A list of strings",
      "items": {
        "type": "string",
        "default": "bazinga"
      }
    }
  }
}

uischema = {
    "integerfield": {
        "ui:widget": "slider"
  }
}

app.layout = html.Div([
    dash_resolved_components.JsonSchemaForm(
        id='input',
        schema=schema,
        uischema=uischema,
        formData={"integerfield":5,"string array field":['VALUE1']}
    ),
    html.Div(id='output')
])

@app.callback(Output('output', 'children'),
              [Input('input', 'formData'),
               Input('input','n_clicks')])
def display_output(data, nclicks):
    response = html.Div([
        dbc.Alert('You submitted the form {} times'.format(nclicks)),
        dbc.Alert('Last submission you asked for {} of each {}'.format(data['integerfield'],data['string array field']))
    ])
    return response


if __name__ == '__main__':
    app.run_server(debug=True)
