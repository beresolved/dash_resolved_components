% Auto-generated: do not edit by hand
\name{drcJsonSchemaForm}

\alias{drcJsonSchemaForm}

\title{JsonSchemaForm component}

\description{
JsonSchemaForm makes react-jsonshcema-forms usable for dash. It allows to render a form (layout components) based on a json schema. Formdata is changeable and accessible. Optionally a json ui schema can be used to tweak the layout.
}

\usage{
drcJsonSchemaForm(id=NULL, schema=NULL, uischema=NULL, formData=NULL,
onSubmit=NULL, n_clicks=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{schema}{Named list. A valid json schema}

\item{uischema}{Named list. An optional ui-schema json object in case we want to render components differently}

\item{formData}{Named list. formData valid for the provided json schema}

\item{onSubmit}{Named list. Return the data to the formData on using the onSubmit button}

\item{n_clicks}{Numeric. Contains the number of clicks on the form submit button}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

