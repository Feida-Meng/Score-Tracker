import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {

  render() {
    return (
      <div className = "title-bar">
        <div className = 'wrapper'>
          <h1> Score Trackor</h1>
          <h4 className = 'title-bar__subtitle'> Created by F.Meng</h4>
        </div>
      </div>
    );
  }
}
