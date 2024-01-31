const FoodBox = ({name, calories, image, servings, onDelete}) => {
    return (
        <div>
        <p>{name}</p>
        <img src={image} />
        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>
        <p>
          <b>Total Calories: {servings * calories} </b> kcal
        </p>
        <button className = "btn btn-danger" onClick={onDelete}>Delete</button>
      </div>
    );
};

export default FoodBox;