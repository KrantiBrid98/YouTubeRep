import React, { Fragment } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: ''
    }

    componentDidMount() {
        this.getTerm('top news')
    }

    getSelectedVideo = (selectedVideoObj) => {
        console.log(selectedVideoObj)
        this.setState({
            selectedVideo: selectedVideoObj
        })
    }

    getTerm = async (term) => {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxREsult=5&key=AIzaSyBgvAD0MkLtUdbeJa5CNhi-yxoXooCNrBg&q=${term}`)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    render() {
        return (
            <Fragment>
                <div className="contTitle ui justified aligned header">
                    <div className="headi">Youtube</div>
                </div>
                <div className="ui container">
                    <SearchBar giveTerm={this.getTerm} />
                    <br />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="ten wide column" >
                                <VideoDetail selectedVideo={this.state.selectedVideo} />
                            </div>
                            <div className="six wide column" >
                                <VideoList videos={this.state.videos} getSelectedVideo={this.getSelectedVideo} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App;

// alternative request using fetch
// getTerm = (term) => {
//     console.log(term, 'here')
//     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxREsult=5&key=AIzaSyBgvAD0MkLtUdbeJa5CNhi-yxoXooCNrBg&q=${term}`)
//     .then(response => {
//         console.log(response)
//       })
//       .catch(error => {
//         console.log(error);
//       });
// }