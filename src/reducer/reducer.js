import { ADD_ITEM, DELETE_ITEM, CLOSED_ITEM } from './actions.js';

const initialState = {
    items: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return Object.assign({}, state, {items: [action.payload, ...state.items]});
        case DELETE_ITEM:
            const notDeletedItems = state.items.filter(item => item.id !== action.id);
            return Object.assign({}, state, {items: [...notDeletedItems]});
        case CLOSED_ITEM: 
            const closedItem = state.items.filter(item => (item.id === action.id) ? {item: item.status = false} : item);
            return Object.assign({}, state, {items: [...closedItem]});
        default:
            return state;
    }
}

export default rootReducer;