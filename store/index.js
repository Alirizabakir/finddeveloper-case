import {legacy_createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    JobPostings: [],
    Partners: [],
    JobPostingsForYou: {},
    PopularSearches: [],
    User: null,
    Profile: {},
    Modal: {},
    Notifications: {}
};

const dataReducer = (state = initialState, action) => {
    return {...state, [action.type]: action.payload};
};

const store = legacy_createStore(dataReducer, applyMiddleware(thunk));

export default store;