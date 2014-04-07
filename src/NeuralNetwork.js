function NeuralNetwork(neuronLayers, numOfOutputs) {
	if(!neuronLayers) {
		return;
	}

	if(!numOfOutputs) {
		this.numberOfOutputs = 2;
	} else {
		this.numberOfOutputs = numOfOutputs;
	}

	this.numberOfLayers = neuronLayers.length;
	this.numberOfInputs = neuronLayers[0].neurons[0].numOfInputs;
	this.numberOfNeuronsPerLayer = neuronLayers[0].neurons.length;
	this.layers = neuronLayers;
}

NeuralNetwork.prototype = {
	update: function() {

	}
};