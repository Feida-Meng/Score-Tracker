import React from 'react';

import TitleBar from './TitleBar';
import AddTeam from './AddTeam';
import TeamList from './TeamList';
import {Teams} from './../api/teams';

export default class App extends React.Component {

  teams() {
    return Teams.find({},{sort:{score:-1,name:1}}).fetch();
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
