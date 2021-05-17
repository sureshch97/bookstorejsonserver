import {combineReducers} from 'redux'
import BookReducers from './bookreducers';
import contactReducers from './contactreducers'
//import commentreducers from './commentreducers'



export default combineReducers({
    book:BookReducers,
    contact:contactReducers,
    //comment:commentreducers
    
});