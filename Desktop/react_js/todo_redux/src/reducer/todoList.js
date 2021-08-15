// import fire from '../auth/FirebaseAuth'
const intialState = {
    list:[]
}
const todoList=(state=intialState, action)=>{
switch(action.type){
    case "ADD": 
    const {id,inputtodo} = action.payload
   
    return{
        ...state,
        list:[
            ...state.list,
            {
            id:id,
            inputtodo:inputtodo
        }]
    }
    case "DELETE": 
    const newList=  state.list.filter((elem)=> elem.id !== action.id )
    return{
        ...state,
        list: newList
    }
    default: return state
}
}
export  default todoList