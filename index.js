function bfs(rootNode, vertices, edges){

}

function findAdjacent(stationName, vertices, edges) {
  let results = [];
  for (let i = 0; i < edges.length; i++) {
    if(edges[i][0] == stationName) {
      // find object in vertices array
      for (let j = 0; j < vertices.length; j++) {
        if (vertices[j].name == edges[i][1] && !vertices[j].distance) {
          results.push(vertices[j]);
          edges.splice(i,1);
          i--;
          break;
        }
      }
    } else if (edges[i][1] == stationName) {
      // find object in vertices array
      for (let j = 0; j < vertices.length; j++) {
        if (vertices[j].name == edges[i][0] && !vertices[j].distance) {
          results.push(vertices[j]);
          edges.splice(i,1);
          i--;
          break;
        }
      }
    }
  }
  return results;
}

// edges = [
//   ['14th&6th', '23rd&6th'],
//   ['23rd&6th', '34th&6th'],
//   ['34th&6th', '28th&Bwy'],
//   ['28th&Bwy', '23rd&Bwy'],
//   ['23rd&Bwy', '14th&Lex'],
//   ['14th&Lex', '23rd&Lex']
// ]
//
// vertices = [
//   {name: '34th&6th', distance: null, predecessor: null},
//   {name: '23rd&6th', distance: null, predecessor: null},
//   {name: '28th&Bwy', distance: null, predecessor: null},
//
//   {name: '14th&6th', distance: null, predecessor: null},
//   {name: '23rd&Bwy', distance: null, predecessor: null},
//   {name: '14th&Lex', distance: null, predecessor: null},
//   {name: '23rd&Lex', distance: null, predecessor: null}
// ]
//
//
// findAdjacent('34th&6th',vertices,edges);
// let thirtyFourthAndSixth = vertices[0]
// thirtyFourthAndSixth.distance = 0
//
// console.log(findAdjacent('28th&Bwy',vertices,edges));

function markDistanceAndPredecessor() {

}

function addToQueue() {

}
