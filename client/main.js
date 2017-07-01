import React from  'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Trackor} from 'meteor/tracker';

import TitleBar from './../imports/ui/TitleBar';
import AddTeam from './../imports/ui/AddTeam';

Meteor.startup( () => {
  Tracker.autorun( () => {
    let jsx = (
      <div>
        <TitleBar/>
        <AddTeam/>
      </div>
    );
    ReactDOM.render(jsx,document.getElementById('app'));
  });
});
