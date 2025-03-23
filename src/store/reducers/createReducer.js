import { API } from "../../api/api"

const CREATE = 'create'

const initState = {
    text: ''
}

const createReducer =(state = initState,action) => {
    switch(action.type){
        case CREATE:
            return {
                ...state,
                text: action.payload 
            } 
        default :
            return state    
    }
}

export const createTC = () => {
    return (dispatch) => {
        API.createTodo()
        .then((res) => dispatch(createAC(res.data)))
    }
}

const createAC = (text) => ({type: CREATE, payload: text})

export default createReducer