import dash_resolved_components
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import dash_bootstrap_components as dbc
import base64
import io
import json

app = dash.Dash(suppress_callback_exceptions=True,external_stylesheets=[dbc.themes.BOOTSTRAP,"https://use.fontawesome.com/releases/v5.6.3/css/all.css"])


app.layout = html.Div([
    dcc.Store(id='data-store',storage_type='session'),
    dcc.Upload(id='jsonschema-upload',children=html.Div([
            'Drag and Drop or ',
            html.A('Select File')
        ]),
        style={
            'width': '100%',
            'height': '60px',
            'lineHeight': '60px',
            'borderWidth': '1px',
            'borderStyle': 'dashed',
            'borderRadius': '5px',
            'textAlign': 'center',
            'margin': '10px'
        }),
    html.Div(id='schemaform'),
    html.Div(id='output')
])
def parse_contents(contents, filename):

    content_type, content_string = contents.split(',')
    decoded = base64.b64decode(content_string)
    try:
        if 'json' in filename:
            data=json.load(io.StringIO(decoded.decode('utf-8')))
        else:
            data=None
        return data
    except Exception as e:
        print(e)
        return html.Div(['Error processing {}'.format(filename)])

@app.callback(Output('schemaform','children'),
              [Input('data-store','data')])
def create_schema_form(data):
    if data is not None:
        schema = data
    else:
        schema = {
          "title": "Please upload a valid json schema",

        }

    return dash_resolved_components.JsonSchemaForm(
        id='input',
        schema=schema,
        uischema={},
        formData={}
    )

@app.callback(Output('data-store','data'),
              [Input('jsonschema-upload','contents')],
              [State('jsonschema-upload','filename')])
def update_data_store(content, filename):
    if content is not None:
        return parse_contents(content,filename)
    else:
        return None

@app.callback(Output('output', 'children'),
              [Input('input', 'formData'),
               Input('input','n_clicks')])
def display_output(data, nclicks):
    response = html.Div([
        dbc.Alert('You submitted the form {} times'.format(nclicks)),
    ])
    return response


if __name__ == '__main__':
    app.run_server(debug=True)
