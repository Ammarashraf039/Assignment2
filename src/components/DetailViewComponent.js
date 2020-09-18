import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import NavBar from './NavBar'

export default class DetailViewComponent extends Component {

    constructor(props) {
        super(props)
        // const search = props.location.search; // returns the URL query String
        // const params = new URLSearchParams(search);
        // const IdFromURL = params.get('id');
    }

    viewReviews() {
        debugger;
        window.location.href = '/reviews'
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className='row'>
                    <div style={{ backgroundColor: 'white', marginTop: '50px', marginLeft: '50px' }} className='col-sm-3'>
                        <a>
                            <img width='100%' style={{ marginLeft: 'auto', marginRight: 'auto' }}
                                src='https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' />
                        </a>
                    </div>

                    <div className='col-sm-6'>
                        <div style={{ backgroundColor: 'white', marginTop: '50px', textAlign: 'left' }}>
                            <h2>My Hero Academia: Heroes Rising</h2>
                            <h4 style={{ textAlign: 'left' }}>Overview</h4>
                            <p style={{ textAlign: 'left' }}>Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.</p>
                            <ul style={{ marginTop: '10px' }} className="list-group list-group-horizontal"><li className="list-group-item list-group-item-dark">Runtime (min.)</li><li className="list-group-item ">104</li><li className="list-group-item list-group-item-dark">Release Date</li><li className="list-group-item ">2019-12-20</li></ul>
                            <ul style={{ marginTop: '10px' }} className="list-group list-group-horizontal"><li className="list-group-item list-group-item-dark">Genres</li><li className="list-group-item">Animation</li><li className="list-group-item">Action</li></ul>
                            <ul style={{ marginTop: '10px' }} className="list-group list-group-horizontal"><li className="list-group-item list-group-item-dark">Spoken Languages</li><li className="list-group-item">日本語</li></ul>
                            <ul style={{ marginTop: '10px' }} className="list-group list-group-horizontal"><li className="list-group-item list-group-item-dark">Production Companies</li><li className="list-group-item">BONES</li><li className="list-group-item">Toho Company, Ltd.</li></ul>

                            <Button onClick={this.viewReviews} style={{ marginTop: '10px' }}>View Reviews</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
