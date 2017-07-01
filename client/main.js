import React from  'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Trackor} from 'meteor/tracker';

import {Teams} from './../imports/api/teams';
import TitleBar from './../imports/ui/TitleBar';
import AddTeam from './../imports/ui/AddTeam';
import TeamList from './../imports/ui/TeamList';

Meteor.startup( () => {
  Tracker.autorun( () => {
    let teams = Teams.find().fetch();
    let jsx = (
      <div>
        <TitleBar/>
        <TeamList teams = {teams}/>
        <AddTeam/>
      </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
  });
});
