function bfs(rootNode, vertices, edges){

}

function findAdjacent(stationName, vertices, edges) {
  let results = []
  for (let i = 0; i < edges.length; i++) {
    if(edges[i][0] == stationName) {
      results.push(vertices.edges[i][1]);
    } else if (edges[i][1] == stationName) {
      results.push(vertices.edges[i][0]);
    }
  }
  return results;
}

edges = [
  ['14th&6th', '23rd&6th'],
  ['23rd&6th', '34th&6th'],
  ['34th&6th', '28th&Bwy'],
  ['28th&Bwy', '23rd&Bwy'],
  ['23rd&Bwy', '14th&Lex'],
  ['14th&Lex', '23rd&Lex']
]

vertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
  {name: '28th&Bwy', distance: null, predecessor: null},

  {name: '14th&6th', distance: null, predecessor: null},
  {name: '23rd&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
  {name: '23rd&Lex', distance: null, predecessor: null}
]

console.log(findAdjacent('34th&6th',vertices,edges));

function markDistanceAndPredecessor() {

}

function addToQueue() {

}
