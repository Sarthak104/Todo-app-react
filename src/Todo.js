import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos"
import FilterTodos from "./components/FilterTodo";
export default class Todos extends React.Component{
    constructor(){
        super();
        this.state={
            todos: [
                {
                    // title:"Hit gym",
                    // status:"active",
                }],
                allTodos: [],
        };
    }

    addTodo = (title) => {
        let todo = {
            title,
            active: 1,
        };
        let newTodosArray = [...this.state.todos, todo];
        this.setState({
            todos: newTodosArray,
            allTodos: newTodosArray,
        });
    };

    updateTodo=(todo)=>{
        let todoObjectIndex= this.state.todos.indexOf(todo);
        let previousArray=[...this.state.todos];
        previousArray[todoObjectIndex].active=!previousArray[todoObjectIndex]
        .active;
        this.setState({
            todos: previousArray,
            allTodos: previousArray,
        });
    };
    deleteTodo=(todo)=>{
        let todoObjectIndex=this.state.todos.indexOf(todo);
        let previousArray=[...this.state.todos];
        previousArray.splice(todoObjectIndex, 1);
        this.setState({
            todos: previousArray,
            allTodos: previousArray,
        });
    };

    filterTodos = (filter) => {
        switch(filter){
            case "Active":
                let activeTodos=this.state.allTodos.filter((todo) => todo.active);
                this.setState({
                    todos: activeTodos,
                });
                break;
            case "Completed":
                let completedTodos = this.state.allTodos.filter((todo) => !todo.active);
                this.setState({
                    todos: completedTodos,
                });
            default:
                this.setState({
                    todos : [...this.state.allTodos],
                });
        };
    }
    render(){
        return (
            <>
             <InputTodo addTodo={this.addTodo}></InputTodo>
             <ListTodos 
             items={this.state.todos} 
             deleteTodo={this.deleteTodo} 
             updateTodo={this.updateTodo}>
             </ListTodos>
            <FilterTodos filterButtons={["All","Active","Completed"]} filterTodos={this.FilterTodos}></FilterTodos>
            </>
        )  
    }
}