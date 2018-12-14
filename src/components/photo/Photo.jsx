import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import './Photo.css';

function stripMarkup(html) {
  var regex = /(<([^>]+)>)/ig;
  return html.replace(regex, "");
}

const Photo = props => (
  <div className="Photo">
    <div className="Frame">
      <img src={`${props.media}`} />
      <a href={`${props.link}`}>{props.title}</a> by
      <span>{props.author}</span>
      <p>{stripMarkup(props.description)}</p>
      <div>{props.tags}</div>
    </div>
  </div>
);

Photo.propTypes = { children: PropTypes.node.isRequired };
export default Photo;