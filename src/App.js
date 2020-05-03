import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Try from './try'
import {CardList} from './component/card-list.component/card-list'
import { Search } from './component/card-list.component/search';
//import {Form} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {card} from './component/card-list.component/card-componenet'

class App extends React.Component{
  
  constructor(){
    super();

    this.state={
      family:[
        {
          id:1,
          name:'Manali',
          email:'manalisharma2311@gmail.com',
          no:123456789
        },
        {
          id:2,
          name:'Mousam',
          email:'mousam.sharma@gmail.com',
          no:12345678
        },
        {
          id:3,
          name:'Sheetal',
          email:'sheetal@gmail.com',
          no:1234567
        },
        {
          id:4,
          name:'Vipin',
          email:'vipinsharma@gmail.com',
          no:123456
        },
        {
          id:5,
          name:'Sakshi',
          email:'saks@gmail.com',
          no:12345
        },
        {
          id:6,
          name:'sarthak',
          email:'sarthak@gmail.com',
          no:12345785
        },
        {
          id:7,
          name:'Atul',
          email:'atu@gmail.com',
          no:12345000
        }
      ],
      SearchField :''
    }
  }
render(){
  const { family , SearchField }=this.state;
  const filerfamily = family.filter(family=>
    family.name.toLowerCase().includes(SearchField.toLowerCase())
    );
  //const list=['A','B','C'];
  return(
<div>
  <h1>Office Life</h1>
  {/* <Button variant="primary">Primary</Button> */}
  <Search
  placeholder="Search..." 
  handlechange={e=> this.setState({SearchField:e.target.value})} 
  />
  
{/* <input type="search" placeholder="seach family" */}
{/* onChange={e=> this.setState({SearchField:e.target.value})} /> */}

<CardList family ={filerfamily}/>


{/* {this.state.family.map(family=>( */}
  {/* <i>{family.name}<br/>{family.email}<br/>{family.no}<br/></i> */}
{/* ))} */}
{/* <Try list={list} /> */}
    </div>
  )
 
}
}

export default App;
