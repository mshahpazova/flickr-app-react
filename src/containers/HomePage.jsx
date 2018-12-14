import React, { Component } from 'react';

import Layout from '../hoc/Layout/Layout';
import classes from '../hoc/Layout/Layout.css';
import jquery from 'jquery';
import PhotoStream from '../components/photo-stream/PhotoStream';

class HomePage extends Component {
  constructor() {
    super();
    this.state = { photos: [] };
  }
  componentDidMount() {
    const uri = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?';

    jquery.getJSON(uri, (response) => {
      this.setState({ photos: response.items });
    });
  };

  render() {
    return (
      <div>
        <h1>photos</h1>
        <PhotoStream
          photos={this.state.photos} />
      </div>
    )
  }
}
export default HomePage;