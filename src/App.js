import { Fragment } from 'react';
import NavBar from './Components/NavBar/NavBar';
import MealItems from './Components/AvailableMeals/MealItems';

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <MealItems></MealItems>
    </Fragment>
  );
}

export default App;
