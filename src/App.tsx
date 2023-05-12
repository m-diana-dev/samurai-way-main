import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StateType} from "./redux/state";


type AppPropsType = {
    state: StateType
}
const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <section className="section">
                    <div className="container section-wrapp">
                        <Navbar/>
                        <main className="main_block">
                            <Route path="/profile" render={()=><Profile posts={props.state.ProfilePage.posts}/>}/>
                            <Route path="/messages" render={()=><Dialogs dialogs={props.state.DialogsPage.dialogs} messages={props.state.DialogsPage.messages}/>}/>
                            <Route path="/news" render={()=><News/>}/>
                            <Route path="/music" render={()=><Music/>}/>
                        </main>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
