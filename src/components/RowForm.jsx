import React, { useContext, useState } from "react";
import { RowContext } from "../contexts/RowContext";

const NewRowForm=() =>{
    const {dispatch} = useContext(RowContext);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch( {type:'ADD_ROW',row:{
            name,email
        }});
        setName('')
        setEmail('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder='name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required />
            <input type="email"
                placeholder='Email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required />
            <input type='submit' value='Add' />
        </form>
    )

}
export default NewRowForm;