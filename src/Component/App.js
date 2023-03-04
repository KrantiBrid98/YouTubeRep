import React, { Fragment } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import './App.css'
import Loader from './Loader'
class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: '',
        loader: false
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
        try {
            this.setState({
                ...this.state,
                loader: true
             })
            const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxREsult=5&key=AIzaSyDH7ZHio4N2SHc4z1WbFt3U9SnGqHCNPjU&q=${term}`)
            this.setState({
                ...this.state,
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            })
        } catch(e){
            console.log(e)
        } finally {
            this.setState({
               ...this.state,
               loader: false
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="contTitle ui justified aligned header">
                    <div className="logo" />
                    <div className="headi">YouTube</div>
                </div>
                {!this.state.loader ? <div className="ui container">
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
                </div> : <Loader/>}
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