import React, { Component } from 'react';
import CardList from './CardList'; // import our CardList component
import SearchBox from './SearchBox'; // import our SearchBox component
import { robots } from './robots'; // a list of our js robot objects
import './App.css'; // import the specific css for this component

// use class sytnax so that we can create state inside the constructor function
class App extends Component {
    // state stuff like this will usually reside in the most parent component
    constructor() {
        // must call super() before we can use the this keyword
        super();
        // this is what will enable our SearchBox and CardList components to communicate
        // between each other by use of state
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })        
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;