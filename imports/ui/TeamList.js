import React from 'react';
import Team from './Team';

export default class TeamList extends React.Component {

  renderTeams() {

    if (this.props.teams.length > 0) {
      return this.props.teams.map ((team) => {
        return <Team key = {team._id} team = {team}/>;
      });
    } else {
      return (<p> Add your first team to start tracking! </p> );
    }
  }

  render() {
    return (

      <div>
        {this.renderTeams()}
      </div>
    );
  }


}
