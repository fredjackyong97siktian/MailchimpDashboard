import {CONNECTION_CONNECTING,CONNECTION_SERVICE_SUCCESSFUL,CONNECTION_SERVICE_FAIL,CONNECTION_METRICS_SUCCESSFUL,CONNECTION_METRICS_FAIL,CONNECTION_RECOVER} from './ConnectionMetricsConstant';

interface MetricsDetail {
    app: string,
    service: number,
    metrics: Array<number>
}
const initiateState : MetricsDetail = {
    app:'',
    service: 0,
    metrics: []
}

const MetricsReducer = (state = initiateState, action : any) => {
    switch (action.type){
        case CONNECTION_CONNECTING:
            return {...state,...action.payload}
        case CONNECTION_SERVICE_SUCCESSFUL:
            alert(action.payload.service)
            return {...state,service:action.payload.service}
        case CONNECTION_METRICS_SUCCESSFUL:
            return {...state,...action.payload}
        case CONNECTION_METRICS_FAIL:
            return 
        case CONNECTION_SERVICE_FAIL:
            return {
                service: 0,
                metrics: []}
        case CONNECTION_RECOVER:
            return {
                app:'',
                service: 0,
                metrics: []}
        default:
            return state;
    }
}

export default MetricsReducer