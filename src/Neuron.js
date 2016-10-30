/**
 * Represents a single Neuron to be used in an artificial neural network.
 * @param {number} numOfInputs - Is the number of inputs this neuron will have.
 * @author Donnie Marges <donniemarges@gmail.com>
 * @version 0.0.1
 */
function Neuron(numOfInputs) {

	/** Since params are required, if we don't get them we just return undefined. */
	if(!numOfInputs) {
		return;
	}

	/** Set instance variables. */
	this.numberOfInputs = numOfInputs;


	/** We need to create a set of weights which is equal to numOfInputs + 1. The extra is to hold the bias for the neuron. */
	this.weights = [];

	for(var i = 0; i < numOfInputs+1; i++) {
		this.weights.push(Math.random() * 2 - 1);
	}
}