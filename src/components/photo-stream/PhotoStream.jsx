import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import Photo from '../photo/Photo';
import classes from './PhotoStream.css';

const PhotoStream = props => (
  <div className="PhotoStream">
    {props.photos.map(function (item) {
      return (
        <Photo title={item.title}
          link={item.link}
          author={item.author}
          description={item.description}
          tags={item.tags}
          media={item.media.m} />
      )
    })}
  </div>
);

PhotoStream.propTypes = { children: PropTypes.node.isRequired };
export default PhotoStream;
