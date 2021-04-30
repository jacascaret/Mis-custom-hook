import { useState } from "react"

export const useForm = (initialState={}) => {
// Resive un objeto con sus propiedades q va ser un campo de (testo,un selector,o un campo del formulario   
//
const [values, setValues] = useState(initialState);
const reset =() =>{
  setValues(initialState);
}
const handleInputChange =(e) =>{
    setValues ({
        ...values,[e.target.name]: e.target.value
    });
}   
  return [values,handleInputChange,reset];
}
