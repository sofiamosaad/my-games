import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

/*
Returns a promise holding an array of our score objects.
game parameter is either "memory", "snake" or "minesweeper" (collection ID)
orderBy is an array containing sorting instructions, e.g.: 
[["score", "desc"], ["timeMs", "asc"]]
*/

export function fetchLeaderboard(game, orderBy) {
  const auth = firebase.auth();
  const db = firebase.firestore();
  return auth
    .signInAnonymously()
    .then(() => {
      let query = db.collection(game);
    orderBy.forEach(rule => {
      query = query.orderBy(...rule);
    })
    return query.limit(10).get();
  })
    .then((querySnapshot) => {
      let leaderboard = [];
      querySnapshot.forEach((doc) => {
        leaderboard.push(doc.data());
      });
      return leaderboard;
    })
    .catch(function (error) {
      console.log("Error getting leaderboard: ", error);
    });
}

/* 
Returns a promise for saving the score
*/

export function saveScore(game, score) {
  const auth = firebase.auth();
  const db = firebase.firestore();
  return auth
    .signInAnonymously()
    .then(() => db.collection(game).add(score))
    .catch(function (error) {
      console.log("Error saving score: ", error);
    });
  }