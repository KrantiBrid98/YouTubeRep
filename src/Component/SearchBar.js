import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }


    onSearchClick = (e) => {
        console.log(e.target.value)
        this.setState({
            term: e.target.value
        })
    }

    sendTerm = (e) => {
        e.preventDefault();
        this.props.giveTerm(this.state.term)
    }

    render() {
        return (
            <div>
                <h4>Search here</h4>
                <form onSubmit={this.sendTerm}>
                    <input type="text" onChange={this.onSearchClick} />
                    <i className="search icon" onClick={this.sendTerm}></i>
                </form>
            </div>
        )
    }
}

export default SearchBar;