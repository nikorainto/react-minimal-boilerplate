import React, { Component } from 'react';
import './css/FirstComponent.scss';

// Material ui component
import Paper from 'material-ui/Paper';

const paperStyle = {
    maxWidth: 200,
    margin: "auto",
    marginTop: 20,
    display: "flex"
};

class FirstComponent extends Component {

    // This is how to create a function in React component
    sayMyName = (fruit) => {
        alert("Hello, I'm " + fruit);
        return fruit;
    }

    // Every time this component is called, return a new element with the given values
    // The way to access the property from main container is following: {this.props.fruits}
    render() {
        return (
            <Paper elevation={2} style={paperStyle}>
                <label className="myLabel" onClick={() => this.sayMyName(this.props.fruit)}>{this.props.fruit}</label>
            </Paper>
        );
    }
}

export default FirstComponent;
