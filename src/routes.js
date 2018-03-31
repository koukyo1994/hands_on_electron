import React, { Component } from 'react';
import Link from 'react-router-dom';
import PropTypes from "prop-types";

const styles = {
  black: {
    color: "#000000"
  },
  blue: {
    color: "#0000ff"
  }
};

export function SceneA(props) {
  return <div style={props.blue ? styles.blue : styles.black}>SceneA</div>;
}

export class SceneB extends React.Component {
  render() {
    return (
      <div>
        SceneB
      </div>
    );
  }
}

SceneA.propTypes = {
  blue: PropTypes.bool.isRequired
};
