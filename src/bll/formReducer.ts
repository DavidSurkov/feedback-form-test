import { FormType } from '../ui/Form';
import { AppThunk } from './store';
import { api } from '../api/api';

const initState = {
  serverMessage: [],
  isLoading: false,
};
type FormStateType = {
  serverMessage: string[];
  isLoading: boolean;
};
export const formReducer = (state: FormStateType = initState, action: FormActionType): FormStateType => {
  switch (action.type) {
    case 'form/SET-SERVER-MESSAGE': {
      return { ...state, serverMessage: action.error };
    }
    case 'form/SET-IS-LOADING': {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};
export const setServerMessage = (error: string[]) => ({ type: 'form/SET-SERVER-MESSAGE', error } as const);
const setIsLoading = (isLoading: boolean) => ({ type: 'form/SET-IS-LOADING', isLoading } as const);

export const submitFormTC =
  (form: FormType): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      await api.send(form);
      dispatch(setServerMessage(['success']));
    } catch (e: any) {
      if (!!e.response) {
        dispatch(setServerMessage(e.response.data.message));
      } else {
        dispatch(setServerMessage(['Some error has occurred']));
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export type FormActionType = ReturnType<typeof setServerMessage> | ReturnType<typeof setIsLoading>;
