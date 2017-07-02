import {Mongo} from 'meteor/mongo';

export const Teams = new Mongo.Collection('teams');

export const teamRanks = (players) => {
  let rank = 1;
  return players.map( (player, index) => {
    if (index != 0 && players[index - 1].score > player.score) {
      rank ++;
    }

    return {
      ...player,
      rank
    };
  });
};
