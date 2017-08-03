import React, { Component } from 'react';
import logo from '../utils/icons/logo.svg';
import './css/Main.scss';
import FirstComponent from '../components/FirstComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize states
            fruits: null
        };
    }

    // When the main component mounts, add some items to the 'fruits' state after a short delay
    // This will trigger re-rendering for 'FirstComponent'
    componentDidMount() {
        this.setStateAfterDelay();
    }

    setStateAfterDelay = () => {
        setTimeout(() => {
            this.setState({ fruits: ['banana', 'apple', 'orange', 'vodka', 'kiwi'] });
        }, 1500);
    }

    render() {
        // Conditional to check if 'fruits' state contains something
        // if so, map (loop) the items from the state and for each render 'FirstComponent'
        // with passing the item name and index as properties to the component
        let myFruits = this.state.fruits ?
            this.state.fruits.map((fruit, key) => {
                return <FirstComponent fruit={fruit} key={key} />
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
