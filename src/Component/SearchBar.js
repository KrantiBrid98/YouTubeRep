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
                <div className="ui search">
                    <div className="field">
                        <br /><br />
                        <label>Search here</label>
                        <br />
                        <form className="ui icon input" onSubmit={this.sendTerm}>
                            <input className="prompt" type="text" placeholder="search videos..." onChange={this.onSearchClick} />
                            <i className="search icon" onClick={this.sendTerm}></i>
                        </form>
                    </div>
                </div>
        )
    }
}

export default SearchBar;