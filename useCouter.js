import { useState } from "react"



export const useCouter = (initialState =10) => {
    
    const [counter, setcounter] = useState(initialState);
    const increment = () =>{
        setcounter(counter +1);
    }

    const reset = () =>{
        setcounter(initialState);
    }

    const decrement = () =>{
        setcounter(counter -1);
    }
    return{
        counter,increment,decrement,reset
    }

}
