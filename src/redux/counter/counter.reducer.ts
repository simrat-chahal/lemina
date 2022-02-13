const initialState = {counter: 0}

const counterReducer = (state= initialState, action: {type: string, payload: any}) => {
    const {type, payload} = action
    switch(type) {
        case "INCREMENT_COUNTER":
            return {...state, counter: state.counter+1}
        default:
            return state
    }
}

export default counterReducer