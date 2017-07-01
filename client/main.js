import React from  'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import TitleBar from './../imports/ui/TitleBar';
import AddTeam from './../imports/ui/AddTeam';
Meteor.startup( () => {
  let jsx = (
    <div>
      <TitleBar/>
      <AddTeam/>
    </div>
  );
  ReactDOM.render(jsx,document.getElementById('app'));
});
