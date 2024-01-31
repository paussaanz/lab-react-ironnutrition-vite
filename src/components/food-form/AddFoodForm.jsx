import { useState } from "react";

const AddFoodForm = () => {
    const [formData, setFormData] = useState({ name: '', image: '', calories: 0, servings: 0 })

    const handleOnChange = (ev) => {
        setFormData((prev) =>{
          return ({
              ...prev,
              [ev.target.name]: ev.target.value
          })
        })
      }
  
    const handleOnSubmit = (ev) => {
        ev.preventDefault();
        console.log(formData) 
    }
 

    return (
            <form>
    <div>
        <label className ="form-label" htmlFor="name">Name:</label>
        <input className="form-control" type="text" name="name" value={formData.name} onChange={handleOnChange}/>
    </div>
    <div>
        <label htmlFor="image">Image:</label>
        <input className="form-control" type="text" name="image" value={formData.image} onChange={handleOnChange}/>
    </div>
    <div>
        <label className ="form-label" htmlFor="calories">Calories:</label>
        <input className="form-control" type="number" name="calories" value={formData.calories} onChange={handleOnChange}/>
    </div>
    <div>
        <label className ="form-label" htmlFor="servings">Servings:</label>
        <input className="form-control" type="number" name="servings" value={formData.servings} onChange={handleOnChange}/>
    </div>
    <button className="btn btn-primary mt-3" type="submit" onClick={handleOnSubmit}>Create</button>
</form>
    );
};

export default AddFoodForm;

