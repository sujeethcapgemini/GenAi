import { FETCH_DATA_REQUEST,  FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions/actionTypes";

export interface Book {
    id: number;
    title: string;
    author: string;
}

export interface DataState  {
    loading: boolean;
    data: Book[];
    error?:string;
};

interface FetchDataRequestAction {
    type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS;
    payload: Book[];
}

interface FetchDataFailureAction {
    type: typeof FETCH_DATA_FAILURE;
    payload: string;
}

export type DataActionTypes = 
FetchDataRequestAction | FetchDataSuccessAction | FetchDataFailureAction ;

const initialState: DataState = {
    loading: false,
    data: [],
    error: undefined,
};


const dataReducer = (state = initialState, action: DataActionTypes):DataState => {
    switch (action.type){
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true, error: undefined};
        case FETCH_DATA_SUCCESS:
            return { loading: false, data: action.payload, error: undefined};
        case FETCH_DATA_FAILURE:
            return { loading: false, data:[], error: action.payload};   
        default:
            return state;          
    }
};

export default dataReducer;