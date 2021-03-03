
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
    const queue = [];
    const visited = [];

    queue.push(startingVertex);

    while(queue.length){
      const vertex = queue.shift();

      if(!visited.includes(vertex)){
        visited.push(vertex);
      }

      this.adjList[vertex].forEach(vertex => {
        if(!visited.includes(vertex)){          
          queue.push(vertex);
        }
      })

    }

    return visited;

    //Will iterate through whole adjList

    // for(let vertex in this.adjList) {
    //   //cycle through neighbors
    //   //if they havent been visited add them to visited, other wise skip(continue)
    //   //console.log(typeof vertex);

    //   //visit neighbors
    //   this.adjList[vertex].forEach(neighbor => {
    //     if(!visited.includes(neighbor)) {
    //       visited.push(neighbor);
    //     }
    //     //if it has been visited..
    //   })
    // }
    //console.log(visited);
    
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...

    let visited = new Set();
    let stack = [ startingVertex ];

    while (stack.length) {

        let vertex = stack.pop();

        // if this node has already been visited, then skip this node
        if (visited.has(vertex)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        //console.log(vertex);
        visited.add(vertex);

        // then add its neighbors to the stack to be explored
        stack.push(...this.adjList[vertex]);
    }

    // const visited = [];
    // const queue = [];

    // queue.push(startingVertex);

    // while(queue.length){
    //   //console.log(startingVertex);
    //   const vertex = queue.shift();

    //   for(let i = this.adjList[vertex].length - 1; i >= 0; i--){
    //     queue.push(...this.adjList[vertex]);
    //     let neighbor = this.adjList[vertex][i];
    //     if(!visited.includes(neighbor)){
    //       visited.push(neighbor);
    //       queue = [];
    //     }

    //     // if(this.adjList[startingVertex].length === 0){
    //     //   startingVertex = null;
    //     // }
    //   }
    // }

    //console.log(visited);

    return Array.from(visited);

    //console.log(visited);
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
    
  }

}

module.exports = {
  Graph
};
