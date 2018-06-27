function bfs(rootNode, vertices, edges){

}

function findAdjacent(stationName, vertices, edges) {
  let results = []
  for (let i = 0; i < edges.length; i++) {
    if(edges[i][0] == stationName) {
      results.push(vertices.edges[i][1]);
    } else if (edges[i][1] == stationName) {
      results.push(vertiecs.edges[i][0]);
    }
  }
  return results;
}

function markDistanceAndPredecessor() {

}

function addToQueue() {

}
