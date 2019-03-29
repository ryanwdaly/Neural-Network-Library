
class NeuralNetwork {
    constructor(numI, numH, numO) {
        this.inputNodes = numI;
        this.hiddenNodes = numH;
        this.outputNodes = numO;
        // Weights between input and hidden
        this.weightsIH = new Matrix(this.hiddenNodes, this.inputNodes);
        // Weights between hidden and output
        this.weightsHO = new Matrix(this.outputNodes, this.hiddenNodes);
        // Bias of hidden nods
        this.biasH = new Matrix(this.hiddenNodes, 1);
        // Bias of output nodes
        this.biasO = new Matrix(this.outputNodes, 1);
        this.weightsIH.randomize();
        this.weightsHO.randomize();
        this.biasH.randomize();
        this.biasO.randomize();
    }

    feedforward(inputArr) {
        let input = Matrix.fromArray(inputArr);
        
        // Generating the Hidden Outputs
        let hidden = Matrix.multiply(this.weightsIH, input);
        hidden.add(this.biasH);
        hidden.map(sigmoid);

        // Generating the output
        let output = Matrix.multiply(this.weightsHO, hidden);
        output.add(this.biasO);
        output.map(sigmoid);

        return output.toArray();
    }
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}