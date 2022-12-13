import React from "react";

class MyClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "Kamesh",
            bulb: false
        }
    }

    incrementCounter = () => {
        let newCount = this.state.count + 1;
        this.setState({ count: newCount });
    }

    toogleBulb = () => {
        let newBulbStatus = !this.state.bulb;
        this.setState({ bulb: newBulbStatus });
    }

    render() {
        return <div>
            <h1>Class Component</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCounter} >Increment</button>

            <p>Bulb: {this.state.bulb ? "On" : "Off"}</p>
            <button onClick={this.toogleBulb}>ToogleBulb</button>
        </div>
    }
}

export default MyClassComponent;