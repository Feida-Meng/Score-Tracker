import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {

  render() {

    return (
      <div>
        <h1> Score Trackor {this.props.title}</h1>
      </div>

    );
  }
}
