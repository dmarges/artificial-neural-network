/**
 * Represents a single Neuron to be used in an artificial neural network.
 * @param {number} numOfInputs - Is the number of inputs this neuron will have.
 * @param {array} weights - An array to hold the weights of each input.
 * @author Donnie Marges <dmarges@postmedia.com>
 * @version 0.0.1
 */
function Neuron(numOfInputs, weights) {

	/** Since params are required, if we don't get them we just return undefined. */
	if(!numOfInputs || !weights) {
		return;
	}

	/** Set instance variables. */
	this.numberOfInputs = numOfInputs;
	this.weights = weights;
}