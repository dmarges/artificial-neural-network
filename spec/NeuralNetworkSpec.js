describe("Creating a Neural Network", function() {
	beforeEach(function() {
		var neurons = [new Neuron(5, [0, 0, 0, 0, 0]), new Neuron(5, [0, 0, 0, 0, 0]), new Neuron(5, [0, 0, 0, 0, 0]), new Neuron(5, [0, 0, 0, 0, 0]), 
			new Neuron(5, [0, 0, 0, 0, 0])],
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

describe("Updating a Neural Network", function() {
	beforeEach(function() {
		this.neurons = [new Neuron(5, [1, 0, 0, 0, 1]), new Neuron(5, [1, 1, 1, 1, 1]), new Neuron(5, [1, 0, 1, 1, 0]), new Neuron(5, [1, 1, 1, 1, 0]), new Neuron(5, [0, 1, 1, 1, 0])],
		this.neuralLayer = [new NeuronLayer(this.neurons)];
		this.neuralNet = new NeuralNetwork(this.neuralLayer, 2);
	});

	it("should create a valid Neural Netork", function() {
		var testNeurons = this.neuralNet.update();

		expect(testNeurons.length).toBeGreaterThan(0);

		for(var i = 0; i < testNeurons.length; i++) {
			expect(testNeurons[i]).not.toBe(undefined);
			expect(testNeurons[i]).toBeGreaterThan(0);
		}

	});

	afterEach(function() {
		this.neuralNet = undefined;
	});
});