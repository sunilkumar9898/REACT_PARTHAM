import React, { Component } from "react";


class NameChagerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "John",
        };
    }


    // handleChange = () => {
    //     this.setState({ name: "Jane" });
    // };

    handleChange = () => {
        this.setState((prevState) => ({
           name:prevState.name === "John" ? "Jane" : "John"
}))

        // this.setState({ name: prevState.name === "John" ? "Jane" : "Jane" });
    };

    render() {
        return (
            <div>
                <h2>Hello ,{this.state.name} </h2>
                <button onClick={this.handleChange}>Change Name</button>
            </div>
        );
    }
}


export default NameChagerClass;