import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Dialogs} from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <section className="section">
                    <div className="container section-wrapp">
                        <Navbar/>
                        <main className="main_block">
                            <Route path="/profile" component={Profile}/>
                            <Route path="/messages" component={Dialogs}/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                        </main>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
