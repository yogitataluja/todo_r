export const addTodo =(inputtodo)=>{
    
    return{
        type:"ADD",
        payload:{
            id: new Date().getTime().toString(),
            inputtodo:inputtodo 
        }
        
    }
  
}
export const deleteTodo = (id)=>{
    return{
        type:"DELETE",
        id
        
    }
}
