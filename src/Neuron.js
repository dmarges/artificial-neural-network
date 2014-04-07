function Neuron(numOfInputs, weights) {
	this.numOfInputs = numOfInputs || 5;
	this.weights = weights || [0, 0, 0, 0, 0];
}