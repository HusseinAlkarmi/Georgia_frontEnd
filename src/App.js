import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/job/Job";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Profile from './components/profile/Profile';
import Category from './components/subCategory/SubCategory';
import MarketProfile from './pages/MarketProfile';

function App() {
  return (
    <>
     <Router>
        <Navbar/>

        <Routes >
            <Route path="/" element={<Home />} exact />
            <Route path="/Jobs" element={<Jobs />} exact />
            <Route path="/Profile" element={<Profile/>} exact /> 
            <Route path="/Jobs/:type" element={<Jobs/>} exact /> 
            <Route path="/Category" element={<Category />} exact />
            <Route path="/MarketProfile" element={<MarketProfile />} exact />

            {/* <Route path="/Blog" element={<Blog />} exact />
            <Route path="/Service" element={<Service />} exact />
            <Route path="/ReachOut" element={<Reachout />} exact />
            <Route path="/AboutUs" element={<About />} exact />
             */}
        </Routes >

        <Footer/>
    </Router>
    </>
  );
}

export default App;
