import "./Todo.css";
import {useState} from "react";
export const Todo=()=>{
    const[inputValue , setInputValue] = useState(""); 

    // Now When the user write some in input then to store thats content in an array we will have to need useState again , useState show below .

    const[task , setTask] = useState([]);



    const handleInputChange=(value)=>{
        setInputValue(value);
    };
    const handleFormSubmit=(event)=>{
        event.preventDefault();    // here preventDefault can prevent the the by default property of  form .

        if(!inputValue) return;

        // setTask((prevTask) => console.log(prevTask) ); // We can get previous value .

        // ------------ , or , the just above code ---------------

        setTask((prevTask) => [...prevTask , inputValue] ); // using spread operator       

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