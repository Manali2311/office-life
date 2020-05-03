import React from 'react'
import {Card} from  './card-componenet'
import './card-list.css'

export const CardList= (p) =>(
        <div className='card-list'>
            {p.family.map(family=>(
     //<i>{family.id}-{family.name}</i>
     <Card key={family.id} family={family} />
))}
    </div>
)
