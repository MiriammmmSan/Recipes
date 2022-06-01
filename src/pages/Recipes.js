import PreviousSearch from "../components/PreviousSearch";
import RecipesCard from "../components/RecipesCard";

export default function Recipes (){
    const recipes = [
        {
            title: "Pad See Ew (Thai Stir Fried Noodles)",
            img:"/img/recipe_img/Pad_See_Ew.png",
            preview:"Pad See Ew – the popular Thai stir fried noodles straight from the streets of Thailand made at home! While Pad Thai is sweeter and nuttier, Pad See Ew is salty, balanced with a touch of sour and a wonderful chargrilled flavour which you can create at home!",
        },
        {
            title: "Sesame Crusted Tofu Steaks",
            img:"/img/recipe_img/Sesame_Crusted_Tofu_Steaks.jpeg",
            preview:"Here's a quick and easy way to transform tofu from boring to delicious: cut them into steaks and pan fry with a crispy sesame crust, then douse with Teriyaki Sauce. It's a recipe that'll change anybody's mind about tofu!",
        },
        {
            title:"Chinese Rice Soup ",
            img:"/img/recipe_img/Chinese_Rice_Soup.jpeg",
            preview:"This Chinese Rice Soup is a really quick and easy soup recipe that's filling and nourishing. The Asian infused soup broth adapted from my Chinese Noodle Soup has a depth of flavour that belies the few ingredients called for.",
        },
        {
            title:"Thai Beef Salad",
            img:"/img/recipe_img/Thai_Beef_Salad.jpeg",
            preview:"Not just another Thai Beef Salad….This is made with one little change to create a dressing from an award winning Thai restaurant, arguably one of the best in the world outside of Thailand!",
        },
        {
            title:"Grilled Miso Glazed Japanese Eggplant",
            img:"/img/recipe_img/Grilled_Miso_Glazed_Japanese_Eggplant.jpeg",
            preview:"This Miso Glazed Japanese Eggplant is a great example of how simple modern Asian cooking can be. I've taken a traditional Japanese recipe, thickened the sauce to use it as a glaze and cooked it on the outdoor grill. It is so easy and fast, but the flavours will knock your socks off.",
        },
        {
            title:"Japanese GYOZA (Dumplings)",
            img:"/img/recipe_img/Gyoza.jpeg",
            preview:"This Japanese Gyoza recipe is my mothers', and it's a traditional, authentic recipe. Juicy on the inside, a golden brown and crispy base, these are made in a skillet and are one of my all time favourite Japanese dishes! Watch the recipe video and you'll be a Gyoza-Wrapping-Master in no time.",
        },
        {
            title:"Tuna Tartare with Lychees",
            img:"/img/recipe_img/Tuna_Tartare_with_Lychees.jpeg",
            preview:"While Tartare is often associated with finely chopped raw beef, at fine dining restaurants, it's more common made with fish. Fish tartare is simple to make and incredibly good value compared to dining out. At a restaurant in Sydney, this plate of Tuna Tartare would cost at least $40 – probably more!",
        },
    ].sort(() => Math.random() - 0.5)
    return (
        <div>
           <PreviousSearch/>
           <div className="recipes-conteiner">
            {/*<RecipesCard/> */}
            {recipes.map((recipe, index) => (
                <RecipesCard key={index} recipe={recipe}/>
            ))}
           </div>
        </div>
    )
}