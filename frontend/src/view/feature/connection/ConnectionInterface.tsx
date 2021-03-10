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
    authentication_id: string,
    access_token: string,
    expired_in: number,
    refresh_token: string   
}

export interface apI {
    id: number,
    authentication: authenticationI
}