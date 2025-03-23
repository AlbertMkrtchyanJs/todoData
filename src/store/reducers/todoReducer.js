import { API } from "../../api/api"



const ADD = 'add'
const IS_FETCHING = 'is-fetching'

const initState = {
    todos : [],
    isFetching : false
}

const todoReducer = (state = initState,action) => {
    switch(action.type){
        case ADD :
            return{
                ...state,
                todos : action.payload
            }
            case IS_FETCHING :
                return{
                    ...state,
                    isFetching: action.payload
                }
        default : 
            return state    
    }
}

export const addTodoTC = () => {
    return (dispatch) => {
        dispatch(isFetchingAC(true))
        API.getTodo()
        .then((res)=> {
            dispatch(addAC(res.data))
            dispatch(isFetchingAC(false))
        })

    }
}

 const isFetchingAC = (bool) => ({type: IS_FETCHING, payload: bool})
 const addAC = (todos) => ({type : ADD, payload: todos})
export default todoReducer