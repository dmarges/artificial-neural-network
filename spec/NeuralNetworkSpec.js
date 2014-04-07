describe("Creating a Neural Network", function() {
	beforeEach(function() {
		var neurons = [new Neuron(), new Neuron(), new Neuron(), new Neuron(), new Neuron()],
			neuralLayer = [new NeuronLayer(neurons)];
		this.neuralNet = new NeuralNetwork(neuralLayer, 2);
	});

	it("should create a valid Neural Netork", function() {
		expect(this.neuralNet).not.toBe(undefined);
		expect(this.neuralNet.numberOfOutputs).toEqual(2);
		expect(this.neuralNet.numberOfLayers).toEqual(1);
		expect(this.neuralNet.numberOfInputs).toEqual(5);
		expect(this.neuralNet.numberOfNeuronsPerLayer).toEqual(5);
		expect(this.neuralNet.layers.length).toEqual(1);
	});

	afterEach(function() {
		this.neuralNet = undefined;
	});
});