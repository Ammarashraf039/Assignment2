import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default class Movies extends Component {


    constructor(props) {
        super(props);
        this.movies = [
            { filmName: "Joker", releaseDate: '2019-10-02', rating: 8.2, url: 'https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
            { filmName: "Invasion", releaseDate: '2020-01-01', rating: 7.1, url: 'https://image.tmdb.org/t/p/w500//dqKqzcdhtJwOhjqe89RTURqILtl.jpg' },
            { filmName: "Avengers: Infinity War", releaseDate: '2018-04-25', rating: 8.3, url: 'https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
            { filmName: "Ashfall", releaseDate: '2019-12-19', rating: 7.1, url: 'https://image.tmdb.org/t/p/w500//zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg' },
            { filmName: "Frozen II", releaseDate: '2019-11-20', rating: 7.3, url: 'https://image.tmdb.org/t/p/w500//pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg' },
            { filmName: "2019-12-25", releaseDate: '2019-12-25', rating: 7.9, url: 'https://image.tmdb.org/t/p/w500//iZf0KyrE25z1sage4SYFLCCrMi9.jpg' },
            { filmName: "The Immortal Wars: Resurgence", releaseDate: '2019-12-13', rating: 6.1, url: 'https://image.tmdb.org/t/p/w500//iFGU4UOXlxd0S4ohJI6TmoCTQrk.jpg' },
            { filmName: "Avengers: Endgame", releaseDate: '2019-04-24', rating: 8.3, url: 'https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg' }
        ]
    }

    routeChange = (item) => {
        window.location.href = '/detail'
    }

    render() {

        return (
            <div className="row" style={{ backgroundColor: '#17a2b8', marginLeft: '-15xp' }}>
                {this.movies.map((item, index) => (
                    <div className='col-sm-3' key={index} onClick={() => this.routeChange(item)} >
                        <div style={{ backgroundColor: 'white' }}>
                            <a>
                                <img width='80%' style={{ marginLeft: 'auto', marginRight: 'auto' }} src={item.url} />
                            </a>
                            <div>
                                <h4>{item.filmName}</h4>
                                <p><span>{item.releaseDate}</span></p>
                                <p><span>{item.rating}</span></p>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        )
    }
}
