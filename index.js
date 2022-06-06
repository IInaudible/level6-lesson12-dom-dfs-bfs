function domDFS(node, tagTarget, visitedNodes=[], results=[]) {
	if (node !== null && !visitedNodes.includes(node)) {
			visitedNodes.push(node)
			if (node.tagName && node.tagName.toLowerCase() === tagTarget.toLowerCase()) {
					results.push(node)
			}
			for (let child of node.children) {
					domDFS(child, tagTarget, visitedNodes, results)
			}
	}
	return results
}

function domIterativeDFS(node, tagTarget) {
	const vistedNodes = [];
	const results = [];
	const stack = [node];

	while (stack.length !== 0) {
		node = stack.pop()
		if (node !== null && !vistedNodes.includes(node)) {
			vistedNodes.push(node)
			if (node.tagName && node.tagName.toLowerCase() === tagTarget.toLowerCase()) {
				results.push(node)
			}
			for (let child of node.children) {
				stack.push(child);
			}
		}
	}

	return results
}

// First, let’s convert the following Recursive Depth-First Search function into
//   an Iterative one using an array as a stack.

// 1) Copy the domDFS function definition below, and rename
//    the function to "domIterativeDFS"
// 2) Move the recursive helper parameters into the top of the function
//    as variables (visitedNodes & results)
// 3) Create a new variable under those called "stack" and set it to
//    be an array holding the passed-in "node" parameter
// 4) Create a while loop where its only condition is to check if the
//    stack has at least one item in it
// 5) Inside the while loop, set the "node" variable to be the popped
//    value from the stack
// 6) Move the if statement inside of the while loop below the popped value
// 7) Remove the recursive function call and instead of passing the next
//    node recursively, just push the next node to the stack
// 8) Use the "domIterativeDFS" function in our console log (at the bottom)
//    instead of "domDFS" and ensure it works the same way

function domIterativeBFS(node, tagTarget) {
	const vistedNodes = [];
	const results = [];
	const queue = [node];

	while (queue.length !== 0) {
		node = queue.shift()
		if (node !== null && !vistedNodes.includes(node)) {
			vistedNodes.push(node)
			if (node.tagName && node.tagName.toLowerCase() === tagTarget.toLowerCase()) {
				results.push(node)
			}
			for (let child of node.children) {
				queue.push(child);
			}
		}
	}

	return results
}

// Second, let's create a Breadth-First Search function

// 1) Copy the Iterative Depth-First Search function created above, and
//    paste it below, changing its name to "domIterativeBFS"
// 2) Change the "stack" variable name to "queue"
// 3) Since this is a queue now, instead of popping values from the end like
//    the stack does, we should now instead be pulling items from the
//    beginning of the queue using "shift()" instead of "pop()"
// 4) Use the "domIterativeBFS" function in our console log (at the bottom)
//    instead of "domIterativeDFS" and ensure it retrieves the same amount of
//    "p" values

// Third, if everything is working correctly, you're done with the activity.
// So add, commit, and push your changes. Then submit a link to your forked
// repo to the activity on your online classroom.

console.log(domDFS(document.querySelector('body'), 'p').map(node => node.textContent));
console.log("")
console.log(domIterativeBFS(document.querySelector('body'), 'p').map(node => node.textContent));