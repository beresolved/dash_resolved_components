# AUTO GENERATED FILE - DO NOT EDIT

drcJsonSchemaForm <- function(id=NULL, schema=NULL, uischema=NULL, formData=NULL, onSubmit=NULL, n_clicks=NULL) {
    
    props <- list(id=id, schema=schema, uischema=uischema, formData=formData, onSubmit=onSubmit, n_clicks=n_clicks)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'JsonSchemaForm',
        namespace = 'dash_resolved_components',
        propNames = c('id', 'schema', 'uischema', 'formData', 'onSubmit', 'n_clicks'),
        package = 'dashResolvedComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
