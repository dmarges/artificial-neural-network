# Javascript Artificial Neural Network Library

This is a standalone Artificial Neural Network libary and is an alternative to something like Encog 
which is an entire suite of Machine Learning tools.

# Usage
```
		//Include the JS file in your project.
		
		this.neurons = [new Neuron(5), new Neuron(5), new Neuron(5), new Neuron(5), new Neuron(5)],
		this.neuralLayer = [new NeuronLayer(this.neurons)];
		this.neuralNet = new NeuralNetwork(this.neuralLayer, 2);
```
