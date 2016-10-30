/**
 * Represents a cluster of neurons to be used in an artificial neural network.
 * @param {array} neurons - An array containing a group of neurons to be connected in this layer.
 * @author Donnie Marges <donniemarges@gmail.com>
 * @version 0.0.1
 */
function NeuronLayer(neurons) {

	/** Since neurons are required, if we don't get them we just return undefined. */
	if(!neurons) {
		return;
	}

	/** Set instance variables. */
	this.numberOfNeurons = neurons.length;
	this.numberOfInputsPerNeuron = neurons[0].numberOfInputs;
	this.neurons = neurons;
}