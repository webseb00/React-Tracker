
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLOSED_ITEM = 'CLOSED_ITEM';

export function addItem(payload) {
    return {
        type: ADD_ITEM,
        payload
    }
};

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        id
    }
};

export function closedItem(id) {
    return {
        type: CLOSED_ITEM,
        id
    }
}