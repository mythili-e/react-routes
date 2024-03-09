import { useState, useRef, useEffect } from "react";
function Example(){
    const[input,setInput]=useState("");
    const name=useRef("");

    useEffect(()=>{
        name.current=input;
    });
    

    const handleChange=(event)=>{
        setInput(event.target.value);
    }

        return(
        <>
        <input type="text" value={input} onChange={handleChange}/>
        Current Name:{name.current}
        </>

    );
}
export default Example;