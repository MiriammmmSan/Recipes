import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
 import { useState } from 'react'
 import { useDispatch } from 'react-redux'
 import { useSelector } from 'react-redux'

export default function PreviousSearch({placeholder}){
    const searches = useSelector((state) => state)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

  
    return (
        <div className="previous-search section">
            <div className="search-box">
                <input 
                    type="text"
                    onChange={(e) => {
                        setValue(e.target.value)
                    }} 
                    placeholder={placeholder}
                    className="recipeInput"
                    value={value}
                 />
                <button  className="btn addRecipe" onClick={() => {
                    dispatch({ type: 'ADD_RECIPE', payload: { text: value } })
                    setValue('')
                }}>
                 <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>    
                 <h2 className="privios-searches">{searches.length > 0 && 'Previous Searches'}</h2>
                <div className="previous-search-conteiner"> 
                          {searches?.map(item => <div key={item.text} className="search-item">{item.text}</div>)} 
                </div>
        </div>
    )
}
