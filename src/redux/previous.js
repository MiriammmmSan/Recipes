import { createStore } from 'redux';

function recipesReducer(state=[], action){
    
    if (action.type === 'ADD_RECIPE') {
        return [
            ...state,
            action.payload
        ];
    }
  return state;
}

export const store = createStore(recipesReducer);

