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

    sayMyName = (fruit) => {
        alert("Hello, I'm " + fruit);
    }

    render() {
        return (
            <Paper elevation={2} style={paperStyle}>
                <label className="myLabel" onClick={() => this.sayMyName(this.props.fruit)}>{this.props.fruit}</label>
            </Paper>
        );
    }
}

export default FirstComponent;
