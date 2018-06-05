import React, {Component} from 'react';
//import React from 'react'             //Version1

// const SearchBar = () => {            //Version0
//     return <input /> ;
// };

//class SearchBar extends React.Component{...}  //Version1
class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={term: ''};
    }

    render(){
        return(
        <div>
            <input
            value={this.state.term}
            onChange={event=> this.onInputChange(event.target.value)} />
        </div>                                                   // replaces {this.onInputChange}
    )
    }
    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
    // onInputChange(event){
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
