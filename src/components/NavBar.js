import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                 <ReactBootStrap.Navbar bg="dark" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="home">TMDB Client</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="home">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="home">Favorites</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="home">Upcoming Movies</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="home">Search</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                    
                </ReactBootStrap.Navbar>
            </div>
        )
    }
}
