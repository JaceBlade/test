// Any JS in here is automatically ran for us

//Import the react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list.js';
//Create a component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }



  componentDidMount() {
    //Fantastic place to load data
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0', {
    headers: {
    Authorization: 'Client-ID db7ef476931ca61'
  }
}).then(response => this.setState({ images: response.data.data}));
  }

  render() {
    return (
     <div>
       <ImageList images={this.state.images}/>
     </div>
    );
  }
};

//Render this component to the screen
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
