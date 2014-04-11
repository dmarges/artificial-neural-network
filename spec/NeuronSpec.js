describe("Creating a Neuron", function() {
	beforeEach(function() {
		this.neuron = new Neuron(5);
	});

	it("should create a neuron", function() {
		expect(this.neuron).not.toBe(undefined);
	});

	it("should create a neuron with 5 inputs", function() {
		expect(this.neuron.numberOfInputs).toEqual(5);
	});

	it("should have 6 weights (one for bias)", function() {
		expect(this.neuron.weights.length).toEqual(6);

		for(var i = 0; i < this.neuron.weights.length; i++) {
			expect(this.neuron.weights[i]).not.toBe(undefined);
		}
	});

	afterEach(function() {
		this.neuron = undefined;
	});
});