import { API } from "../../api/api"

const REMOVE = 'remove'

const initState = {
    data: []
}

const removeReducer =(state = initState,action) => {
    switch(action.type){
        case REMOVE:
            return {
                ...state,
                data: action.payload.filter((data)=> data.id !== id) 
            } 
        default :
            return state    
    }
}

export const deleteTC = () => {
    return (dispatch) => {
        API.removeTodo()
        .then((res) => dispatch(deleteAC(res.data)))
    }
}

const deleteAC = (data) => ({type: REMOVE, payload: data})

export default removeReducer