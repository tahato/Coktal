import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Drink = () => {
    const{id}=useParams()
const url ="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
const [drink,setDrink]=useState([]); 

useEffect(() => {
    axios.get(url+id)
 
    .then((resp)=>{
       setDrink(resp.data.drinks)
       
    })
}, []);


    return (
        
        <div className='detail' >
          <img src={drink[0]?.strDrinkThumb} alt="" className='pic' />
          <h1>{drink[0]?.strDrink}</h1>
          <h1>{drink[0]?.strGlass}</h1>
            <h1>{drink[0]?.strCategory}</h1>
        </div>
    );
};

export default Drink;