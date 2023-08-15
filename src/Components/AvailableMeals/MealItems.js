import Card from "../UI/Card";
import MealItem from "./MealItem";
import './MealItems.css'

function MealItems(){

   const DUMMY_MEALS = [
      {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
      },
      {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
      },
      {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
      },
      {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
      },
    ];
   return (
    <Card>
      <div class="meals">
         <ul>
            {
               DUMMY_MEALS.map(item=>{
                  return <MealItem name={item.name} price={item.price} description={item.description}></MealItem>
               })
            }
        </ul>
      </div>
    </Card>
        
     
   );
}

export default MealItems;