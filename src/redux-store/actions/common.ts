import {push} from "connected-react-router";
import * as types from "@redux-store/types/action-types";

export interface appEditAction {
    type: string,
    payload?: any
}

export default {
    historyGo(path: string, payload?: any): appEditAction {
        //这里不需要申明 action 的 type
        //因为 connected-react-router 内部申明了一个 type:"LOCATION_CHANGE"
        //push 相当于 history.push
        //调用 push 方法的返回值 --> {type:xxx,payload:xxx}
        return push(path, payload);
    },
    setPageLoadingStatus(status:boolean):appEditAction {
        return {type: types.SET_PAGE_LOADING_STATUS, payload: {status}}
    }
}
