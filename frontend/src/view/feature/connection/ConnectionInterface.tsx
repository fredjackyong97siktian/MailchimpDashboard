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
    authenticationservice_id: number,
    ap_id?: string | null,
    authentication_authentication_id?: number | null
}

export interface contextI {
    serviceId : number,
    authenticationServiceId?: string | null,
}

export interface ametricsI {
    id: number,
    metrics_id: string,
}

export interface metricsI {
    id: number,
    metrics_id: string,
    name: string,
    detail: string,
    authenticationMetrics: Array<ametricsI>
}

export interface metricsDisplayI{
    service_name: string,
    metrics: Array<metricsI>,
    application:applicationI
}