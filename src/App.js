import { Fragment , useState} from 'react';
import Cart from './Components/NavBar/Cart';
import NavBar from './Components/NavBar/NavBar';
import MealItems from './Components/AvailableMeals/MealItems';

function App(props) {

  const[showCart,setShowCart] = useState(false);

  function showCartHandler(){
          setShowCart(true);
  }
  function closeCartHandler(){
    setShowCart(false);
  }
  return (
    <Fragment>
      <NavBar cartClicked={showCartHandler}></NavBar>
      {showCart&&<Cart closeCart={closeCartHandler}></Cart>}
      <MealItems></MealItems>
    </Fragment>
  );
}

export default App;
