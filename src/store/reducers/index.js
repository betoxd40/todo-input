import { combineReducers } from 'redux';
import FormReducer from './form';

const rootReducer = combineReducers( {
    form: FormReducer,
} );

export default rootReducer;

