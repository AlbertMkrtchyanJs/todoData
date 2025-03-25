import { API } from "../../api/api"

const CREATE = 'create'
const UPDATE_TEXT = 'upd-text'

const initState = {
    text: '',
    createState: ''
}

const createReducer =(state = initState,action) => {
    switch(action.type){
        case CREATE:
            return {
                ...state,
                text: action.payload
            } 
            case UPDATE_TEXT:
                return{
                    ...state,
                    createState : action.payload
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
export const updateAC = (val) => ({type: UPDATE_TEXT,payload:val})

export default createReducer