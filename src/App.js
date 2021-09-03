// create your App component here
import React, { Component } from "react";

class App extends Component {

    state = {
        spacepeople: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    spacepeople: json.people
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.spacepeople.map((person) => person.name)}
            </div>
        )
    }

}

export default App;