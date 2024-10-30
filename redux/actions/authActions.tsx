import { ThunkAction } from "redux-thunk";
import { AppDispatch, RootState } from "../Store"; // Import RootState
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./actionTypes";

const API_URL = require('./API/dummyApi.json');

interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  username: string;
  email: string;
  password: string;
}

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: { email: string };
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  error: string;
}

interface SignupRequestAction {
  type: typeof SIGNUP_REQUEST;
}

interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: { username: string; email: string };
}

interface SignupFailureAction {
  type: typeof SIGNUP_FAILURE;
  error: string;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | SignupRequestAction
  | SignupSuccessAction
  | SignupFailureAction;  

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const login = (credentials: Credentials): ThunkAction<void, RootState, unknown, AuthActionTypes> => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    await delay(1000);

    const { users } = API_URL;

    const user = users.find((user: { email: string; password: string; }) =>
      user.email === credentials.email && user.password === credentials.password
    );

    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: { email: user.email } });
    } else {
      dispatch({ type: LOGIN_FAILURE, error: 'Invalid credentials.' });
    }
  };
};

export const signup = (userData: UserData): ThunkAction<void, RootState, unknown, AuthActionTypes> => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: SIGNUP_REQUEST } );

    await delay(1000);

    const { users } = API_URL;

    const existingUser = users.find((user: { email: string; username: string; }) =>
      user.email === userData.email || user.username === userData.username
    );

    if (existingUser) {
      dispatch({ type: SIGNUP_FAILURE, error: 'User already exists.' });
      return;
    }

    // This won't persist changes to the JSON file, it's only for simulation
    users.push(userData);

    dispatch({ type: SIGNUP_SUCCESS, payload: { username: userData.username, email: userData.email } });
  };
};


