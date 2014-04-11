describe("Creating a Neuron Layer", function() {
	beforeEach(function() {
		var neurons = [new Neuron(5), new Neuron(5), new Neuron(5), new Neuron(5), 
			new Neuron(5)];
		this.neuronLayer = new NeuronLayer(neurons);
	});

	it("should create a valid Neuron Layer", function() {
		expect(this.neuronLayer).not.toBe(undefined);
	});

	it("should accept an array of neurons and also track the number of neurons present", function() {
		expect(this.neuronLayer.numberOfNeurons).toEqual(5);
	});

	it("should track the number of inputs per neuron", function() {
		expect(this.neuronLayer.numberOfInputsPerNeuron).toEqual(5);
	});

	it("should hold neurons passed into it", function() {
		expect(this.neuronLayer.neurons.length).toEqual(5);
	});

	afterEach(function() {
		this.neuronLayer = undefined;
	});
});