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

export interface metricsI {
    metrics_id: string,
    metrics_metrics_id: string,
    metrics_name: string,
    metrics_detail: string,
    am_metrics_id: number
}

export interface metricsDisplayI{
    service_name: string,
    scopes: Array<metricsI>,
    application:applicationI
}