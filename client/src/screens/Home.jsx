import React from 'react'
import "../css/home.css";

// Components
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';
import LovedHomes from '../components/LovedHomes';
import Footer from '../components/Footer';

export const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse By Property Type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes Guests Love</h1>
                <LovedHomes />
                <Footer />
            </div>
        </div>
    )
}

export default Home;
