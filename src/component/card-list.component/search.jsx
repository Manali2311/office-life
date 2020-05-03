import React from 'react'
import './Search.css'
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Search=({placeholder,handlechange})=>(
    <div Style="width:50%;" >
        <Form.Control 
       type="search" 
       className="search"
       placeholder={placeholder} 
       onChange ={handlechange}/>

</div>
) 
