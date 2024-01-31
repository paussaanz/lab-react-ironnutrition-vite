import "./App.css";
import AddFoodForm from "./components/food-form/AddFoodForm";
import FoodList from "./components/food-list/FoodList";

function App() {
  return (
    <div className="App">
      <AddFoodForm/>
      <FoodList />
    </div>
  );
}

export default App;
