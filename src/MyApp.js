import React from "react";
import ToDoItem from './components/ToDoItem';
import TodosData from './components/todosData';



class MyApp extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: TodosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    //toggle check box of item using completed prop
    handleChange(id){
        
        /* My Original (working) Approach
        this.setState((prevState) => {
            let oldState = prevState
            oldState.todos[id-1].completed = !prevState.todos[id-1].completed
            return(oldState)
        })
        */

       //Tutorial Approach
       this.setState(prevState => {
           const updatedTodos = prevState.todos.map(todo => {
               if(todo.id === id){
                   todo.completed = !todo.completed
               }
               return todo
           })
           return {
               todos: updatedTodos
           }
       })
        
       console.log("changed", id)
    }

    render(){
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} 
            handleChange={this.handleChange}/>)

        return(
            <div className="todo-list">
                <h2>To Do:</h2>
                {todoItems}
            </div>
        )
    }
}

export default MyApp