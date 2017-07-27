import React, { Component } from 'react';
import logo from '../utils/icons/logo.svg';
import './css/Main.scss';
import FirstComponent from '../components/FirstComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: null
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ fruits: ['banana', 'apple', 'orange', 'vodka', 'kiwi'] });
        }, 1500);
    }

    render() {
        let myFruits = this.state.fruits ? 
        this.state.fruits.map((fruit, key) => {
            return <FirstComponent fruit={fruit} key={key}/>
        }) : 
        null;
        return (
            <div className="Main">
                <div className="Main-header">
                    <img src={logo} className="Main-logo" alt="logo" />
                    <h2>Welcome to Minimal react boilerplate</h2>
                </div>
                {myFruits}
            </div>
        );
    }
}

export default Main;
