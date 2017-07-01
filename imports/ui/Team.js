import React from 'react';
import {Teams} from './../api/teams';

export default class Team extends React.Component {

  addPoints() {
    Teams.update(this.props.team._id,{$inc: {score: 1} });
  }

  removePoint() {
    Teams.update(this.props.team._id,{$inc: {score: -1} });
  }

  removeTeam() {
    Teams.remove(this.props.team._id);
  }

  render() {
    return (
      <p key = {this.props.team._id}>
        {this.props.team.name} has {this.props.team.score} point(s).
        <button onClick = {this.addPoint.bind(this)} > +1 </button>
        <button onClick = {this.removePoint.bind(this)} > -1 </button>
        <button onClick = {this.removeTeam.bind(this)} > X </button>
      </p>
    );
  }



}
