import React from 'react'
import './card-component.css'

export const Card=(p) =>{
    return(
<div className="card-component">
<img alt="Family" src={`https://robohash.org/${p.family.id}?set=set2&size=180x200`} />
    <h3><i>{p.family.name}</i></h3>
    <b>{p.family.email}</b>
    <i>{p.family.no}</i>
    </div>
)}