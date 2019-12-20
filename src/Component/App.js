import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'

class App extends React.Component {
    getTerm = (term) => {
        console.log(term, 'here')
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key="AIzaSyBgvAD0MkLtUdbeJa5CNhi-yxoXooCNrBg"&part=snippet, &q=${term}`)
        .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error);
          });
    }
    render() {
        return (
            <div>
                <SearchBar giveTerm={this.getTerm}/>
            </div>
        )
    }
}

export default App;