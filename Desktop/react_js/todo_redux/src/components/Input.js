import React, { useState } from 'react'
import "./input.css"
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../actions/index'
import DeleteIcon from '@material-ui/icons/Delete';
import todo from '../Image/todo.svg'
import '../App.css'

const Input = () => {
  const [inputTodo, setInputTodo] = useState("")
  // for todolist
  const list = useSelector((state) => state.todoList.list)
  const dispatch = useDispatch()

  return (<>
    <div className="main_div">
      <div className="child_div">
      {/* header */}
        <figure>
          <img src={todo} alt="todo logo" />
          <figcaption>
            Add Your List here 🔖
          </figcaption>
        </figure>
        {/* input todo */}
        <div className="add_item">
          <input type="text" placeholder="✍️ Add your new todo..." required value={inputTodo} onChange={(event) => { setInputTodo(event.target.value) }} />
          <a className="plus_btn" onClick={() => 
           dispatch(addTodo(inputTodo),setInputTodo(""))
          }><AddIcon /> </a>
        </div> 
        {/* todo list display with delete button */}
        <div className="list_items">
          {
            list.map((elem) => {
              return (
                <div className="item" key={elem.id}>
                  <h3 className="h3">{elem.inputtodo}</h3>
                  {/* // eslint-disable-next-line */}
                  <a className="delet_btn" title="Delete Item " onClick={() => dispatch(deleteTodo(elem.id))}><DeleteIcon /></a>
                </div>
              )
            })
          }

        </div>


      </div>
    </div>
  </>
  )
}

export default Input
