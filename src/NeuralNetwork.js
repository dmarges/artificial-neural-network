/**
 * This is the actual Neural Network. This manages the Neural Layers and Neurons to generate outputs.
 * @param {array} neuronLayers - An array containing a group of neural layers that the network will manage.
 * @param {number} numOfOutputs - The number of outputs that will be generated and used by the network. Defaults to 2.
 * @param {number} activationResponse - The activation value is the threshold in which a Neuron should produce a response. Defaults to 1. 
 * @author Donnie Marges <dmarges@postmedia.com>
 * @version 0.0.1
 */
function NeuralNetwork(neuronLayers, numOfOutputs, activationResponse) {

	/** Since a Neural layer is required, if we don't get one we just return undefined. */
	if(!neuronLayers) {
		return;
	}

	/** If we don't get a number of outputs we just default to 2. */
	if(!numOfOutputs) {
		this.numberOfOutputs = 2;
	} else {
		this.numberOfOutputs = numOfOutputs;
	}

	/** Set instance variables. */
	this.numberOfLayers = neuronLayers.length;
	this.numberOfInputs = neuronLayers[0].neurons[0].numberOfInputs;
	this.numberOfNeuronsPerLayer = neuronLayers[0].neurons.length;
	this.layers = neuronLayers;

	/** If we don't get a valid param for activation, we just default to 1. */
	this.activationResponse = activationResponse || 1;
}

/**
 * Generalized methods for a Neural Network.
 * @author Donnie Marges <dmarges@postmedia.com>
 * @version 0.0.1
 */
NeuralNetwork.prototype = {

	/**
	 * Produces output values from neurons stored in neural layers.
	 * @author Donnie Marges <dmarges@postmedia.com>
	 * @version 0.0.1
	 */	
	update: function() {

		var outputs = [],
			weight = 0;

		/** 
		 * This series of nested loops is responsible for looping through each neural layer, then each neuron within each neural layer, and 
		 * then finally looping through each weight of each neuron. This is necessary to generate activation values for outputs.
		 */

		/** For each layer. */
		for(var i = 0; i < this.numberOfLayers; i++) {
    		outputs.length = 0;

    		weight = 0;

			/** For each neuron in the layer. */
			for(var j = 0; j < this.layers[i].numberOfNeurons; j++) {

				var netInputs = 0;

				/** For each weight in the neuron. */
				for(var k = 0; k < this.layers[i].neurons[j].numberOfInputs; k++) {
					var numberOfInputs = this.layers[i].neurons[j].numberOfInputs,
						currentNeuron = this.layers[i].neurons[j];

					netInputs += currentNeuron.weights[k] * currentNeuron.weights[numberOfInputs - 1];
				}

				outputs.push(this.sigmoid(netInputs, this.activationResponse));

				weight = 0;

			}
		}

		return outputs;
	},

	sigmoid: function(input, response) {
		if(!input || !response) {
			return;
		}

		return 1 / (1 + (Math.pow(2.7183, -input / response)));
	}
};