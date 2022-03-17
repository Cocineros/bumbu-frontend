import './card.css'

export default function Card() {
    return (
        <div className="card-container">
            <h1>card example</h1>
            <div className="recipe-card">
                <h2 id="add-recipe">Add a recipe</h2>
                <br></br>
                <div className='dish-details'>
                    <h3>Dish name:</h3>
                    <input placeholder="Enter dish name here"></input>
                    <h3>Dish time:</h3>
                    <input placeholder="Enter time to make dish here"></input>
                </div>
                <br></br>
                <div className='recipe-detail-container'>
                    <h3>Ingredients:</h3>
                    <input placeholder="Enter ingredients here"></input>
                    <h3>Directions:</h3>
                    <input placeholder="Enter directions here"></input>
                    <h3>Upload image:</h3>
                    <input placeholder="Optional: upload image of dish here"></input>
                </div>
                <br></br>
                <button>add recipe to cookbook</button>
            </div>
        </div>
    )
}