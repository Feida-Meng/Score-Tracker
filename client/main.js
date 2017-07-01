import React from  'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

import TitleBar from './../imports/ui/TitleBar';

Meteor.startup( () => {
  let jsx = (
    <TitleBar/>
  )
  ReactDOM.render(jsx,document.getElementById('app'));
});
