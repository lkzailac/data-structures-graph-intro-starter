
class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = {};
  }

  addVertex(vertex) {
    // Code goes here ...
    if(!this.adjList[vertex]){
      this.adjList[vertex] = [];
    }
  }

  addEdges(srcValue, destValue) {
    // Code goes here ...
    if(!this.adjList[srcValue]){
      this.addVertex(srcValue);
    }
    if(!this.adjList[destValue]){
      this.addVertex(destValue);
    }

    this.adjList[srcValue].push(destValue);
    this.adjList[destValue].push(srcValue);
  }

  //receiving an 2D array of edges
  //cycle through every edge
  //create an edge within new graph for every edge
  //creating an adjList with the edges provided
  //edges.forEach >>
    //if we dont have key, create new key
    //if we do, we add the second element of edge array as a neighbor to the key

  buildGraph(edges) {
    edges.forEach(edge => {
      this.addEdges(edge[0], edge[1]);
    })
    return this.adjList;
  }
  //visit vertex
  //then visit ALL children
  //keep track of visited as a Set
  //should examine key vertex

  breadthFirstTraversal(startingVertex) {
    const visitedQ = [];
    const allV = [];
    visited.push(startingVertex);


    for(let vertex in this.adjList) {
      //cycle through neighbors
      //if they havent been visited add them to visited, other wise skip(continue)
      //console.log(typeof vertex);

      //visit neighbors
      this.adjList[vertex].forEach(neighbor => {
        if(!visited.includes(neighbor)) {
          visited.push(neighbor);
        }
        //if it has been visited..
      })
    }
    console.log(Array.from(visited));
    return Array.from(visited);
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};
