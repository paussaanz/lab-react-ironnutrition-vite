import { useState } from "react";
import FoodBox from "../food-box/FoodBox";
import foodsJson from "../../data/foods.json"
const FoodList = () => {

    const [foods, setFoods] = useState(foodsJson)

    const onDelete = (id) =>{
        const newArray = foods.filter((food) => {
            return food.id !== id
        })
        setFoods(newArray)
        console.log(foods)
    }
    return (
        <div>
            <h1>Listado</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
                {foods.map((food) => (
                    <div key={food.id} className="col">
                        <FoodBox {...food} onDelete={() => onDelete(food.id)}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodList;