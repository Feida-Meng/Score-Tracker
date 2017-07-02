import React from 'react';
import {Teams} from './../api/teams';
import PropTypes from 'prop-types';

export default class Team extends React.Component {

  addPoints() {
    Teams.update(this.props.team._id,{$inc: {score: 1} });
  }

  removePoints() {
    Teams.update(this.props.team._id,{$inc: {score: -1} });
  }

  removeTeam() {
    Teams.remove(this.props.team._id);
  }

  render() {
    return (
      <div className = 'list-item' key = {this.props.team._id}>
        <p> {this.props.team.name} has {this.props.team.score} point(s). </p>
          <button onClick = {this.addPoints.bind(this)} > +1 </button>
          <button onClick = {this.removePoints.bind(this)} > -1 </button>
          <button onClick = {this.removeTeam.bind(this)} > X </button>
      </div>
    );
  }

}

Team.propTypes = {
  team: PropTypes.object.isRequired
}
