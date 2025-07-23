import React, { Component } from "react";


class CounterChangerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    // handleChangeCounter = () => {
    //     this.setState({ count: this.state.count + 1 });
    // };

    handleChangeCounter = () => {
        this.setState((count) => ({
            count: count.count + 1,
        }));
    };

    // DecreaseCounter = () => {
    //     // this.setState({ count: this.state.count - 1 });
    //     this.setState((prevState) => ({
    //         count: prevState.count > 0 ? prevState.count - 1 : 0,
    //     }));
    // }

    DecreaseCounter = () => {
        this.setState((prevState) => {
            if (prevState.count > 0) {
            return { count : prevState.count - 1}
        }
    })
    };

    

    render() {
        return (
            <div>
                <h2>{this.state.count} </h2>
                <button onClick={this.handleChangeCounter}>
                    Increase Count
                </button>
                <button onClick={this.DecreaseCounter}>Dcrease Count</button>
            </div>
        );
    }
}


export default CounterChangerClass;