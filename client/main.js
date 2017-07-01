import React from  'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Trackor} from 'meteor/tracker';

import TitleBar from './../imports/ui/TitleBar';
import AddTeam from './../imports/ui/AddTeam';
import Player from './../imports/ui/Player';

Meteor.startup( () => {
  Tracker.autorun( () => {
    let jsx = (
      <div>
        <TitleBar/>
        <AddTeam/>
        <Player player = {player}/>
      </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
  });
});
