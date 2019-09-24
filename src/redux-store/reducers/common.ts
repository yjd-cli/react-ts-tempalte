import * as types from '../types/action-types';
import {appEditAction} from '../actions/common';

export interface CommonState {
    pageLoading: boolean;
}

let initState: CommonState = {
    pageLoading: false,
};

export default function (state: CommonState = initState, action: appEditAction) {
    const {payload} = action;
    switch (action.type) {
        case types.SET_PAGE_LOADING_STATUS: {
            return {...state, pageLoading: payload.status};
        }
        default:
            return state;
    }
}























