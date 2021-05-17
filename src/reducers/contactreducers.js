import {
    ADD_CONTACT,

} from '../actions/types'

const intialstate={
    contact:null
    
};

export default (state = intialstate , action) => {

    switch (action.type) {
        case ADD_CONTACT:
            return{
                ...state,
                logs:[...state.logs , action.payload],
                loading:false
            };

            default:
                return state;

        }
       
    }