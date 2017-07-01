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
      <p key = {this.props.team._id}>
        {this.props.team.name} has {this.props.team.score} point(s).
        <button onClick = {this.addPoints.bind(this)} > +1 </button>
        <button onClick = {this.removePoints.bind(this)} > -1 </button>
        <button onClick = {this.removeTeam.bind(this)} > X </button>
      </p>
    );
  }

}

Team.propTypes = {
  team: PropTypes.object.isRequired
}
