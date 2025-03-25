import { API } from "../../api/api"

const CHANGE = 'create'

const initState = {
    data: []
}

const completedReducer =(state = initState,action) => {
    switch(action.type){
        case CHANGE:
            console.log(action.payload);
            
            return {
                ...state,
                data: action.payload 
            } 
        default :
            return state    
    }
}

export const comletedTC = () => {
    return (dispatch) => {
        API.checkTodo()
        .then((res) => dispatch(completedAC(res.data)))
    }
}

const completedAC = (data) => ({type: CHANGE, payload: data})

export default completedReducer