import React from 'react'

function Try(p)
{
    const mylist=p.list;
    const lists=mylist.map(my=>(
        <li>{my}</li>
    ));
    return(
<div><ul>{lists}</ul><ol>{lists}</ol></div>
    )
}
export default Try;
