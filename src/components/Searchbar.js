
import React from 'react';
import {useState} from 'react';


export  const Searchbar=(props)=> {
   props.map(val=>{
       
   })
    const [filterData,setFiletrData]=useState([]);

    const handleFilter=(event)=>{
       const searchWord= event.target.value
       const newFilter=props.filter((el)=>{
           return el.name.first.includes(searchWord)
       })
      setFiletrData(newFilter) 
    }
    return (
    
    <div class="input-field">
 <input id="search" type="search" onChange={handleFilter} />
 <label class="label-icon" for="search"><i class="material-icons">search</i></label>
 <i class="material-icons">close</i>

{props.map(val=>{
    return val.name.first
})}
</div> 
    )
}