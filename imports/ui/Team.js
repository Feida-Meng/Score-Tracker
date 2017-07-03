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

  reducePointButtonClass() {
    return (this.props.team.score < 1 ? "button button--round button--hidden" : "button button--round");
  }

  render() {

    let teamClassName = `team list-item list-item__rank-${this.props.team.rank}`;
    // let reducePointButtonClass = this.props.team.score < 1 ? "button button--round button--hidden" : "button button--round";

    return (
      <div className = {teamClassName} key = {this.props.team._id}>
        <div>
          <h3 className = 'team__name'> {this.props.team.name} </h3>
          <p className = 'team__stats'>  {this.props.team.position} place, {this.props.team.score} point(s). </p>
        </div>
        <div className = 'team__actions'>
          <button className = 'button button--round' onClick = {this.addPoints.bind(this)} > +1 </button>
          <button className = {this.reducePointButtonClass()} onClick = {this.removePoints.bind(this)} > -1 </button>
          <button className = 'button button--round button--remove' onClick = {this.removeTeam.bind(this)} > X </button>
        </div>
      </div>
    );
  }

}

Team.propTypes = {
  team: PropTypes.object.isRequired
}
