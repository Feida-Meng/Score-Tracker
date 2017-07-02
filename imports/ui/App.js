import React from 'react';

import TitleBar from './TitleBar';
import AddTeam from './AddTeam';
import TeamList from './TeamList';
import {Teams,teamRanks} from './../api/teams';


export default class App extends React.Component {

  teams() {
    return teamRanks(Teams.find({},{sort:{score:-1,name:1}}).fetch());
  }

  render() {
    return (
      <div>
        <TitleBar/>
        <div className = 'wrapper'>
          <TeamList teams = {this.teams()}/>
          <AddTeam/>
        </div>
      </div>
    );
  }
}
