import React from 'react';
import PropTypes from 'prop-types';

export default class AddPlayer extends React.Component {

  render() {
    return (
      <form>
        <input type = 'text' name = 'teamName' placeholder = "Team Name"/>
        <button>Add Team</button>
      </form>
    );
  }

}
