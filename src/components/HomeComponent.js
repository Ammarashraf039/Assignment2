import React, { Component } from 'react'
import Movies from './Movies';
import NavBar from './NavBar';
import Options from './Options';

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
        console.log("I am constructor")
        this.state = { date: new Date() }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        console.log("I am componentDidMount")
    }

    componentWillUnmount() {
        console.log("I am componentWillUnmount")
    }

    render() {
        console.log("I am render")
        return (
            <div>
                <NavBar />
                <div className="col-md-6 offset-2"><h2>All Movies  <span className="badge badge-pill badge-success">20</span></h2></div>
                <br />
                <Options />

                <Movies/>
            </div>
        )
    }
}
