/**
 * 1) A graph is a non-linear s that consists of a finite number of vertices(nodes) connected by edges.
 * 2) Trees are a specific type of graph ds.
 *
 * -Types of graph
 * 1) Directed = graph in which the edges have a direction.
 * 2) Undirected = graph in which the edges are biderectional.
 *
 * Graph Usage-
 * - Google maps
 * - Social media sites
 *
 * Graph representation
 * 1- Adjacency Matrix
 * 2- Adjacency List
 */

// Adjacency matrix(V X V)
// const matrix = [
//     [0, 1, 0],
//     [1, 0, 1],
//     [0, 1, 0],
// ];

// console.log(matrix[0][1]); // As a connection exist between A to B

// Adjaceny List
// adjacencyList = {
//     A: ["B"],
//     B: ["A", "C"],
//     C: ["B"],
// };

// console.log(adjacencyList["C"]);

// Adjacency Matrix vs List(List is better)
/**
 * - With an adjacency list, we only need to store the values for the edges that exist, With adjacency matrix, you store values irrespective of whether an edge exists or not.
 * - Storage wise, an adjacency list is way more efficient.
 *
 * - With adjacency list, inserting and finding adjacent nodes is constant time where in matrix its linear.
 * - An list allows you to store additional values with an edge such as weigh of the edge.
 *
 *
 */

// Implementaion
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        // Undirected graph
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + "=>" + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
