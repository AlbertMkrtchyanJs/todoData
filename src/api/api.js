import axios from "axios";


const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})



export const API = {
    getTodo(){
       return  instance.get('/todos?_limit=20')
    },
    createTodo(id,text){
        return instance.post(`/todos`,{title: text, complated : false})
    },
    checkTodo(){
        return instance.patch(`/todos/${id}`,{completed: !completed})
    },
    removeTodo(id){
        return instance.delete(`/todos/${id}`)
    }
}