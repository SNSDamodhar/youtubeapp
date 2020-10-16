import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../APIS/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos : [],
        selectedVideo : null
    };

    //We write this because when user opens the site there should be some videos to view
    //So we manually calls onTermSubmit to display some search results by default
    componentDidMount() {
        this.onTermSubmit('pubg');
    }

    //handles api requests and responses
    onTermSubmit = async (term) => {
        const response = await youtube.get(
            '/search',
            {
                params: {
                    q: term
                }
            }
        );

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        }) ;
    };

    //handles which video is selected by the user
    onVideoSelect = (video) => {
        console.log('Fromm App', video);
        this.setState({ selectedVideo: video });
    }


    render () {
        return (
            <div className = "ui container">
                <SearchBar onFormSubmit = {this.onTermSubmit} />

                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetail video = { this.state.selectedVideo } />
                        </div>
                        <div className = "five wide column">
                            <VideoList videos = { this.state.videos } onVideoSelect = {this.onVideoSelect} />
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default App;