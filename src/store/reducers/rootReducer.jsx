import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import activityReducer from './activityReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    activity: activityReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer