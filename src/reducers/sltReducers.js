import { combineReducers } from 'redux';
import checkboxReducer from './checkboxReducer';

// This combines all reducers, so they can be modular:
const sltReducers = combineReducers({
    checkboxReducer
});

export default sltReducers;
