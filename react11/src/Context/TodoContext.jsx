import { createContext, useContext, useState } from "react";
import React from 'react'

 const TodoContext = createContext();
export const TodoProvider = ({children}) => {

        const [todo,setTodo] = useState([]);

        const addTodo = (text) =>
        {
                setTodo([...todo,{id:Date.now(),text}])
        }

        
        const deleteTodo = (id) =>
        {
            setTodo(todo.filter((todo)=> todo.id !== id))
        }




return (
    <TodoContext.Provider value={{todo , addTodo ,deleteTodo}}>
            {children}
    </TodoContext.Provider>
)
};


export const useTodo = () => useContext(TodoContext);