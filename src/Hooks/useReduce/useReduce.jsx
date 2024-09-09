// import { Fragment, useReducer, useState } from "react"

import { Fragment, useReducer, useState } from "react"



// const reduce = (state,action)=>{
//     if(action.type=="USERNAME"){
//         return{...state,username:action.payload}
//     }
//     else if (action.type=="INCREMENT"){
//         return{...state,age:state.age+1}
//     }
//     else if (action.type=="TODO"){
//         return{...state,todo:[...state.todo,action.payload]}
//     }
//     else if(action.type=="DELETE_TODO"){
//         return{
//             ...state,todo:state.todo.filter((value,index)=>index!==action.payload) 

//         }
//     }
// }
// const UseReducerExample2=()=>{
//     const [name,setName] = useState("")
//     const [age,setAge]=useState("")
//     const [todo,setTodo]= useState("")
//     const [edit,setEdit] = useState(null)
//     const initialState = {
//         username:"Amar",
//         age:24,
//         village:"Ramagundam",
//         todo:["hello Good Morning","hello Good Afternoon"]
//     }
//     const onChangeName = (event)=>{
//         setName(event.target.value)
//     }
//      const [currentState,dispatch]=useReducer(reduce,initialState)
//      const onsubmit = ()=>{
//         if(name){
//         dispatch({
//             type:"USERNAME",
//             payload:name
//          })
//         }
//         setName("")

//      }
//      const ageIncrement = ()=>{
//         dispatch({
//             type:"INCREMENT",
//             payload:1
//         })
//      }

//      const todoChange =(event)=>{
//         setTodo(event.target.value)
//      }

//      const todoSubmit = ()=>{
//         dispatch({
//             type:"TODO",
//             payload:todo
//         })
//      }


//      const deleteTodo = (index)=>{

//         dispatch({
//             type:"DELETE_TODO",
//             payload:index
//         })
//      }

//      const EditTodo = (index)=>{
//         setEdit(index)
//      }


//     return(
//         <>
//         <input type="text" value={name} onChange={onChangeName}/>
//         <button onClick={onsubmit}>submit</button>
//         <h3>hello good morning: {currentState.username}</h3>
//         <h3>Age :{currentState.age}</h3>
//         <button onClick={ageIncrement}>+</button>
//         {
//             currentState.todo.map((item,index)=>{
//                 return(
//                     <Fragment>
//                     <h3>{item}</h3>
//                     <button onClick={()=>{EditTodo(index)}}>Edit</button>
//                     <button onClick={()=>{deleteTodo(index)}}>delete todo</button>
//                 </Fragment>
//                 )
//             })
//         }
//         <br /><br />
//         <input type="text" value={todo} onChange={todoChange} />
//         <button onClick={todoSubmit}>add todo</button>
//         </>
//     )
// }
// export default UseReducerExample2


const reduce = (state,action)=>{

    if(action.type=="NEWTODO"){
        return{ ...state,todo:[...state.todo,action.payload]}
    }

    else if(action.type=="CHANGE_NAME"){
        return{...state,userName: action.payload}
    }



    else if (action.type=="REMOVE"){
        return{
            ...state,todo:state.todo.filter((value,index)=>index!==action.payload)
        }
    }

    else if(action.type=="UPDATE"){
        const updated = state.todo.map((item,index)=>
            index === action.payload.index ? action.payload.val : item
        )

        return{
                 ...state,todo:updated

                 }
        }
    }

const UseReducerExample2 = ()=>{



    const [userName,setUserName]=useState("")
    const[enteredTodo,setEnteredTodo] = useState("")
    const [editIndex,setEditIndex]=useState(null)
    const [editValue,setEditValue]=useState("")

    const initialState = {
        userName:"Amar",
        age:24,
        city:"Karminagar",
        todo:["hello Good morning",]
    }

    const [currentState,dispatch]=useReducer(reduce,initialState)


    const userNameFunction = (event)=>{
        setUserName(event.target.value)
    }

    const nameSubmit =()=>{
       if(userName){
        dispatch({
            type:"CHANGE_NAME",
            payload:userName
        })

       }
        setUserName("")
    }


    const todoChange=(event)=>{
        setEnteredTodo(event.target.value)
    }

    const todoSubmited =()=>{
        dispatch({
            type:"NEWTODO",
            payload:enteredTodo
        })
        setEnteredTodo("")
    }

    const removeTodo = (index)=>{
        dispatch({
            type:"REMOVE",
            payload:index
        })
    }


    const editTodo=(item,index)=>{
        setEditIndex(index)
        setEditValue(item)
    }

    const editedValueFun = (event)=>{
        setEditValue(event.target.value)
    }

    const editUpdate = ()=>{
        dispatch({
            type:"UPDATE",
            payload:{index:editIndex,val:editValue}
        })

        setEditValue("")
        setEditIndex(null)
    }


   const containerStyle = {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      };
    
      const inputStyle = {
        padding: "10px",
        width: "80%",
        marginBottom: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      };
    
      const buttonStyle = {
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
        margin: "5px",
      };
    
      const todoItemStyle = {
        backgroundColor: "#fff",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      };
    
      const editInputStyle = {
        padding: "5px",
        borderRadius: "3px",
        border: "1px solid #007bff",
        width: "60%",
      };
    

      return (
        <div style={containerStyle}>
          <h3>Enter your name</h3>
          <input
            type="text"
            value={userName}
            onChange={userNameFunction}
            style={inputStyle}
          />
          <button onClick={nameSubmit} style={buttonStyle}>
            Submit
          </button>
    
          <h3>{currentState.userName}</h3>
    
          <input
            type="text"
            value={enteredTodo}
            onChange={todoChange}
            style={inputStyle}
          />
          <button onClick={todoSubmited} style={buttonStyle}>
            Add Todo
          </button>
    
          {currentState.todo.map((item, index) => (
            <div key={index} style={todoItemStyle}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={editedValueFun}
                    style={editInputStyle}
                  />
                  <button onClick={editUpdate} style={buttonStyle}>
                    Update
                  </button>
                </>
              ) : (
                <>
                  <h3 style={{ margin: "0" }}>{item}</h3>
                  <div>
                    <button
                      onClick={() => editTodo(item, index)}
                      style={buttonStyle}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeTodo(index)}
                      style={{
                        ...buttonStyle,
                        backgroundColor: "red",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      );


    // return(


    //     <Fragment>


    //     <h3>Enter your name</h3>
    //     <input type="text" value={userName} onChange={userNameFunction}/>  <button onClick={nameSubmit}>Submit</button>

    //     <h3>{currentState.userName}</h3>


    //     <input type="text" value={enteredTodo} onChange={todoChange} />
    //     <button onClick={todoSubmited}>submit</button>

    //     {
    //         currentState.todo.map((item,index)=>{
    //             return(
    //                 <>
    //                 {
    //                     editIndex===index ? (

    //                     <>
    //                     <input type="text" value={editValue} onChange={editedValueFun}/>
    //                     <button onClick={editUpdate}>update</button>
    //                     </>

    //                     ):(<>
    //                         <h3>{item}</h3>
    //                         <button onClick={()=>{editTodo(item,index)}}>edit</button>
    //                         <button onClick={()=>removeTodo(index)}>remove</button>
    //                         </>)
    //                 }
    //                 </>
    //             )
    //         }
            
    //         )
    //     }
    //     </Fragment>
    // )
}
export default UseReducerExample2
