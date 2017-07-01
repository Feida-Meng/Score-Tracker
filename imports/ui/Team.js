import React from 'react';
import {Teams} from './../api/teams';

export default class Team extends React.Component {

  addPoints() {
    Players.update(this.props.player._id,($inc: {score: 1}));
  }

  removePoint() {
    Players.update(this.props.player._id,{$inc: {score: -1} });
  }



}
