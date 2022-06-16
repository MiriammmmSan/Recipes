import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";
import { store } from './redux/previous'
import { Provider } from 'react-redux'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </div>
        <Footer/>
      </Provider>
    </Router>
  )
}

export default App;
