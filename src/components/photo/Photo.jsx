import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import './Photo.css';

function stripMarkup(html) {
  var regex = /(<([^>]+)>)/ig;
  var text = html.replace(regex, "");
  text = text.substr(0, 30);
  return text;
}

const Photo = props => (
  <div className="Photo">
    <div className="Frame">
      <img src={`${props.media}`} />
      <a href={`${props.link}`}>{props.title}</a> by <span>{props.author}</span>
      <p>{stripMarkup(props.description)}</p>
      <div>Tags: {props.tags}</div>
    </div>
  </div>
);

Photo.propTypes = { children: PropTypes.node.isRequired };
export default Photo;