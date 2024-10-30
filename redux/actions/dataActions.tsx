import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { AppDispatch, RootState } from "../Store";
import { FETCH_DATA_REQUEST,
         FETCH_DATA_SUCCESS,
         FETCH_DATA_FAILURE
       } from './actionTypes';

interface Book {
    id: number;
    title: string;
    author: string;
}


interface FetchRequestAction {
 type: typeof FETCH_DATA_REQUEST;
}
      
interface FetchSuccessAction {
 type: typeof FETCH_DATA_SUCCESS;
 payload: Book[];
 }
      
interface FetchFailureAction {
 type: typeof FETCH_DATA_FAILURE;
 error: string;
 }

export type FetchDataActions = 
    FetchRequestAction |
    FetchSuccessAction |
    FetchFailureAction;

export const fetchData = (): ThunkAction<void, RootState, unknown, FetchDataActions> => {
    return (dispatch: AppDispatch) => {
      dispatch({ type: FETCH_DATA_REQUEST });
  
      return axios.get<Book[]>('https://freetestapi.com/api/v1/books')
        .then(response => {
          const books = response.data.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author,
          }));
          dispatch({ type: FETCH_DATA_SUCCESS, payload: books });
        })
        .catch(error => {
          if(axios.isAxiosError(error)){
          dispatch({ type: FETCH_DATA_FAILURE, error: error.message });
        } else {
          console.error('Unexpected error:',error);  
          dispatch({ type: FETCH_DATA_FAILURE, error: 'An unexpected error occurred' });
        }
    });
  };
  };