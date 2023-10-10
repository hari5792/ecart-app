import { useState } from "react";
import Card from "../UI/Card";
import './MealItem.css'
function MealItem(props){

    const[input,setInput]=useState();

    function onFormSubmit(event){
        event.preventDefault();
        console.log(input);
    }
    return(
       <Card>
        <li className="meal">
            <div>
            <h3>{props.name}</h3>
            <div className="description">{props.description}</div>
            <div className="price">${props.price}</div>
            </div>
        </li>
        <form onSubmit={onFormSubmit}>
            <input type="number" step="1" min="1" max="5" value={input} onInput={e => setInput(e.target.value)}></input>
            <button>Add</button>
        </form>
        </Card>
    );
}

export default MealItem;