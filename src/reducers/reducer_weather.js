import {FETCH_WEATHER} from "../actions/index";

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER :
       // state.concat(action.payload.data); // creates a new array and puts the new data onject in that array an then returns. 
       return [action.payload.data, ...state]; // new ES6 syntax which does the same thing as above
    }
    return state;
}