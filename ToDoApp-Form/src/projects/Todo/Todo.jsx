// import {useState} from "react";
// import { MdCheck, MdDeleteForever } from "react-icons/md";
// // import {useEffect } from "react";
// import "./Todo.css";
// export const Todo=()=>{

//     // Now When the user write some in input then to store thats content in an array we will have to need useState  , useState show below .
    

//     const[inputValue , setInputValue] = useState(""); 

//     // Now When the user write some in input then to store thats content in an array we will have to need useState again , useState show below .

//     const[task , setTask] = useState([]);

//     const[dateTime , setDateTime] = useState("");

//     const handleInputChange = (value) => {
//         setInputValue(value);
//     };
//     const handleFormSubmit = (event) =>{
//         event.preventDefault();    // here preventDefault can prevent the the by default property of  form .

//         if(!inputValue) return; // first validation. Here do not store the data

//         if(task.includes(inputValue)){    // Second validation . here if user  type any vlaue in an array then if that value already exist then return easily .
//             setInputValue("")  // It will be empty the input
//             return ;
//         } 

//         // setTask((prevTask) => console.log(prevTask) ); // We can get previous value .

//         // ------------ , or , the just above code ---------------

//         setTask((prevTask) => [...prevTask , inputValue] ); // using spread operator We can put previous data as it 
        
//         setInputValue(""); // third validation . It will be empty the input 

//     };

//     // ====================================================== Todo , add date and time ================================================================================


//     // const now = new Date();
//     // const formattedDate = now.toLocaleDateString();
//     // const formattedTime = now.toLocaleTimeString(); // Many time pages will be refresh to know tha date . Hence to write the below code through which date continuously changes

//      setInterval(() => {
//         const now = new Date();
//         const formattedDate = now.toLocaleDateString(); // If any data continuously change in react then we need useState.
//         const formattedTime = now.toLocaleTimeString();
//         setDateTime(`${formattedDate} - ${formattedTime}`);
//     } , 1000);

//     // ========== The just above code can also written as ..==== due to memory leakage problem ===================

//     // useEffect(() => {
//     //     const interval = setInterval(() => {
//     //         const now = new Date();
//     //         const formattedDate = now.toLocaleDateString(); // If any data continuously change in react then we need useState.
//     //         const formattedTime = now.toLocaleTimeString();
//     //         setDateTime(`${formattedDate} - ${formattedTime}`);
//     //     } , 1000);

//     //     return () => clearInterval(interval);
    
//     // } , []);

    
  
//     // ==================== the just Above code can also be written as ==========================================

//     // const getDateTime = () =>{
//     //      const now = new Date();
//     //      const formattedDate = now.toLocaleDateString();
//     //      const formattedTime = now.toLocaleTimeString();
//     // };

//     // setInterval(() => {
//     //     getDateTime();
//     // } , 1000);

//     // ==========================================================================================================

//     const handleDeleteTodo = (value) => {
//         console.log(task); 
//         console.log(value);
//         const updatedTask = task.filter((curTask) => curTask !== value);
//         setTask(updatedTask);
//     };

//     // todo handleClearTodData functionality..........................................

//     const handleClearTodoData = () =>{
//         setTask([]);
//     }

//     return(
//         <section className="todo-container">
//             <header>
//              <h1>Todo List</h1>
//             {/* <h1 className="date-time">{formattedDate}-{formattedTime}</h1> */}
//             <h1 className="date-time">{dateTime}</h1>
//             </header>

//             <section className="form">
//                 <form onSubmit={handleFormSubmit}>
//                     <div>
//                         <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value) }/>
//                     </div>
//                     <div>
//                         <button type="submit" className="todo-btn">Add task</button>
//                     </div>
//                 </form>
//             </section>
          
//             <section className="myUnOrdList">
//                 <ul>
//                     {task.map((curTask , index) => {
//                         return (
//                              <li key={index} className="todo-item">
//                                 <span>{curTask}</span>
//                                 <button className="check-btn">
//                                     <MdCheck />
//                                 </button>
//                                 <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}> 
//                                     <MdDeleteForever />
//                                 </button>
//                             </li>
//                         );
//                     })} 
//                 </ul>
//             </section>
//             <section>

               

//                 <button className="clear-btn" onClick={handleClearTodoData}> Clear all</button>  
//             </section>

//         </section>
//     );
// };

// =========================================================================================================================================================================================================

// Since We know that Each and Everything in React is a component , Hence It is better away of programming to create a perticular component for Each content, Hence the All Above code can write in perticular , perticular components also as given below-------------------------------------------------------------------------------------------------------------------------------------------------------

// ============================================================================================================================================================================================================


import {useState} from "react";
import {TodoForm} from "./TodoForm";
import {TodoList} from "./TodoList";
import {TodoDate} from "./TodoDate";

import "./Todo.css";
export const Todo=()=>{
    
    // const[inputValue , setInputValue] = useState(""); 

    const[task , setTask] = useState([]);

    

    // const handleInputChange = (value) => {
    //     setInputValue(value);
    // };
    const handleFormSubmit = (inputValue) =>{
           

        if(!inputValue) return; 

        if(task.includes(inputValue)) return ;
        
        setTask((prevTask) => [...prevTask , inputValue] ); 
        
    };

    // ====================================================== Todo , add date and time ================================================================================
    
    // setInterval(() => {
    //     const now = new Date();
    //     const formattedDate = now.toLocaleDateString(); // If any data continuously change in react then we need useState.
    //     const formattedTime = now.toLocaleTimeString();
    //     setDateTime(`${formattedDate} - ${formattedTime}`);
    // } , 1000);

    // The just Above code can also be written as 

    

    const handleDeleteTodo = (value) => {
        console.log(task); 
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };

    // todo handleClearTodData functionality..........................................

    const handleClearTodoData = () =>{
        setTask([]);
    }

    return(
        <section className="todo-container">
            <header>
             <h1>Todo List</h1>
            
             <TodoDate/>
           
            </header>

            {/* <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value) }/>
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add task</button>
                    </div>
                </form>
            </section> */}

            <TodoForm onAddTodo={handleFormSubmit}/>
          
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask , index) => {
                        return( <TodoList key={index} data={curTask} onHandleDeleteTodo={handleDeleteTodo}/>);
                        
                    })} 
                </ul>
            </section>
            <section>

               <button className="clear-btn" onClick={handleClearTodoData}> Clear all</button>  

            </section>

        </section>
    );
};
