import {FEATURE_FETCH} from './FeatureConstant';

interface FeatureDetailI {
    platform_id : string,
    platform_name: string,
    company_name: string

}
const initiateState : FeatureDetailI = {
    platform_id : '',
    platform_name: '',
    company_name: ''
}

const FeatureReducer = (state = initiateState, action : any) => {
    switch (action.type){
        case FEATURE_FETCH:
            console.log(action.payload)
            return {...state,...action.payload}
        default:
            return state;
    }
}

export default FeatureReducer