import {FormType} from "../ui/Form";
import {AppThunk} from "./store";
import {api} from "../api/api";

const initState = {} as FormStateType;
type FormStateType = {
  error: string;
  success: string;
};
export const formReducer = (state: FormStateType = initState, action: FormActionType): FormStateType => {
  switch (action.type) {
    case "form/SET-SERVER-ERROR": {
      return {...state, error: action.error}
    }
    case "form/SET-SERVER-SUCCESS": {
      return {...state, success: action.success}
    }
    default:
      return state
  }
};
const setServerError = (error: string) => ({type: 'form/SET-SERVER-ERROR', error} as const);
const setServerSuccess = (success: string) => ({type: 'form/SET-SERVER-SUCCESS', success} as const);

export const submitFormTC = (form: FormType): AppThunk =>
  async (dispatch) => {
    try {
      await api.send(form);
      dispatch(setServerSuccess('success'))
    } catch (e) {
      dispatch(setServerError('Try again later'))
    }
  };

export type FormActionType = ReturnType<typeof setServerError> | ReturnType<typeof setServerSuccess>;