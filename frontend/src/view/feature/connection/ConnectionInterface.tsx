export interface applicationI {
    name: string,
    auth_method: string,
    direct_url_component: string,
    imglocation: string
}

export interface serviceI{
    id: number,
    service_name: string,
    description: string,
    application: applicationI
}

export interface categoryI {
    id: number,
    name: string,
    services: Array<serviceI>   
}

export interface authenticationI {
    authentication_id: string
}

export interface apI {
    id: number,
    authentication: authenticationI
}

export interface scopeI {
    id: number,
    serviceId: number,
    name: string,
    term: string,
    api: string,
    method: string,
    scope_id: string
}

export interface scopeDisplayI{
    service_name: string,
    scopes: Array<scopeI>,
    application:applicationI
}