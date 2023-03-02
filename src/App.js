import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Jobs from "./pages/Job";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import UserProfile from './pages/UserProfile';
import MarketProfile from './pages/MarketProfile';
import SubCategory from './pages/SubCategory';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Reachout from './pages/Reachout';

function App() {
  return (
    <>
     <Router>
        <Navbar/>

        <Routes >
            <Route path="/" element={<Home />} exact />
            <Route path="/Jobs" element={<Jobs />} exact />
            <Route path="/Profile" element={<UserProfile/>} exact /> 
            <Route path="/Jobs/:type" element={<Jobs/>} exact /> 
            <Route path="/Category/:id" element={<SubCategory />} exact />
            <Route path="/MarketProfile" element={<MarketProfile />} exact />
            <Route path="/Blog" element={<Blog />} exact />
            <Route path="/ReachOut" element={<Reachout />} exact />
            {/*
            <Route path="/Service" element={<Service />} exact />
            <Route path="/AboutUs" element={<About />} exact />
             */}

        </Routes >

        <Footer/>
    </Router>
    </>
  );
}

export default App;
