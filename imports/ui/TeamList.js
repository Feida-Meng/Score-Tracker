import React from 'react';
import Team from './Team';
import FlipMove from 'react-flip-move';

export default class TeamList extends React.Component {

  renderTeams() {

    if (this.props.teams.length > 0) {
      return this.props.teams.map ((team) => {
        return <Team key = {team._id} team = {team}/>;
      });
    } else {
      return (
        <div className = 'list-item'>
          <p className = 'list-item__empty'> Add your first team to start tracking! </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
          {this.renderTeams()}
        </FlipMove>
      </div>
    );
  }


}
