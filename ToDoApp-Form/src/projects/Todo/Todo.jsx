import "./Todo.css";
import {useState} from "react";
export const Todo=()=>{
    const[inputValue , setInputValue] = useState(""); 
    const handleInputChange=(value)=>{
        setInputValue(value);
    };
    const handleFormSubmit=(event)=>{
        event.preventDefault(); // here preventDefault can prevent the the by default property of  form .
    }
    return(
        <section className="todo-container">
            <header>
             <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="to-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value) }/>
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add task</button>
                    </div>
                </form>
            </section>
        </section>
    );
};