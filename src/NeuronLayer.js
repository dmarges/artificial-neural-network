function NeuronLayer(neurons) {
	if(!neurons) {
		return;
	}

	this.numOfNeurons = neurons.length;
	this.numOfInputsPerNeuron = neurons[0].numOfInputs;
	this.neurons = neurons;
}