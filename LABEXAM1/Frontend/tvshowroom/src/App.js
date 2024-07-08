
import Add from "./Components/Add";
import Footer from "./Components/Footer";
import Header from './Components/Header';
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App(){ 
    return (
        <>
        {/* <Router>
                <Routes>
                    <Route  exact path="/" element={<Header/>}/>
                </Routes>
        </Router> */}

        <Header></Header>
        <Home></Home>
        <Footer></Footer>
          
        </>
    )
}
export default App
