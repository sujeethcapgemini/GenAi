import {
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/actionTypes';

export interface AuthState {
  loading: boolean;
  user: null | {username: string; email: string};
  error: null | string;
}

const initialState: AuthState  = {
  loading: false,
  user: null,
  error: null,
};

interface Action {
  type: string;
  payload?:any;
  error?:string;
}

const authReducer = (state = initialState, action:Action): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: { username: action.payload.username, email: action.payload.email },
        error: null
      };

    case SIGNUP_SUCCESS:
      return { 
        ...state,
        loading: false, 
        user: { username: action.payload.username, email: action.payload.email }, 
        error: null 
      };
      
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.error || null };
    default:
      return state;
  }
};

export default authReducer;
