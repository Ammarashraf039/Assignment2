import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar bg="dark" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="/">TMDB Client</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="mr-auto" style={{alignItems: 'flex-end'}}>
                        <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/">Favorites</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/">Upcoming Movies</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/">Search</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>

                </ReactBootStrap.Navbar>
            </div>
        )
    }
}
