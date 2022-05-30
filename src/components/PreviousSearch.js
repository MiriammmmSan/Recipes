import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearch(){
    const searches = ['soup', 'rice', 'noodles', 'salad', 'spicy', 'dessert'];
    return (
        <div className="previous-search section">
            <div className="search-box">
                <input type="text" placeholder="Search for a recipe" />
                <button className="btn">
                 <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>
             <h2>Previous Searches</h2>
                <div className="previous-search-conteiner">
                    {searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </div>))}
            </div>
        </div>
    )
}