describe("Creating a Neuron", function() {
	beforeEach(function() {
		this.neuron = new Neuron(5, [0, 0, 0, 0, 0]);
	});

	it("should create a neuron", function() {
		expect(this.neuron).not.toBe(undefined);
	});

	it("should create a neuron with 5 inputs and weight of 0 for each if no params are provided", function() {
		expect(this.neuron.numberOfInputs).toEqual(5);

		for(var i = 0; i < this.neuron.weights.length; i++) {
			expect(this.neuron.weights[i]).toEqual(0);
		}
	});

	it("should create a neuron with the inputs and weights provided by params", function() {
		this.neuron = new Neuron(10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

		expect(this.neuron.numberOfInputs).toEqual(10);

		for(var i = 0; i < this.neuron.weights.length; i++) {
			expect(this.neuron.weights[i]).toEqual(1);
		}
	});

	afterEach(function() {
		this.neuron = undefined;
	});
});