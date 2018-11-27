import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            const newState = {
                ...state,
                items: [...state.items],
                item: action.payload
            };
            newState.items.push(action.payload);
            return newState;
        default:
            return state;
    }
}
