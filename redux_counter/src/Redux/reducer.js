import { DEC, INC } from "./actionType"

let count = 10

const reducer = (state = count, action) => {
    switch (action.type) {
        case INC :
            return state + 1
        case DEC :
            return state - 1
        case "INC10" : 
            return state + action.payload 
        default :
           return state
    }
}

export default reducer