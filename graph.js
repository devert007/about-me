class Graph {
	constructor() {
		this.vertices = {};
	}

	addVertex(vertex) {
		this.vertices[vertex] = {};
	}

	addEdge(vertex1, vertex2) {
		this.vertices[vertex1][vertex2] = null;
	}

	breadthFirstSearch(startVertex, targetAction) {
		let queue = [startVertex];
		let visited = {};

		while (queue.length > 0) {
			let currentVertex = queue.shift();

			if (this.isAction(currentVertex, targetAction)) {
				return `Found ${targetAction} in the graph`;
			}

			visited[currentVertex] = true;

			Object.keys(this.vertices[currentVertex]).forEach((neighbor) => {
				if (!visited[neighbor]) {
					queue.push(neighbor);
				}
			});
		}

		return `Did not find ${targetAction} in the graph`;
	}

	isAction(vertex, targetAction) {
		return vertex === targetAction;
	}
}

const graph = new Graph();

// Добавляем вершины
graph.addVertex("wake up");
graph.addVertex("to do exercise");
graph.addVertex("take a shower");
graph.addVertex("get dressed");
graph.addVertex("brush teeth");
graph.addVertex("get breakfast");
graph.addVertex("to wrap up a lunch");

// Добавляем ребра
graph.addEdge("wake up", "to do exercise");
graph.addEdge("to do exercise", "take a shower");
graph.addEdge("take a shower", "get dressed");
graph.addEdge("wake up", "brush teeth");
graph.addEdge("brush teeth", "get breakfast");
graph.addEdge("wake up", "to wrap up a lunch");

const targetAction = "to wrap up a lunch";
console.log(graph.breadthFirstSearch("wake up", targetAction));
