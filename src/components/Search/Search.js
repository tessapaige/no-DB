import React, { Component } from 'react';
import Playlist from '../Playlist/Playlist'
import axios from 'axios';
import Send from '../Send/Send'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            videos: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.search = this.search.bind(this);
    }

    handleSearch(e) {
        this.setState({ search: e.target.value })
    }

    search() {
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.search}&maxResults=25&part=snippet&key=${process.env.REACT_APP_YOUTUBE_KEY}`)
        .then(res => {
            console.log(res.data.items[0].snippet.title)
            this.setState({videos: res.data.items})
        })
    }

    render() {
        let videosToDisplay = this.state.videos.map((element, index) => {
            return (
                <div key={index}>
                    <p>{element.snippet.title}</p>
                    <iframe src={`https://www.youtube.com/embed/${element.id.videoId}`} frameBorder="0" allowFullScreen ng-show="showvideo"></iframe>
                </div>
            )
        })
        return (
            <div>
                <h1>Playlist</h1>
                <input onChange={this.handleSearch} type="text" />
                <button onClick={this.search}>Search</button>
                <Playlist videosToDisplay={videosToDisplay}/>
                <Send videoId={this.state.videos}/>
            </div>

        )
    }
}

export default Search;