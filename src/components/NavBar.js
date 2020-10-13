import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar bg="dark" variant="dark">
                    <ReactBootStrap.Navbar.Brand href="/">TMDB Client</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="mr-auto" style={{alignItems: 'flex-end'}}>
                        <ReactBootStrap.Nav.Link as={Link} to="/">Home</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link as={Link} to="/favourites">Favorites</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link as={Link} to="/">Upcoming Movies</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link as={Link} to="/">Search</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>

                </ReactBootStrap.Navbar>
            </div>
        )
    }
}
