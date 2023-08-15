import Card from "../UI/Card";
import './MealItem.css'
function MealItem(props){
    return(
       <Card>
        <li class="meal">
            <div>
            <h3>{props.name}</h3>
            <div class="description">{props.description}</div>
            <div class="price">${props.price}</div>
            </div>
        </li>
        </Card>
    );
}

export default MealItem;