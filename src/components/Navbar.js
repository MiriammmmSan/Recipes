import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"
import Sidebar from "./Sidebar"
export default function Navbar () {
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar () {
        setShowSidebar(false)
    }
    return (
        <div>
        <div className="navbar container">
            <a href="#!" className="logo">MariF<span>oo</span>d</a>
            <div className="nav-links">
                {links.map(link => (
                     < Link className={location.pathname === link.path ? "active" : " " }to={link.path} key={link.name}>{link.name}</Link>
                ))}
            </div>
            <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close ={closeSidebar} links={links}/>}
        </div>
    )
        
}