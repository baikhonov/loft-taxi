import React from 'react';
import './App.css';
import {Map} from './Map';
import {Profile} from './Profile';
import {Login} from './Login';
import {Register} from './Register';

const PAGES = {
    map: <Map/>,
    profile: <Profile/>,
    login: <Login/>,
    register: <Register/>
}

class App extends React.Component {

    state = {
        currentPage: "map"
    }

    navigateTo = (page) => {
        this.setState({currentPage: page})
    }

    render() {
        return (
            <>
                <header>
                    <ul>
                        <li>
                            <button onClick={() => {
                                this.navigateTo("map")
                            }}>
                                Карта
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.navigateTo("profile")
                            }}>
                                Профиль
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.navigateTo("login")
                            }}>
                                Логин
                            </button>
                        </li>
                    </ul>
                </header>
                <main>
                    <section>
                        {PAGES[this.state.currentPage]}
                    </section>
                </main>
            </>
        );
    }
}

export default App;
