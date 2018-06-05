/*
    downwards Data Flow : the most parent components shd reponse to fetch the data
*/
import _ from 'lodash';
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

        this.state ={
          videos:[],
          selectedVideo:null
        };

        this.videoSearch('surfboards');


    }

    videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos) => {
          this.setState({
            videos:videos,
            selectedVideo:videos[0]}
          );
          // =this.setState({videos:videos})    only work when variable name is the same
      });
    }
    render(){
      const videoSearch=_.debounce((term)=> {this.videoSearch(term)},300);
        return(
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
            onVideoSelect={selectedVideo=>this.setState({selectedVideo})}   //callback !important
            videos={this.state.videos}/>
        </div>
        );
    }
}

//Take this component's genereated HTML and put it on the page(int the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
