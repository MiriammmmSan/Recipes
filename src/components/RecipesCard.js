import CustomImg from "./Customimg"

export default function RecipesCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImg imgSrc={recipe.img} pt="60%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-text">{recipe.preview}</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}