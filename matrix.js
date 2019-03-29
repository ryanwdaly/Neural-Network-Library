
class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.matrix = [];

        for(let i = 0; i < this.rows; i++){
            this.matrix[i] = [];
            for(let j = 0; j < this.cols; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }
    multiply(n) {
        if (n instanceof Matrix) {
            if (this.cols !== n.rows) {
                console.log("Cols of A must match rows of B");
                return undefined;
            }
            let a = this;
            let b = n;
            let result = new Matrix(a.rows, b.cols);
            for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.cols; j++) {
                    let sum = 0;
                    for (let k = 0; k < a.cols; k++) {
                        sum += a.matrix[i][k] * b.matrix[k][j]
                    }
                    result.matrix[i][j] = sum;
                }
            } 
            return result;
        } else {
            // Scallor Product
            for(let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] *= n;
                }
            }
        }
    }
    add(n) {
        if (n instanceof Matrix) {
            if (this.cols != n.rows) {
                console.log("Cols of A must match rows of B");
                return undefined;
            }
            for (let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] += n.matrix[i][j];
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++){
                for (let j = 0; j < this.cols; j++) {
                    this.matrix[i][j] += n;
                }
            }
        }
    }
    randomize() {
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++) {
                this.matrix[i][j] = Math.floor(Math.random() * 10);
            }
        }
    }
}