const initialState = {
    show: false,
    message: ''
};
const SHOW = 'show';
const CLOSE = 'close';

export function dialogReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW: {
            return {
                show: true
            };
        }
        case CLOSE: {
            return {
                show: false
            };
        }
        default: {
            return state;
        }
    }

}

export function show(message) {
    return {
        type: SHOW,
        message
    };
}

export function close() {
    return {
        type: CLOSE
    }
}
