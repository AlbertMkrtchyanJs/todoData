import axios from "axios";

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export const API = {
    getTodo(){
       return  instance.get('/todos?_limit=20')
    },
    createTodo(){
        return instance.post(`/todos/${id}`,{title: text, complated : false})
    }
}