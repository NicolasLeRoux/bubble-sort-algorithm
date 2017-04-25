'use strict';

/*
module.exports = function* () {
	yield 1;
	yield 2;
	yield 3;
};
*/

//console.log("Hello wolrd !!!");

module.exports = class BubbleSort {
	constructor(array, comparator) {
		this._array = array;
		this._comparator = comparator;
		this._result = [];
	}

	compute() {
		let clone = this._array.slice(0);

		for (let i = 0, length_i = clone.length; i < length_i; i++) {
			for (let j = 0, length_j = clone.length - 1; j < length_j; j++) {
				if (clone[j] > clone[j+1]) {
					let tmp = clone[j];
					clone[j] = clone[j+1];
					clone[j+1] = tmp;
				}
			}
		}

		this._result = clone;
	}

	next() {
		return {};
	}

	getStep(no) {
		return no;
	}

	get array() {
		return this._array;
	}

	get result() {
		return this._result;
	}
};
