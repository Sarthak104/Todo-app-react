import React from "react";

export default class InputTodo extends React.Component{
    constructor()
    {
        super();
        this.inputRef=React.createRef();
    }
    render() {
        let { addTodo }=this.props;
        return (
            <>
            <input placeholder="Todo" ref={this.inputRef}></input>
            <button onClick={()=>{
                if(this.inputRef.current.value)
                addTodo(this.inputRef.current.value);
            }}>Add Todo</button>
            </>
        );
    }
}