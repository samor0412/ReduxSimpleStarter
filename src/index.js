/*
    downwards Data Flow : the most parent components shd reponse to fetch the data
*/

import React ,{ Component }from 'react';
import ReactDOM from 'react-dom';           //library no need to write directory
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyCeRjZegcQAhUCAVBDsCVlmcaZ154P62oU'; //youtube api



//Create Component,it will produce some HTML

// const App = ()=>{        //const = final value of var , '()=>' replaces function()
//     return <div>
//         <SearchBar />
//     </div>;
// }

class App extends Component {
    constructor(props){
        super(props);

        this.state ={ videos:[] };

        YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
            this.setState({videos});
            // =this.setState({videos:videos})    only work when variable name is the same
        });
    }
    render(){
        return(
        <div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos}/>
        </div>
        );
    }
}

//Take this component's genereated HTML and put it on the page(int the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
