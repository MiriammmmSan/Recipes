import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Settings (){
    const [theme, setTheme] = useState("light")
    const primaryColors = [
        "rgb(157, 71, 168)",
        "rgb(93, 91, 255)",
        "rgb(41, 230, 148)",
        "rgb(232, 132, 24)"

    ]
    const fontSizes= [
        {
            title: "Small",
            value: "12px"

        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        }
    ]
    const [primaryColor, setPrimaryColor] = useState(0);
    const [fontSize, setFontSize] = useState(1);
    return (
        <div>
            <div className="section d-block">
                <h2>Theme</h2>
                <div className="option-container">
                    <div className="option light">
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck}/>
                            </div>
                        )}
                    </div>
                    <div className="option dark">
                        {theme === "dark" && (
                            <div className="check">
                                 <FontAwesomeIcon icon={faCheck}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="section d-block">
                <h2>Primary Color</h2>
                <div className="option-container">
                    { primaryColors.map((color, index) => (
                        <div className="option light" style={{backgroundColor: color}}>
                            {primaryColor === index && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck}/>
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="option-container">
                    { fontSizes.map((size, index) => (
                        
                     <button className="btn">
                          {size.title}
                         { fontSize === index && <span> <FontAwesomeIcon icon={faCheck}/> </span> }
                         </button>
                    ))}
                </div>
            </div>


        </div>
    )
}