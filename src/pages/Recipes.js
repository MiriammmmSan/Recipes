import PreviousSearch from "../components/PreviousSearch";
import RecipesCard from "../components/RecipesCard";

export default function Recipes (){
    return (
        <div>
           <PreviousSearch/>
           <div className="recipes-conteiner">
            <RecipesCard/>
            <RecipesCard/>
            <RecipesCard/>
            <RecipesCard/>
            <RecipesCard/>
            <RecipesCard/>
            <RecipesCard/>
            <RecipesCard/>
           </div>
        </div>
    )
}