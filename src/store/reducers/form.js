// Actions
const HANDLE_CLICK = 'HANDLE_CLICK';
const HANDLE_CHANGE = 'HANDLE_CHANGE';
const CLEAR_INPUT = 'CLEAR_INPUT';

const initialState = {
    item: '',
    list: [],
};

export default function reducer( state = initialState, action = {} ) {
    switch ( action.type ) {
        case HANDLE_CLICK: {
            return { ...state, list: [...state.list, state.item] };
        }
        case HANDLE_CHANGE: {
            return { ...state, item: action.payload };
        }
        case CLEAR_INPUT: {
            return { ...state, item: '' };
        }
        default:
            return state;
    }
}

// Actions Creators
export function handleClick() {
    return {
        type: HANDLE_CLICK,
    };
}
export function clearInput() {
    return {
        type: CLEAR_INPUT,
    };
}
export function handleChange(e) {
    return {
        type: HANDLE_CHANGE,
        payload: e,
    };
}