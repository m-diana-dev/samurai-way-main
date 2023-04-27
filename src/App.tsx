import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Prifile";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <section className="section">
                <div className="container section-wrapp">
                    <Navbar/>
                    <Profile/>
                </div>
            </section>
        </div>
    );
}

export default App;
