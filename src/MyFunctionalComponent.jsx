import React from "react";

export const MyFunctionalComponent = () => {

    const [state, setState] = React.useState({ count: 0, name: "Kamesh" });

    const [bulb, setBulb] = React.useState(false);

    const incrementCounter = () => {
        let newCount = state.count + 1;
        setState({ ...state, count: newCount, class: "REact" });
    }

    const toogleBulb = () => {
        setBulb(!bulb);
    }

    return <div>
        <h1>Functional Component</h1>
        <p>Count: {state.count}</p>
        <button onClick={incrementCounter}>Increment</button>

        <p>Bulb: {bulb ? "On" : "Off"}</p>
        <button onClick={toogleBulb}>ToogleBulb</button>
    </div>
}