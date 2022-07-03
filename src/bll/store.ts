import { applyMiddleware, combineReducers, createStore } from 'redux';
import { FormActionType, formReducer } from './formReducer';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const rootReducer = combineReducers({ form: formReducer });
export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionsType>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>;
type AppActionsType = FormActionType;
