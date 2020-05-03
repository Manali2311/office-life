import React from 'react'
import './Search.css'
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Search=({placeholder,handlechange})=>{
    var mystyle ={
        width:"50%"
    }
    return(
    <div style={mystyle} >
        <Form.Control 
       type="search" 
       className="search"
       placeholder={placeholder} 
       onChange ={handlechange}/>

</div>
) 
    }
