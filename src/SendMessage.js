import { ThemeProvider } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { Theme } from "@mui/material";

const App=()=>{
    const [message,setMessage]=useState([])
    const[MesErorr,setErorrMes]=useState('вы ничего не ввели')
    const[fromValide,setFormValid]=useState(false)
    const[userrsChat,activeUsersChat]=useState(['id','name'])
    useEffect(()=>{
        if(MesErorr){
            setFormValid(false)
        }
        else{
            setFormValid(true)
        }

    },[MesErorr])
    const Input=(props)=>{
       const inputRef=useRef(null);
        useEffect(()=>{
            inputRef.current?.focus();
        })
    }

    return(
        <div className="App">
            {
                userrsChat.map((el,id)=><div key={id}>{el}</div>)
            }
            <form>
                <ThemeProvider theme={blueTheme}></ThemeProvider>
                <input ref={inputRef}></input>
                {(MesErorr)&&<div style={{color:'grey'}}>{MesErorr}</div>}
                <input ref={inputRef} value={message} name='message' type='text' placegolder='write the message' ></input>
                <button disabled={!fromValide} type='submit'> submit</button>
            </form>
        </div>

    );


};