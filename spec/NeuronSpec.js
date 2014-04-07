describe("Creating a Neuron", function() {
	beforeEach(function() {
		this.neuron = new Neuron();
	});

	it("should create a neuron", function() {
		expect(this.neuron).not.toBe(undefined);
	});

	afterEach(function() {
		this.neuron = undefined;
	});
});