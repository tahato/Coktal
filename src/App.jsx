import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

  useEffect(() => {
    axios.get(url).then((res) => {
      setList(res.data.drinks);
    });
  }, []);


  return (
    <>
      <div className="all" >
        {list.map((e,index) => (
         
          <div className="container" key={index}>
            <div  className="imageSide">
              <img src={e.strDrinkThumb} alt="" className="pic"/>
            </div>
            <div className="info">
         <h1>{e.strDrink}</h1> 
            <h1>{e.strGlass}</h1>
            <h1>{e.strCategory}</h1>
            <Link to={`/drink/${e.idDrink}`}>   <button>deatils</button></Link>
            </div >
           
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
